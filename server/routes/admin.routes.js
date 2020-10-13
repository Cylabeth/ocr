const express = require('express')
const router = express.Router()
const User = require('./../models/user.model')

const passport = require("passport")
const bcrypt = require("bcrypt")
const bcryptSalt = 10

const checkLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render('auth/login', { message: 'you have to login to continue' })
const checkRole = rolesToCheck => {
    return (req, res, next) => {
        if (req.isAuthenticated() && rolesToCheck.includes(req.user.role)) {
            next()
        }
        else {
            res.render('auth/login', { message: 'You are not allowed to see this part' })
        }
    }
}
//Create user
router.post('/', (req, res, next) => {
    const {
        username,
        password,
        role
    } = req.body
    if (!username || !password) {
        res.render("admin/admin", {
            errorMsg: "Fill user, pass and role"
        })
        return
    }
    User
        .findOne({
            username
        })
        .then(user => {
            if (user) {
                res.render("admin/admin", {
                    errorMsg: "User already exists in BBDD"
                })
                return
            }
            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(password, salt)
            User
                .create({
                    username,
                    password: hashPass,
                    role
                })
                .then(() => res.redirect("/admin/admin"))
                .catch(() => res.render("admin/admin", {
                    errorMsg: "Can't create user"
                }))
        })
        .catch(error => next(error))
})

//Delete user
router.post('/userdel/:id', (req, res) => {
    const id = req.params.id
    User.findByIdAndRemove(id)
        .then(() => res.redirect('/admin/admin'))
        .catch(err => console.log('ERROR', err))
})

module.exports = router