const myFunction = require('./exercise.js');

const test = testCase => {
  if (testCase) {
    console.log('\x1b[32m', '    PASS', '\x1b[0m');
  } else {
    console.log('\x1b[31m', '    FAIL\n', '\x1b[0m');
    throw('');
  };
};

try {

  console.log('\x1b[0m', '--- HAPPY PATH TESTING ---');
  console.log('');;
  console.log('  Is a function:');

  test(typeof myFunction === 'function');

  console.log('  Returns an array:');

  test(Array.isArray(myFunction([])));
  test(Array.isArray(myFunction([1])));
  test(Array.isArray(myFunction([5, 7])));

  console.log('  Array is the same length as the input:');

  test(myFunction([]).length === 0);
  test(myFunction([1, 5]).length === 2);
  test(myFunction([7, 6, 1, 4, 9]).length === 5);

  console.log('  Integers are doubled:');

  test(myFunction([5])[0] === 10);
  test(myFunction([7, 9])[1] === 18);
  test(myFunction([4, 3, 4, 8, 4])[3] === 16);

  console.log('  Fractions are doubled:');

  test(myFunction([12.4, 8.41])[1] === 16.82);
  test(myFunction([7, 9])[1] === 18);
  test(myFunction([4, 3, 4, 8, 4])[3] === 16);

}
catch(err) {
  if (err !== '') {
    console.log('\x1b[33m', '\nWhoops! Looks like there was an error in your code. Read the error message below to find where the error occurred.\n', '\x1b[0m');
    console.log(err);
  }
};