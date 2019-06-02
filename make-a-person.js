// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person/
var Person = function(firstAndLast) { // class definition
  let names = { // names object to store first and last
    'first': firstAndLast.split(' ')[0], // initially the first name depends on the input when the object is created
    'last': firstAndLast.split(' ')[1], // initially the last name depends on the input when the object is created
  }
  this.getFullName = function(){ // check names object and concatenate first and last
    return names.first + ' ' + names.last;
  };
  this.getFirstName = function(){ // fetch first from names object
    return names.first;
  };
  this.getLastName = function() { // fetch last from names object
    return names.last;
  };
  this.setFullName = function(input) { // split the input into first and last
    names.first = input.split(' ')[0]; // set the names object first property
    names.last = input.split(' ')[1]; // set the names object last property
  }
  this.setFirstName = function(input) { // set names object first property to the input
    names.first = input;
  }
  this.setLastName = function(input) { // set names object last property to the input
    names.last = input;
  }
};
var bob = new Person('Bob Ross'); // create an instance of the Person class
