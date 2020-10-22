const mongoose = require('mongoose');
const Dni = require('../models/dni.model');

mongoose.connect(process.env.DB_REMOTE)

const dniDocs = [

{
    docType: "Documento Nacional de Identidad",

    docNumber:"12345678F",

    docName: "Unnombre",

    docSurname: "Unapellido",

    docGender: "F",

    docNationality: "ESP",

    docBirthDate: "01 01 1975",

    docBirthPlace: "Madrid",

    docAddress: "Calle Desengaño 21",

    docValidUntil: "20 05 2024",

    docDetails: "Loremipsum",

    imgURL: "https://ocrtestwhite.s3-eu-west-1.amazonaws.com/whitebox/ocr_389870.jpeg"


},

{   
    docType: "Documento Nacional de Identidad",

    docNumber:"87256789G",

    docName: "Otronombre",

    docSurname: "Otropellido",

    docGender: "M",

    docNationality: "ESP",

    docBirthDate: "12 10 1980",

    docBirthPlace: "Huelva",

    docAddress: "Calle Unacalle 21",

    docValidUntil: "14 03 2020",

    docDetails: "Loremipsum",

    imgURL: "https://ocrtestwhite.s3-eu-west-1.amazonaws.com/whitebox/ocr_389870.jpeg"

}

]


Dni.create(dniDocs)
   .then(alldocsCreated => console.log('There are', alldocsCreated.length, 'DNI in BBDD'))
   .catch(err => console.log('ERROR: ', err))