import React, { useRef, useState, useEffect, useImperativeHandle } from 'react';
import {Camera} from "react-camera-pro"
import styled from 'styled-components'
import AWS from 'aws-sdk'
import data from './bucket'
import DniService from '../../../services/dni.services'
import { useHistory } from 'react-router-dom'

AWS.config.update({
  region: data.REGION,
  credentials: new AWS.CognitoIdentityCredentials({
  IdentityPoolId: data.IDENTITY_POOL_ID,
  accessKeyId: data.ID,
  secretAccessKey: data.SECRET
  })})

const s3 = new AWS.S3({
  accessKeyId: data.ID,
  secretAccessKey: data.SECRET
})


const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const Control = styled.div`
  position: fixed;
  display: flex;
  right: 0;
  width: 20%;
  min-width: 130px;
  min-height: 130px;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  box-sizing: border-box;
  flex-direction: column-reverse;
  @media (max-aspect-ratio: 1/1) {
    flex-direction: row;
    bottom: 0;
    width: 100%;
    height: 20%;
  }
  @media (max-width: 400px) {
    padding: 10px;
  }
`;
const Button = styled.button`
  outline: none;
  color: white;
  opacity: 1;
  background: transparent;
  background-color: transparent;
  background-position-x: 0%;
  background-position-y: 0%;
  background-repeat: repeat;
  background-image: none;
  padding: 0;
  text-shadow: 0px 0px 4px black;
  background-position: center center;
  background-repeat: no-repeat;
  pointer-events: auto;
  cursor: pointer;
  z-index: 2;
  filter: invert(100%);
  border: none;
  &:hover {
    opacity: 0.7;
  }
`;
const FullScreenImagePreview = styled.div`
  width: 100%;
  height: 100%;
  z-index: 100;
  position: absolute;
  background-color: black;
  ${({ image }) => (image ? `background-image:  url(${image});` : '')}
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const ImagePreview = styled.div`
  width: 80px;
  height: 80px;
  ${({ image }) => (image ? `background-image:  url(${image});` : '')}
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 400px) {
    width: 40px;
    height: 40px;
  }
`;
const ChangeFacingCameraButton = styled(Button)`
  background: url(https://img.icons8.com/ios/50/000000/switch-camera.png);
  background-position: center;
  background-size: 40px;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  padding: 40px;
  &:disabled {
    opacity: 0;
    cursor: default;
    padding: 60px;
  }
  @media (max-width: 400px) {
    padding: 40px 5px;
    &:disabled {
      padding: 40px 25px;
    }
  }
`;

const TakePhotoButton = styled(Button)`
  background: url('https://img.icons8.com/ios/50/000000/compact-camera.png');
  background-position: center;
  background-size: 50px;
  background-repeat: no-repeat;
  width: 80px;
  height: 80px;
  border: solid 4px black;
  border-radius: 50%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const CameraPic = () => {
const TransferPic = new DniService()   
const camera = useRef(null)
const [numberOfCameras, setNumberOfCameras] = useState(0)
const [showImage, setShowImage] = useState(false)
const [image, setImage] = useState(null)
let history = useHistory()
return (
    <Wrapper>
        {showImage ? (
        < FullScreenImagePreview image={image} onClick={() => { setShowImage(!showImage) }} />) : (
          <Camera ref={camera} 
            numberOfCamerasCallback={setNumberOfCameras} 
            aspectRatio={1.2/1.474} //{1.2/1.474}
            facingMode='environment' 
            errorMessages={{
            noCameraAccessible: 'No camera device accessible. Please connect your camera or try a different browser.',
            permissionDenied: 'Permission denied. Please refresh and give camera permission.',
            switchCamera: 'It is not possible to switch camera to different one because there is only one video device accessible.',
            canvas: 'Canvas is not supported.'}}  /> )}

        <Control>
        <ImagePreview image={image} onClick={() => { setShowImage(!showImage)}} />   
            <TakePhotoButton onClick={() => {
                if (camera.current) {
                    const photo = camera.current.takePhoto()
                
                      setImage(photo)

                      //let myImage = photo.replace(/^data:image\/\w+;base64,/, "")
                      let myImage = Buffer.from(photo.replace(/^data:image\/\w+;base64,/, ""),'base64')

                      const type = photo.split(';')[0].split('/')[1];
                      const imageName = "ocr_" + Math.floor(Math.random() * 500000)
                      const params = {
                        Bucket: data.BUCKET_NAME,
                        Key: `${imageName}.${type}`, // File name you want to save as in S3
                        Body: myImage,
                        ACL: 'public-read',
                        ContentEncoding: 'base64',
                        ContentType: `image/${type}`
                      }
                    
                       // Uploading files to the bucket
                      s3.upload(params, function(err, data) {
                      if (err) {
                      throw err;
                      }

                      console.log(`File uploaded successfully. ${data.Location}`)

                      const urlPic = data.Location
                      TransferPic.createNewDoc({photourl:urlPic})
                                 .then(response => TransferPic.updateNewDoc(response.data._id))
                                 .then(response => history.push(`/showDoc/${response.data._id}`))
                                 .catch(error => console.log(error))


                      })
                  
                    }
                    }} />    
            <ChangeFacingCameraButton disabled={numberOfCameras <= 1} onClick={() => {
                if (camera.current) {
                    const result = camera.current.switchCamera()

                
                    } 
                    }} 
                      
                    />  
          
        </Control>
    </Wrapper>

    )

}

export default CameraPic;