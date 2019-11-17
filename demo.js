"use strict";
(function() {
  function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isAdult = function () { return this.age >= 18; }
  }

  let brenna = new Person('Brenna', 'Cosby', 21);
  let jeffery = new Person('Jeffery', 'Cosby', 50);

  display(brenna.isAdult());
  display(jeffery.isAdult());


  // let healthStats = {
  //   height: 68,
  //   weight: 150
  // };

  // function mergeHealthStats(person, healthStats) {
  //   return Object.assign({}, person1, healthStats);
  // }

  // let mergedPerson = mergeHealthStats(person1, healthStats);
  
  // display(mergedPerson);

  // display(person1);

  // let person2 = {};
  // Object.assign(person2, person1);
  // display(person2);
  // display(person1 === person2);
  // for (let propertyName in person) {
  //   display(propertyName);
  // }
  // for...in
  // display(Object.keys(person));
  // display(person.isAdult());
})();
