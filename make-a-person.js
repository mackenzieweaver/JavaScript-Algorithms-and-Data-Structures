// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person/
var Person = function(firstAndLast) {
  this.names = {
    'full': firstAndLast,
    'first': firstAndLast.split(' ')[0],
    'last': firstAndLast.split(' ')[1],
  }
  console.log(this.names.full);
  console.log(this.names.first);
  console.log(this.names.last);
  this.getFullName = function(){ 
    return this.names.full;
  };
  this.getFirstName = function(){
    return this.names.first;
  };
  this.getLastName = function() {
    return this.names.last;
  };
  this.setFirstName = (name) => 
};

var bob = new Person('Bob Ross');
