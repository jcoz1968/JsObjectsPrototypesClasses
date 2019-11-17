'use strict'; 
(function() {

  let person = {
    lastName: 'Cosby',
    firstName: 'Jeffery',
    age: 50,
    isAdult: function () { return person.age >= 18; }
  };

  display(person.isAdult().toString());

})();