"use strict";
(function () {

  let date = new Date(1000);
  let isoDate = new Date('2019-11-17T00:00:00Z');
  let bestDate = new Date(2017, 10, 17, 1, 30, 50);

  display(date.toString());
  display(isoDate.toString());
  display(bestDate.toString());

})();
