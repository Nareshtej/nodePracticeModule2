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

  console.log('get all notes')  
};

var read = () => {
    console.log('reading all notes')
};

module.exports = {
  //addNote: addNote //first one is object attribute and second one is value
  
  addNote, //thi s is new feature in es6, This line avoids above line of code 
  getAll,
  read    //If you wont export then it will show TypeError in terminal
};