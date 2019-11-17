"use strict";
(function () {
  
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  Person.prototype.age = 21;

  display(Person.prototype);

  let brenna = new Person('Brenna', 'Cosby');

  display(brenna.__proto__);

  display(Person.prototype === brenna.__proto__);

  // let myFunction = function () { };

  // display(myFunction.prototype);

  // let person = {
  //   name: {
  //     firstName: "Jeffery",
  //     lastName: "Cosby"
  //   },
  //   age: 50
  // };

  // display(person.prototype);
  // display(person.__proto__);


})();
