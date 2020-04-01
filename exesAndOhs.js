// (7kyu): Codewars with Styled Javascript from youtube : https://www.youtube.com/watch?v=5j6y704Kucs

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive.
// The string can contain any char.

// first way
function XO(str) {
  let equal = 0;
  str.split('').forEach(c => {
    if('x' === c.toLowerCase()) {
      equal += 1;
    }
    if('o' === c.toLowerCase()) {
      equal -= 1;
    }
  });
  return equal === 0;
}

// second way
function XO(str) {
  let equal = 0;
  str.split``.forEach(c => {
    ('x' === c.toLowerCase()) && equal++;
    ('o' === c.toLowerCase()) && equal--;
  });
  return equal === 0;
}

// third way
const XO = str =>
  str.split.reduce((a, c) => {
    if('x' === c.toLowerCase()) {
      return a + 1;
    } else if ('o' === c.toLowerCase()) {
      return a - 1;
    } else return a;
  }, 0) === 0;

// fourth way
const XO = str =>
 str
  .toLowerCase()
  .split``
  .reduce((a,c) => ('x' === c ? ++a : 'o' === c ? --a : a), 0) === 0;

// fifth way
const XO = str => {
  const x = str.match(/x/gi);
  const o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
};

//tests
Test.assertEquals(XO('xo'), true);
Test.assertEquals(XO('xxOo'), true);
Test.assertEquals(XO('xxxm'), false);
Test.assertEquals(XO('Oo'), false);
Test.assertEquals(XO('ooom'), false);
