const joi = require('@hapi/joi')
const assert = require('chai').assert
const route = require('express').Router();

// customer module

const knex = require('../backend/db/knex');

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
            error_message: 'make sure you fill all the gap with corrent value'
        })
    }
    else{
        next()
    }
}

 /**    get method     */

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

// welcome route
route.get('/welcome', function(req, res){
    
    res.render('welcome')         
})


 /**    post method     */

// regitrations route
route.post('/register' , middleOne, function(req, res, next){

    // not recomended here ( del() ) but is for test
    knex('registrations').del().then(function(){

        knex('registrations').insert({

            username: req.body.username,
            email: req.body.email,
            password: req.body.password
    
        }).then(function(){
    
            res.redirect('/login')         
        })
    })
})

// 
route.post('/welcome', function(req, res){

    knex('registrations').select('*').then(r => {

        r.forEach(e => {

            if(req.body.username == e.username && req.body.password == e.password){

                res.redirect('/welcome')
            }

        })
    })
})


module.exports = route