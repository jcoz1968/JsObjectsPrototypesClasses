"use strict";
(function () {

  class Person {
    
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }

  }

  let brenna = new Person('Brenna', 'Cosby', 21);

  display(brenna);
  
})();
