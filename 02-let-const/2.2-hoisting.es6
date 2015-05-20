var ingredients;








// es5

// ingredients = ['rum', 'banana', 'nutella'];

// for (var i = 0; i < ingredients.length; i++) {

//   var ingredient = ingredients[i];

//   setTimeout(function() {

//     console.log('Time to add the ' + ingredient);

//   }, 500 * (i + 1));

// }














// es6

ingredients = ['rum', 'banana', 'nutella'];

for (var i = 0; i < ingredients.length; i++) {

  let ingredient = ingredients[i];

  setTimeout(function() {

    console.log('Time to add the ' + ingredient);

  }, 500 * (i + 1));

}