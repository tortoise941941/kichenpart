const $ = require('jquery')
const axios = require('axios')
const joi = require('@hapi/joi')
const info = require('sweetalert')

$(document).ready(function(){

     $('form').bind('submit', function(e){
       
        const formOne = {

            username: document.forms['formOne']['username'].value,
            email: document.forms['formOne']['email'].value,
            password: document.forms['formOne']['password'].value,
            co_password: document.forms['formOne']['cpassword'].value
        }

        const joiObject = joi.object({

            username: joi.string().required(),
            email: joi.string().required(),
            password: joi.string().required(),
            co_password: joi.ref('password')
        })

        var {error, value} = joiObject.validate(formOne)

        if(error){

            info('error', `make sure you fill all the gap`, 'error' )
            e.preventDefault()
        }
        else{  }
     })
    
})