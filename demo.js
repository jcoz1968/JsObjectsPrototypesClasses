"use strict";
(function () {
  
  let person = {
    firstName: 'Jeffery',
    lastName: 'Cosby',
    age: 50
  };

  display(Object.getOwnPropertyDescriptor(person, 'firstName'));

})();
