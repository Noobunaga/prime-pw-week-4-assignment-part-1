console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

function returner(){
  console.log('"Hello World!"',hello());
  return true;

}

returner();

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Byrce';
}



// Remember to call the function to test(){
helloName( );
console.log('Hello', helloName(name),'!');



// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber ) {
  // return firstNumber + secondNumber;
  console.log( 'in firstNumber' );
  let answer = 4 + 8;
  return answer;
}

console.log( '4 + 8 =', addNumbers());

// 4. Function to multiply three numbers & return the result
function multiplyThree( num0, num1, num2 ){
  console.log( 'in multiplyThree', num0, num1, num2 );
  let answer = num0 * num1 * num2;
  return answer;

}
console.log( '6 * 7 * 8 =', multiplyThree(6, 7, 8) );

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else{
    return false;
  }
}

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( '3 is greater than 0 so its', isPositive(3));
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'o is not greater than 0 so its', isPositive(0));
console.log( 'isPositive - should say false', isPositive(-3) );
console.log( '3 is not greater than 0 so its', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {

}

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){

}

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
