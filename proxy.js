'use strict';

console.info('proxy');

const lambda = require('./')

let event = {
  'url': 'https://www.yahoo.co.jp/'
};

let context = null
let callback = (err) => {
    console.info(err)
}

// Call lambda entry point
lambda.handler(event, context, callback)
