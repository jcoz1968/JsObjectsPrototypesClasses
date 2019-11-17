"use strict";
(function() {
  let person = {
    firstName: "Jeffery",
    lastName: "Cosby",
    age: 50
  };

  Object.defineProperty(person, "firstName", { enumerable: false });

  for (let propertyName in person) {
    display(propertyName + ": " + person[propertyName]);
  }

  display(Object.keys(person));

  display(JSON.stringify(person));

  display(person.firstName);

  // let person = {
  //   name: {
  //     firstName: 'Jeffery',
  //     lastName: 'Cosby',
  //   },
  //   age: 50
  // };

  // Object.defineProperty(person, 'name', { writable: false });
  // Object.freeze(person.name);

  // // display(Object.getOwnPropertyDescriptor(person, 'firstName'));
  // // person.firstName = 'Brenna';
  // person.name.firstName = 'Brenna';
  // display(person.name);
})();
