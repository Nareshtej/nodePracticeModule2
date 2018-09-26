'use strict'

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');

const titleNote = {
   describe: 'Title of note',
   demand: true,
   alias: 't'
 }
const titleBody = {

  describe: 'body of note',
  demand: true,
  alias: 'b'

 }
const argv = yargs
  .command('add', 'Add a new note', {
     title: titleNote,
     body: titleBody
  })
  .command('list', 'List of all notes')
  .command('read', 'Read a note', {
    title: titleNote
  })
  .command('remove', 'Removing notes from the list', {
    title: titleNote
  })
  
  .help()
  .argv ;
console.log('argv data', argv);// Here it takes the add or remove what ever we pass
//var command = process.argv[2];
var command = argv._[0]; // It shows first element in array in yargs
console.log('command: ', command);
//console.log(process.argv); //first check the processes running then fetch data from array list
console.log('Yargs', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body); // Here we are importing notes.js and addNote is one of the function in it AND we are using app.js argv properties for addNote() function
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');

  }
 
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  // allNotes.forEach((note) => {

  //   notes.logNote(note);
  // }); This is equal to below one line code
  allNotes.forEach((note) => notes.logNote(note));
  
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if(note){
    console.log('Note found');
    notes.logNote(note)
    
  } else {
    console.log('Note not found');
  }
  
} else if (command === 'remove') {
  var noteremoved = notes.removeNote(argv.title);
  console.log('this is the remove command', noteremoved)
  var message = noteremoved ? 'Note was removed' : 'Note not found'; // This is the ternary operator ( condition(true or false) ? true statement : false statement  
  console.log(message);
  
} else {
    console.log('no command found')
}