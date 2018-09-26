// var sqare = (x) => {
//     var result = x * x;
//     return result;
// };
// console.log(sqare(9));

var sqare = x => x * x; //even you can remove parantasis for single argument
console.log(sqare(9));

var user = {
  name: 'naresh',
  sayHi: () => {
      console.log(`Hi . I am ${this.name}`)
  },
  sayHiAlt () {
      console.log(`Hi , I am ${this.name}`)
  }
};
user.sayHiAlt();