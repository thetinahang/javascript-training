// Big O Notation Lesson 1

items = ['tacos', 'burritos', 'salsa']

// O(1) time or "constant time" 
function printFirstItem(items) {
  console.log(items[0]);
}

// O(n) time or "linear time"
function printAllItems(items) {
  items.forEach(item => {
    console.log(item);
  });
}

// O(n^2) time or "quadratic time"
function printAllPossibleOrderedPairs(items) {
  items.forEach(firstItem => {
    items.forEach(secondItem => {
      console.log(firstItem, secondItem);
    });
  });
}

console.log(printFirstItem(items));
console.log(printAllItems(items));
console.log(printAllPossibleOrderedPairs(items));

// the n in O(n) can be the actual input or the size of the input
function sayHiNTimes(n) {
  for (let i = 0; i < n; i++) {
    console.log('hi');
  }
}

function printAllItems(items) {
  items.forEach(item => {
    console.log(item);
  });
}

console.log(sayHiNTimes(5));
console.log(printAllItems(items));

// drop the constants; this is O(2n) --> O(n) 
function printAllItemsTwice(items) {
  items.forEach(item => {
    console.log(item);
  });

  // Once more, with feeling
  items.forEach(item => {
    console.log(item);
  });
}

console.log(printAllItemsTwice(items));

// drop the constants; this is O(1 + n/2 +100) --> O(n)
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  const middleIndex = Math.floor(items.length / 2);
  let index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (let i = 0; i < 100; i++) {
    console.log('hi');
  }
}

console.log(printFirstItemThenFirstHalfThenSayHi100Times(items));

// drop the less significant terms; O(n + n^2) --> O(n^2)
function printAllNumbersThenAllPairSums(numbers) {

  console.log('these are the numbers:');
  numbers.forEach(number => {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(firstNumber => {
    numbers.forEach(secondNumber => {
      console.log(firstNumber + secondNumber);
    });
  });
}

// "worst case": O(n); "best case": O(1)
function contains(haystack, needle) {

  // Does the haystack contain the needle?
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return true;
    }
  }

  return false;
}

// space complexity 
// O(1) -- use a fixed number of variables
  function sayHiNTimes(n) {
  for (let i = 0; i < n; i++) {
    console.log('hi');
  }
}

// O(n) -- the size of the hiArray scales with the size of the input
function arrayOfHiNTimes(n) {
  const hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi';
  }
  return hiArray;
}

// usually when we talk about space complexity, we're talking about additional space
// this function takes constant space even though the input has n items
  function getLargestItem(items) {
  let largest = -Number.MAX_VALUE;
  items.forEach(item => {
    if (item > largest) {
      largest = item;
    }
  });
  return largest;
}

// you should develop the skill to see time and space optimizations, as well as the wisdom to judge if those optimizations are worthwhile
