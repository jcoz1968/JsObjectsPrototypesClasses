"use strict";
(function () {
  
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  Person.prototype.age = 21;

  // display(Person.prototype);

  let brenna = new Person('Brenna', 'Cosby');
  display(brenna.__proto__);
  display(brenna.__proto__.__proto__);



  // let marcus = new Person('Marcus', 'Stanfill');

  // Person.prototype = { age: 26 };

  // let coz = new Person('Jeffery', 'Cosby');

  // display(Person.prototype);
  // display(brenna.age);
  // display(marcus.age);
  // display(coz.age);
  
  // marcus.age = 48;
  // display(brenna.age);
  // display(marcus.age);

  // display(brenna.hasOwnProperty('age'));
  // display(marcus.hasOwnProperty('age'));

  // display(brenna.__proto__);
  // display(Person.prototype === brenna.__proto__);

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
