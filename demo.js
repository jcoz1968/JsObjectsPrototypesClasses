"use strict";
(function() {
  let person = {
    name: {
      firstName: "Jeffery",
      lastName: "Cosby"
    },
    age: 50
  };


  Object.defineProperty(person, 'fullName', {
    get: function () {
      return this.name.firstName + ' ' + this.name.lastName;
    },
    set: function (value) { 
      var nameParts = value.split(' ');
      this.name.firstName = nameParts[0];
      this.name.lastName = nameParts[1];
    }
  });

  person.fullName = 'Brenna Cosby'

  display(person.fullName);
  display(person.name.lastName);
  display(person.name.firstName);


  // Object.defineProperty(person, "firstName", { configurable: false });
  // Object.defineProperty(person, "firstName", { configurable: true });

  // delete person.firstName;
  // display(person);


  // Object.defineProperty(person, "firstName", { enumerable: false });
  // for (let propertyName in person) {
  //   display(propertyName + ": " + person[propertyName]);
  // }
  // display(Object.keys(person));
  // display(JSON.stringify(person));
  // display(person.firstName);

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
