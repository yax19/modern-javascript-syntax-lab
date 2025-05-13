const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Use the `map()` method to create a new array where each value is multiplied by 2
const numsTimesTwo = nums.map((num) => num * 2);

// Console log the new array
console.log(numsTimesTwo);

// exe2 

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Use destructuring to extract the first and second values
const [firstIngredient, secondIngredient] = pizzaToppings;

// Console log the variables
console.log(firstIngredient);
console.log(secondIngredient);

//exe 3
const car = {
  make: 'Audi',
  model: 'Q5',
};

// Use destructuring to create variables `make` and `model`
const { make, model } = car;

// Console log the variables
console.log(make);
console.log(model);

//exe 4
const morePizzaToppings = ['Cheese', 'Sauce'];

// Duplicate the array using the spread operator
const uncontroversialPizzaToppings = [...morePizzaToppings];

// Console log the new array
console.log(uncontroversialPizzaToppings);

//exe 5

const anotherCar = {
  make: 'Toyota',
  model: 'RAV4',
};

// Duplicate the object using the spread operator
const myCar = { ...anotherCar };

// Change the `make` and `model` properties
myCar.make = 'Honda';
myCar.model = 'Civic';

// Console log both objects
console.log(anotherCar);
console.log(myCar);

//exe6

// Define a variable named `propertyName`
const propertyName = 'username';

// Create an object named `userProfile`
const userProfile = {
  // Use `propertyName` as a dynamic key
  [propertyName]: 'johndoe',
};

// Console log the `userProfile` object
console.log(userProfile);

//exe7

