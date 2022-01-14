function isPalindrome(word) {

  // const lcWord = word.toLowerCase();
  // const lcWordArr = [...lcWord];
  // const lcWordArrRev = lcWordArr.reverse();
  // const lcWordRev = lcWordArrRev.join('');
  // if (lcWordRev === word) {
  //   return true;
  // } else {
  //   return false;
  // }

  const revWord = word.toLowerCase().split('').reverse().join('')
  return revWord === word
}

/* 
  Add your pseudocode here
*/

/*
  First, I wanted to make sure the word was all lowercase so that character comparison wouldn't be affected by case. Next, I looked for a way to reverse the string. The method I chose was to create an array from the word and use the .reverse() method. Then I used the .join() method to contatenate the characters back together into a string. Last, I wrote a test to give a truthy or falsey answer based on the comparison of the lowercase word vs the newly rewritten reversed word.

  In optimization, I then combined the functions I used together and shortened my test to a single line.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
