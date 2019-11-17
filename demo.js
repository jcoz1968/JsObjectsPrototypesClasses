"use strict";
(function () {
  
  let person = {
    firstName: 'Jeffery',
    lastName: 'Cosby',
    age: 50
  };

  for (let propertyName in person) {
    display(propertyName + ': ' + person[propertyName]);
  }

})();
