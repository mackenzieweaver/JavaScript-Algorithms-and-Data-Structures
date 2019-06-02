// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person/
var Person = function(firstAndLast) {
  this.names = {
    'first': firstAndLast.split(' ')[0],
    'last': firstAndLast.split(' ')[1],
  }
  this.getFullName = function(){ 
    return this.names.first + ' ' + this.names.last;
  };
  this.getFirstName = function(){
    return this.names.first;
  };
  this.getLastName = function() {
    return this.names.last;
  };
  this.setFullName = function(input) {
    this.names.first = input.split(' ')[0];
    this.names.last = input.split(' ')[1];
  }
  this.setFirstName = function(input) {
    this.names.first = input;
  }
  this.setLastName = function(input) {
    this.names.last = input;
  }
};
var bob = new Person('Bob Ross');
