const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dniSchema = new Schema({
    docType: {type: String},
    docNumber: {type: String},
    docName: {type: String},
    docSurname: {type: String},
    docGender: {type: String},
    docNationality: {type: String},
    docBirthDate: {type: String},
    docBirthPlace: {type: String},
    docAddress: {type: String},
    docValidUntil: {type: String},
    docDetails: {type: String},
    imgURL: {type: String},
    owner: {
        type: Schema.Types.ObjectId,
        rel: 'User'
    }
}, {
    timestamps: true
})

const Dni = mongoose.model('Dni', dniSchema)
module.exports = Dni