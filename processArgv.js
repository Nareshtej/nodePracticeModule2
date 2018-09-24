'use strict'
console.log('starting app.js');
const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');

//first check the processes running then fetch data from array list

var command = process.argv[2];
console.log('command: ', command);

if (command === 'add') {
  console.log('adding function executing');
} else if (command === 'list') {
    console.log('listing all notes');
} else if (command === 'remove') {
    console.log('listing all remove');
} else {
    console.log('no command found')
}
console.log(process.argv); 