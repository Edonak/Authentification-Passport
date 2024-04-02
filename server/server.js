//npm modules
const express = require('express');
const uuid = require('uuid/v4')
const session = require('express-session')
// creatio du server
const app = express();

// Ajout et Configuration du middleware
app.use(session({
  genid: (req) => {
    console.log('Inside the session middleware')
    console.log(req.sessionID)
    return uuid() // use UUIDs for session IDs
  },
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

// Création de la route pour la page home
app.get('/', (req, res) => {
  console.log('Inside the homepage callback function')
  console.log(req.sessionID)
  res.send(`You hit home page!\n`)
})

app.listen(3000, () => {
  console.log('Listening on localhost:3000')
})