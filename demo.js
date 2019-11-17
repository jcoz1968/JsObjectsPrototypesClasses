"use strict";
(function() {
  let person = {
    firstName: "Jeffery",
    lastName: "Cosby",
    age: 18,
    isAdult() {
      return this.aage >= 18;
    }
  };
  for (let propertyName in person) {
    display(propertyName);
  }
  // for...in
  // display(Object.keys(person));
  // display(person.isAdult());
})();
