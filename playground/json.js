//converting obj into String
/*
var obj = {

  name: 'Naresh'  
};

var stringObj = JSON.stringify(obj); //Here we are converting JSON object to STRING
console.log(typeof stringObj);
console.log(stringObj);

*/

//converting String into obj
/*
var personString = '{"name": "Naresh", "age": 23}'; // Here we are converting STRING to JSON object
var person = JSON.parse(personString);
console.log(typeof person);
console.log(personString);

*/
//example 1 stringify and parse
const fs = require('fs');

var originalNote = {
  title: 'professional',
  body: 'This book cover designed by professional designer'
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);  



