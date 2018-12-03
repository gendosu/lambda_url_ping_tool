'use strict';

exports.handler = (event, context, callback) => {
  var webclient = require("request");

  var url = event.url;

  webclient.get({
    url: url,
  }, function (error, response, body) {
    console.log(error);
    console.log(body);
  });
}
