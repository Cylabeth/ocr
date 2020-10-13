const mongoose = require('mongoose');
const User = require('../models/user.model');
const bcrypt = require("bcrypt")
const bcryptSalt = 10

mongoose.connect('mongodb+srv://rodexid:qYtvuf-5dyvgo-sachiz@cluster0.g04kq.mongodb.net/rodexid')



const users = [

{
    username: 'admin',
    password: bcrypt.hashSync('admin', bcrypt.genSaltSync(bcryptSalt)),
    role: 'Admin'

},

{   
    username: 'user',
    password: bcrypt.hashSync('user', bcrypt.genSaltSync(bcryptSalt)),
    role: 'User'


}, {
    timestamps: true
}

]


User.create(users)
   .then(allusersCreated => console.log('There are', allusersCreated.length, 'users in BBDD'))
   .catch(err => console.log('ERROR: ', err))