const joi = require('@hapi/joi')
const assert = require('chai').assert
const route = require('express').Router();

// middleware function

var middleOne = function(req, res, next){

    const data = {

        username : req.body.username,
        email : req.body.email,
        password : req.body.password,
        confirm_password : req.body.cpassword,

    }

    const joiObject = joi.object({
        
        username : joi.string().required(),
        email : joi.string().email({minDomainSegments: 2, tlds: { allow: ['com', 'net'] }}),
        password : joi.string().required(),
        confirm_password : joi.ref('password')
        
    })

    const {error, value } = joiObject.validate(data)

    if(error){

        res.render('home', {
            error_message: 'make sure you fill all the gap'
        })
    }
    else{
        next()
    }
}


//  home route
route.get('/home', function(req, res){
    res.render('home', { 
        error_message : '' 
    })
})

// login route
route.get('/login', function(req, res){

    res.render('login', { })
})

// form data
route.post('/push' , middleOne, function(req, res, next){

    res.redirect('/welcome')
})

// welcome route
route.get('/welcome', function(req, res){
    res.render('welcome', { })
})




module.exports = route