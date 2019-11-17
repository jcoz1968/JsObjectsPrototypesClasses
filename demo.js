'use strict'; 
(function() {

   let person = {
      firstName: 'Jeffery',
      lastName: 'Cosby', 
      age: 18,
      isAdult() { return this.aage >= 18; }
    };

  display(person.isAdult());

})();