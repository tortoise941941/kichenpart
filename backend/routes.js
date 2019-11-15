const joi = require('@hapi/joi')
const assert = require('chai').assert
const route = require('express').Router();

// middleware function

var middleOne = function(req, res, next){

    const data = {

        firstname : req.body.first,
        middlename : req.body.second,
        sirname : req.body.third,
        age : req.body.age,
        email : req.body.email,
        password : req.body.password,
        confirm_password : req.body.cpassword,

    }

    const joiObject = joi.object({
        
        firstname : joi.string().required(),
        middlename : joi.string().required(),
        sirname : joi.string().required(),
        age : joi.number().integer().required(),
        email : joi.string().email({minDomainSegments: 2, tlds: { allow: ['com', 'net'] }}),
        password : joi.string().required(),
        confirm_password : joi.ref('password')
        
    })

    const {error, value } = joiObject.validate(data)

    if(error){
        res.render('home', {
            error_message: error 
        })

        console.log(error)
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

// welcome route
route.get('/welcome', function(req, res){
    res.render('welcome', { })
})

// form data
route.post('/push' , middleOne, function(req, res, next){

    res.redirect('/welcome')
})


module.exports = route