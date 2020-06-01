// localStorage print out everything in there

local = localStorage;
for(var key in local) {
  console.log(key);
}

//outputs on a fresh localStorage
_pubCommonId_exp
VM1190:2 _pubCommonId_last
VM1190:2 prebid.cookieTest
VM1190:2 _pubCommonId
VM1190:2 length
VM1190:2 key
VM1190:2 getItem
VM1190:2 setItem
VM1190:2 removeItem
VM1190:2 clear

// set something into localStorage
localStorage.setItem('myDrink', 'Spider');

//set up a variable to retrieve that data from the local localStorage
var myDrink = localStorage.getItem('myDrink');

console.log(myDrink);
