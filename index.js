'use strict';

exports.handler = (event, context, callback) => {
  const axios = require('axios');

  const url = event.url;

  axios.get(url)
    .then(response => {
      console.log('success');
      console.log(response.data);
    })
    .catch(error => {
      callback(error);
    })
}
