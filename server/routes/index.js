const express = require('express');
const router = express.Router();
const Phone = require("../models/phones-model")
const fetch = require("node-fetch");
const Request = require("request")
const axios = require('axios');

global.Headers = fetch.Headers;
/* GET home page */

router.get('/:id', (req, res) => {
  const page = req.params.id
  let URL = `http://work.mediasmart.io/?page=${page}&page_size=10`
  let data = {
    'HTTP_CONTENT_LANGUAGE': "json"
  }

  let config = {
    headers: {
      "Content-Type": 'application/json',
      "Accept": "application/json",
      "Authorization": "mediasmart2019"
    }
  }

  axios.get(URL, config)
    .then(data => {
      let newJs = []

      data.data.forEach((el) => {
        if (isNaN(el.age)) {
          el.age = "???"
        }
        if (!isNaN(el.name)) {
          el.name = "The one who must not be named"
        }
        if (!isNaN(el.image)) {
          el.image = "https://images-na.ssl-images-amazon.com/images/I/71gRnoHe%2BTL._UY879_.jpg"
        }
        if (!isNaN(el.bio)) {
          el.bio = "I have no words to describe how cool Mediasmart is! "
        }
        newJs.push(el)
      })


      let profiles = newJs
      res.json(profiles)
    })
    .catch(err => console.log('Error:', err))
})


module.exports = router;
