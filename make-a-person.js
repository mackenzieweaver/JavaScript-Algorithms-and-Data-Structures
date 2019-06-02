// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person/
var Person = function(firstAndLast) {
  let names = {
    'first': firstAndLast.split(' ')[0],
    'last': firstAndLast.split(' ')[1],
  }
  this.getFullName = function(){ 
    return names.first + ' ' + names.last;
  };
  this.getFirstName = function(){
    return names.first;
  };
  this.getLastName = function() {
    return names.last;
  };
  this.setFullName = function(input) {
    names.first = input.split(' ')[0];
    names.last = input.split(' ')[1];
  }
  this.setFirstName = function(input) {
    names.first = input;
  }
  this.setLastName = function(input) {
    names.last = input;
  }
};
var bob = new Person('Bob Ross');
