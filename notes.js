console.log('starting notes.js');

//console.log(module)
//module.exports.age = 25;


// we used arrow function . If you get unonymous error that is because of arrow funciton
// module.exports.addNote = () => {
//     console.log('addNote');
//     return 'New Note';
// };
/*
module.exports.add = (a, b) => { //we always write logic in function
    return a + b;
};
*/
// console.log(module);// 2 add , addNote



const fs = require('fs')//This is core node module no need to install 
var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);

  } catch (e) {
    return [];
  }
  
};

var saveNotes = (notes) => {
  var test = fs.writeFileSync('notes-data.json', JSON.stringify(notes));  
  console.log(test)
};

var addNote = (title, body) => { //this is anonymous error function // we took 2 arguments in it
  //console.log('Adding Notes', title, body);
  var notes = fetchNotes();
  var note = {
    title,
    body  
  };



  //   return note.title === title;
  // var duplicateNotes = notes.filter((note) => {
  // });


  var duplicateNotes = notes.filter((note) => note.title === title);// This code is valid in es6 and this is same as above few line of code
 
  if(duplicateNotes.length === 0) { // I forgot .length , this error took 2 hours to resolve, Be patiance in analysing the code
    notes.push(note);
    saveNotes(notes);
    return note;
  } else {
    console.log('No data to push')
  }
  
};

var getAll = () => {

  console.log('get all notes');
  return fetchNotes();  
};

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) =>{
      return note.title === title; //equivalent 1 line code filter((note) => note.title ===title)
  });

  return filteredNotes[0];
   
    console.log('reading all notes')
};

var removeNote = (title) => {
  // fetch notes
  // filter notes, removing the one with title of argument
  // save new notes array
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  console.log('This is the filtered data', filteredNotes);
  saveNotes(filteredNotes); 

  return notes.length !== filteredNotes.length; // Here return is a boolean operator
};

var logNote = (note) => {  // Mistake:: Here you have to pass note object not title
  // Break on this line and use repl to output note
  // use read command with --title

  console.log('------')
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);  
}

module.exports = {
  // addNote: addNote //first one is object attribute and second one is value
  
  addNote, //thi s is new feature in es6, This line avoids above line of code 
  getAll,
  getNote,    //If you wont export then it will show TypeError in terminal
  removeNote,
  logNote
};