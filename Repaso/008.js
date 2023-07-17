var snack = 'Meow Mix';

function getFood(food) {
   if (food) {//false
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

console.log(getFood(false));//undefined