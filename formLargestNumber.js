// Form the Largest (7kyu): Codewars(TDD in Javascript) from Styled Javascript on youtube

// Only natural numbers can be passed to the function [0-9]

function maxNUmber(n) {
  const str = String(n);
  const arr = str.split('');
  arr.sort((a, b) => b - a);
  const res = arr.join('');
  return parseInt(res);
}

function maxNumber(n) {
  return parseInt(
    String(n)
      .split('')
      .sort((a, b) => b - a)
      .join('');
  );
}

const maxNumber = n =>
  parseInt(
  String(n)
    .split('')
    .sort((a, b) => b - a)
    .join('');
  );

// sort method naturally returns lowest to highest, so we can just sort it then reverse it
const maxNumber = n =>
  parseInt(
  String(n)
    .split('')
    .reverse()
    .join('');
  );

const maxNumber = n =>
  +String(n)
    .split('')
    .reverse()
    .join('');


SAmple Tests:

describe("Basic Tests",_=> {
  Test.assertEquals(maxNumber(213), 321);
  Test.assertEquals(maxNumber(7389), 9873);
  Test.assertEquals(maxNumber(63792), 97632);
  Test.assertEquals(maxNumber(566797), 977665);
  Test.assertEquals(maxNumber(1000000), 1000000);
})
