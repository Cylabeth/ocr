const mongoose = require('mongoose')
const Schema = mongoose.Schema

const carnetSchema = new Schema({
    carType: {type: String},
    carNumber: {type: String},
    carName: {type: String},
    carSurname: {type: String},
    carKind: {type: String},
    carBirthDate: {type: String},
    carBirthPlace: {type: String},
    carExpeditionDate: {type: String} ,
    carValidUntil: {type: String},
    carDetails: {type: String},
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