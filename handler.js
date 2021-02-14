'use strict';

const serverless = require('serverless-http');
const express = require('express');
const request = require('request');

const app = express();

// helpers
const renombrarPersona = require('./helpers/persona');
const renombrarPelicula = require('./helpers/pelicula');

// API star wars
const URL_STAR_WARS_BASE_API = 'https://swapi.py4e.com/api/';

app.get('/personas', (req, res) => {

  request.get(URL_STAR_WARS_BASE_API+'people', {json: true}, (err, result) => {
    if(err){
      console.log(err);
    } else {
      let arr = result.body.results.map(
        obj => {
          return renombrarPersona(obj);
        }
      );
      res.send(arr);
    }
  });

});

app.get('/personas/:id', (req, res) => {
  
  const id = req.params.id;

  request.get(URL_STAR_WARS_BASE_API+'people/'+id, {json: true}, (err, result) => {
    if(err){
      console.log(err);
    } else {
      
      res.send(renombrarPersona(result.body));
    }
  });

});

app.get('/peliculas', (req, res) => {

  request.get(URL_STAR_WARS_BASE_API+'films', {json: true}, (err, result) => {
    if(err){
      console.log(err);
    } else {
      let arr = result.body.results.map(
        obj => {
          return renombrarPelicula(obj);
        }
      );
      res.send(arr);
    }
  });
  
});

app.get('/peliculas/:id', (req, res) => {

  const id = req.params.id;

  request.get(URL_STAR_WARS_BASE_API+'films/' + id, {json: true}, (err, result) => {
    if(err){
      console.log(err);
    } else {
      res.send(renombrarPelicula(result.body));
    }
  });
  
});

module.exports.starwars = serverless(app);