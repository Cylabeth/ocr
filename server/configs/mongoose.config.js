const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://rodexid:qYtvuf-5dyvgo-sachiz@cluster0.g04kq.mongodb.net/rodexid'

mongoose
    .connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))

module.exports = mongoose