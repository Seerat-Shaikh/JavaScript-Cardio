// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

/*function reverseString(str) {
  const strArr = str.split(''); //split turns string into Array
  strArr.reverse();
  //console.log(strArr) //It will return in form of Array [ 'o', 'l', 'l', 'e', 'h' ]
  return strArr.join(''); //olleh
}*/

// Another Method
function reverseString(str) {
  //return str
  //.split('')
  //.reverse('')
  //.join('');

  //////// If don't use Reverse Method ///////

  //////// Decreasing Array ///////
  /*let revString = '';
  for(let i = str.length - 1; i >= 0; i--){ //we str.kength-1 bcz without it was returning 0-6 but we want 0-5 
    revString = revString + str[i];
  }
  return revString;*/

  //////// Increasing Array ///////
  /*let revString = '';
  for(let i = 0; i <= str.length - 1; i++){
    revString = str[i] + revString;
  }
  return revString;*/

  ////// Modern javascript //////
  /*let revString = '';
  for(let char of str){
    revString = char + revString;
  }
  return revString;*/

  ////// ForEach //////
  /*let revString = '';
  str.split('').forEach(function(char){
    revString = char + revString;
  });
  return revString;*/

  //// or using es6 ////

  /*let revString = '';
  str.split('').forEach(char => revString = char +
  revString);
  return revString;*/

  ///// Higher order method /////
  /*return str.split('').reduce(function(revString, char){
    return char + revString;
  }, '');*/

  ///// Or /////
  return str.split("").reduce((revString, char) => char + revString, "");
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  const revString = str.split("").reverse("").join("");
  return revString === str; //It will gives you true or false
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const revString = int.toString().split("").reverse().join(""); //Tostring to converting int to string
  return parseInt(revString) * Math.sign(int); //Math.sign for returning - sign too
  //ParseInt to return number if you will not use it will return string
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  /*const strArr = str.toLowerCase().split(' ');
  for(let i = 0; i < strArr.length; i++){
    strArr[i] = strArr[i].substring(0, 1).toUpperCase() +
    strArr[i].substring(1);
  }
  return strArr.join(' '); //For many words give space b/w commas
}*/

  /////////////////////////////////////
  /*return str
   .toLowerCase()
   .split(' ')
   /*.map(function(word) {
    return word[0].toUpperCase() + word.substr(1);
   })*
   .map(word => word[0].toUpperCase() + word.substr(1))
   .join(' ');*/

  ///////////// Regular Expressions ///////////////////////////
  return str.replace(/\b[a-z]/gi, function (char) {
    //put g to capitilize first letter of every word if u don't It will capitilize only I first word of sentence
    return char.toUpperCase();
  });
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = '';

  str.split("").forEach(function (char) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for(let char in charMap){
    //debugger;
    if(charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log('FizzBuzz');
    } else if(i % 3 === 0){
      console.log('Fizz');
    } else if(i % 5 === 0){
      console.log('Buzz');
    } else {
       console.log(i);
    }
  }
}

// Call Function
const output = fizzBuzz("javascript");

console.log(output);
