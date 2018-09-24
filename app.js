'use strict'
console.log('starting app.js');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./
notes');

const argv = yargs.argv;
//var command = process.argv[2];
var command = argv._[0]; // It shows first element in array in yargs
console.log('command: ', command);
//console.log(process.argv); //first check the processes running then fetch data from array list
console.log('Yargs', argv);

if (command === 'add') {
  notes.addNote(argv.title, argv.body); // Here we are importing notes.js function and addnote is one of the method in it AND we are using app.js argv properties for addNote() method

  
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'remove') {
    notes.read();
} else {
    console.log('no command found')
}