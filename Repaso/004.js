var instructor = 'Tony';
console.log(instructor);//Tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);
   }
})();
console.log(instructor);
//Tony
//Franco
//Tony