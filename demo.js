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

  class Student extends Person {
    constructor(firstName, lastName, age) {
      super(firstName, lastName, age);
      this._enrolledCourses = [];
    }

    static fromPerson(person) {
      return new Student(person.firstName, person.lastName, person.age);
    }

    enroll(courseId) {
      this._enrolledCourses.push(courseId);
    }

    getCourses() {
      return this.fullName + "'s enrolled courses are: " +
        this._enrolledCourses.join(', ');
    }
  }

  Object.defineProperty(Person.prototype, 'fullName', { enumerable: true });

  let brenna = new Person('Brenna', 'Cosby', 21);
  let marcus = new Student('Marcus', 'Stanfill', 48);
  display(brenna);

  marcus.enroll('History');
  marcus.enroll('Government');
  marcus.enroll('Algebra');

  display(marcus.getCourses());

  let jeffStudent = Student.fromPerson(brenna);
  display(jeffStudent);

  // brenna.fullName = 'Marcus Stanfill'

  // display(brenna.fullName);
  // display(brenna.isAdult());
  
})();
