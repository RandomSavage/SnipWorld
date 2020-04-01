//javascript arrays
// Array Methods

const arr = [1, 2, 3, 4, 5, 6]

arr.indexOf(4);
// find the index of the first instance of 4 (which is 3)

arr.find(item => item > 2);
//find the first value that is greater than 2 (which is 3)

arr.findIndex(item => item > 2);
// find the index of the first item with a value greater than 2 (which is index 2)

arr.filter(item => item > 4);
// return a new array with only the items greater than 4

arr.map(item => item + 1);
// return a new array where each original item in the array has 1 added to it

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
you are using this to get your id

//react form auth
export default function validateAuth(values) {
    let errors = {};
    // Full Name Errors
    if (!values.name) {
        errors.name = 'Required Name';
    }
    // User Name
    if(!values.username) {
        errors.username = "Required Username"
    }
    // Email Errors
    if (!values.email) {
        errors.email = 'Required Email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    // Password Errors
    if (!values.password) {
        errors.password = 'Required Password';
    } else if (values.password.length < 0) {
        errors.password = 'Password must be at least 6 characters';
    }
    return errors;
}

//?
function randomDevPost() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  let randomNumber = getRandomInt(0, 30);
  let url = "https://dev.to/api/articles/";
  fetch(url)
    .then(res => {
      // Response is an Array
      return res.json();
    })
    .then(jsonArr => {
      console.log(jsonArr[randomNumber].id);
      sessionStorage.setItem("id", jsonArr[randomNumber].id);
    });
  let id = sessionStorage.getItem("id");
  return url + id;
}

//?
just include it directly in your latest fetch
fetch(`yourUrl/${makeYourOwnId}`).then(blabla..)
