import React from 'react'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import './archive.css'

const ArchiveCard = ({_id, docType,docNumber,docName,docSurname,remove}) => {

    return(
        <div>
        

           
                <ListGroup.Item className="archiveElement">
                <div className="archiveCardText">
                    <p style={{fontWeight:'bold'}}>{docNumber}</p>
                </div>
                <div className="archiveCardButtonsBox">
                <Link to={'/archive'} onClick={remove} className="buttonDelete"><i className="fa fa-times" aria-hidden="true"></i></Link>
                <Link to={`details/${_id}`} className="buttonEdit"><i className="fa fa-check" aria-hidden="true" /></Link>
                </div>
                </ListGroup.Item>
         
              
 
          
        </div>

    )

}

export default ArchiveCard

/*
        <p> {docSurname} </p> 

            <p style={{fontWeight:'bold'}}>{docNumber}</p>
            <div>
                <Link to={'/archive'} onClick={remove} className="buttonDelete"><i className="fa fa-times" aria-hidden="true"></i></Link>
                <Link to={`details/${_id}`} className="buttonEdit"><i className="fa fa-check" aria-hidden="true" /></Link>
            </div>



*/