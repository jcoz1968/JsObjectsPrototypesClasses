"use strict";
(function () {

  class Person {
    
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }

    get fullName() {
      return this.firstName + " " + this.lastName;
    }

    set fullName(fullName) {
      var nameParts = fullName.split(' ');
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];
    }

    isAdult() {
      return this.age >= 18;
    }
  }

  Object.defineProperty(Person.prototype, 'fullName', { enumerable: true });

  let brenna = new Person('Brenna', 'Cosby', 21);
  display(brenna);

  // brenna.fullName = 'Marcus Stanfill'

  // display(brenna.fullName);
  // display(brenna.isAdult());
  
})();
