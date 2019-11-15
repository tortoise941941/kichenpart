// package import
const body = require('body-parser')
const express = require('express')
const logger = require('morgan')
const path = require('path')
const ejs = require('ejs')

const knex = require('./backend/db/knex')
const route = require('./backend/routes')

// instance of app
const app = express()

// set
app.set('port', 3000)
app.set('views', path.join(__dirname, 'frontend/page'))
app.set('view engine', 'ejs')


// use 
app.use(express.static('./node_modules/bootstrap/dist'))
app.use(body.urlencoded({extended: true}))
app.use(body.json())
app.use(express.static('frontend'))
app.use(logger('tiny'))

app.use('/', route)

// server
const server = app.listen(app.get('port'), function(){
    
    const port = server.address().port
    console.log(`server start listen at port number: ${port}`)
})