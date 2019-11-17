"use strict";
(function () {
  
  function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    Object.defineProperty(this, "fullName", {
      get: function() {
        return this.firstName + " " + this.lastName;
      },
      enumerable: true
    });
  }

  function Student(firstName, lastName, age) {
    Person.call(this, firstName, lastName, age);
    this._enrolledCourses = [];
    this.enroll = function(courseId) {
      this._enrolledCourses.push(courseId);
    };
    this.getCourses = function () {
      return this.fullName + "'s enrolled courses are: " + this._enrolledCourses.join(', ');
    };
  }
  display(Student.prototype.constructor);
  Student.prototype = Object.create(Person.prototype);
  display(Student.prototype.constructor);
  Student.prototype.constructor = Student;
  display(Student.prototype.constructor);

  // let brenna = new Student('Brenna', 'Cosby', 21);

  // // display(brenna);
  // // display(brenna.__proto__);
  // // display(brenna.__proto__.__proto__);
  // brenna.enroll('History');
  // brenna.enroll('Government');
  // brenna.enroll('Algebra');

  // display(brenna.getCourses());

  // Person.prototype.age = 21;

  // display(Person.prototype);

  // let brenna = new Person('Brenna', 'Cosby');
  // display(brenna.__proto__);
  // display(brenna.__proto__.__proto__);

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
