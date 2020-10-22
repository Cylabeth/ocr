const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const AWS = require("aws-sdk")
const Dni = require('../models/dni.model')
const User = require('../models/user.model')


const ID = process.env.ID
const SECRET = process.env.SECRET
const BUCKET_NAME = process.env.BUCKET_NAME
const IDENTITY_POOL_ID = process.env.IDENTITY_POOL_ID
const REGION = process.env.REGION



let imgToBucket = ""
let allText=[]
let selectedText = []
let usefulData = {
    Apellidos: [], 
    Nombre: [],
    Sexo: [],
    Nacionalidad: [],
    FechaNacimiento: [],
    ValidoHasta: [],
    DNINum: []
}
let docSurname = ""
let docName = ""
let docGender = ""
let docNationality = ""
let docBirthDate = ""
let docValidUntil = ""
let docNumber = ""

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
})

AWS.config.update({
    region: REGION,
        accessKeyId: ID,
        secretAccessKey: SECRET
    })

router.post('/doc', (req, res) => {

    let {photourl} = req.body
    imgToBucket = photourl.match(/(ocr_)\w+/g)+".jpeg" 

    Dni.create({
        docType: "",
        docNumber: "",
        docName: "",
        docSurname: "",
        docGender: "",
        docNationality: "",
        docBirthDate: "",
        docBirthPlace: "",
        docAddress: "",
        docValidUntil: "",
        docDetails: "",
        imgURL: imgToBucket,
        owner: req.user._id
    })
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})

router.put('/form/:id', (req, res) => {
    console.log("esto es /form")
    const textract = new AWS.Textract()

    const params = {
        Document: {
            S3Object: {
                Bucket: BUCKET_NAME,
                Name: `${imgToBucket}`
               //Name: "IMG_2232.jpg" //DNI.jpg or IMG_2232.jpg /ocr_169349.jpeg
            }
        }
    }  

    textract.detectDocumentText(params, function(err, data) {
    
        if (err){
            console.log(err, err.stack)
        } 
        else {  
            
            data.Blocks.map(elem => allText.push(elem))
            allText.map(elem => elem.BlockType === "LINE" ? selectedText.push(elem.Text) : null)
            let regexDNI = ""
            selectedText.map(elem => {
               
                if(elem.includes("PRIMER")){ //   /\bPRIMER\b/ 
                    if(selectedText[2].length > 3){
                    usefulData.Apellidos.push(selectedText[2],selectedText[5])}
                    else{
                        usefulData.Apellidos.push(selectedText[3],selectedText[6])}

                    docSurname = usefulData.Apellidos.toString().replace(/,/g, ' ')}
                    
                    else if (elem.includes("APELLIDOS")){  
                        usefulData.Apellidos.push(selectedText[3], selectedText[4])
                        docSurname = usefulData.Apellidos.toString().replace(/,/g, ' ')}

                        
                    else if (elem.includes("NOMBRE")){
                        let position = selectedText.indexOf(elem)
                        usefulData.Nombre.push(selectedText[position+1])
                        docName = usefulData.Nombre.toString()}
                    
                    else if (elem.includes("SEXO")){
                        let position = selectedText.indexOf(elem)
                        usefulData.Sexo.push(selectedText[position+2])
                        docGender = usefulData.Sexo.toString()}
                    
                    else if (elem.includes("NACIONALIDAD")){
                        let position = selectedText.indexOf(elem)
                        usefulData.Nacionalidad.push(selectedText[position+2])
                        docNationality = usefulData.Nacionalidad.toString()}    
                
                    else if (elem.includes("FECHA")){
                        let position = selectedText.indexOf(elem)
                        usefulData.FechaNacimiento.push(selectedText[position+1])
                        docBirthDate = usefulData.FechaNacimiento.toString()}     
                    
                    else if (elem.includes("VALIDO")){
                        let position = selectedText.indexOf(elem)
                        usefulData.ValidoHasta.push(selectedText[position+1])
                        docValidUntil = usefulData.ValidoHasta.toString()}  
                    
                    else if (elem.includes("VALIDEZ")){
                        let position = selectedText.indexOf(elem)
                        let dateOnly = selectedText[position+1].split(' ').slice(1).join(' ')
                        usefulData.ValidoHasta.push(dateOnly)
                        docValidUntil = usefulData.ValidoHasta.toString()}    

                    else if (elem.includes("DNI")){
                        let position = selectedText.indexOf(elem)
                        usefulData.DNINum.push(selectedText[position+1])
                        /*
                        if(selectedText[position+1].length < 7){
                            usefulData.DNINum.push(selectedText[position+2])}
                        else{usefulData.DNINum.push(selectedText[position+1])}*/
                        docNumber = usefulData.DNINum.toString().replace(/,/g, '')}  

                })
                console.log(allText)
                console.log(selectedText)      
                //res.json(data) 

                const id = {_id: req.params.id}
               //console.log("Esto es imageURL: ",imageURL)
               //console.log("Esto es params.Document.S3Object.Name:  ",params.Document.S3Object.Name)
                Dni.findByIdAndUpdate(id,{
                    docType: "Documento Nacional de Identidad",
                    docNumber: docNumber,
                    docName: docName,
                    docSurname: docSurname,
                    docGender: docGender,
                    docNationality: docNationality,
                    docBirthDate: docBirthDate,
                    docBirthPlace: "",
                    docAddress: "",
                    docValidUntil: docValidUntil,
                    docDetails: "",
                    imgURL: "https://ocrtestwhite.s3-eu-west-1.amazonaws.com/" + params.Document.S3Object.Name
                    }, 
                    {new: true})
                    .then(response => res.json(response))
                    .catch(err => res.status(500).json(err))
            }           


    })

    
})

//listarchive

router.get('/listarchive', (req, res) => {

    let id = req.user._id
    if (!mongoose.Types.ObjectId.isValid(req.user._id)) {
        res.status(400).json({ message: 'Specified id is not valid' })
        return
    }

    Dni.find({owner:id})
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


//getOneDoc
router.get('/detailsdni/:dni_id', (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.dni_id)) {
        res.status(400).json({ message: 'Specified id is not valid' })
        return
    }
    Dni.findById(req.params.dni_id)
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})


router.put('/editdoc/:id', (req, res) => {

   // if (!mongoose.Types.ObjectId.isValid(req.params.dni_id)) {
   //     res.status(400).json({ message: 'Specified id is not valid' })
   //     return
   // }
    console.log("param ID: ", req.params.id, req.body)
    Dni.findByIdAndUpdate(req.params.id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.delete('/detailsdni/delete/:dni_id', (req, res) => {
    console.log(req.params.dni_id)
    if (!mongoose.Types.ObjectId.isValid(req.params.dni_id)) {
        res.status(400).json({ message: 'Specified id is not valid' })
        return
    }

    Dni.findByIdAndDelete(req.params.dni_id)
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})

module.exports = router
