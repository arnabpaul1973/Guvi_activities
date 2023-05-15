//Program 1
const numbers = [8, 19, 5, 6, 14, 9, 13];
var greet = function () {
  var odds = numbers.filter((num) => num % 2 === 1);
  console.log(odds);
};
greet();

//Program 2
var str = "converting string to titlecase";
var greet2 = function (str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};
console.log(greet2(str));

//Program 3
var sum = 0;
(function () {
  var arr = [18, 20, 32, 10];
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
})();

//Program 4
const newArray = [1, 3, 2, 5, 10];
var greet3 = function (newArray) {
  const myPrimeArray = newArray.filter((num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  });
  console.log(myPrimeArray);
};
greet3(newArray);

//Program 5
const wordsArr = ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'];
function isPalindrome(word) {
  const firstHalf = word.slice(0, Math.ceil(word.length/2));
  const secondHalfReversed = word.slice(Math.floor(word.length/2)).split('').reverse().join('');
  return firstHalf === secondHalfReversed;
}
function getPalindromesFromArray(arr) {
  return arr.filter(isPalindrome);
}
console.log(getPalindromesFromArray(wordsArr));

//Program 6
function getMedian(ar1, ar2, n)
{
	var i = 0; 
	var j = 0; 
	var count;
	var m1 = -1, m2 = -1;
	for (count = 0; count <= n; count++)
	{
		if (i == n)
		{
			m1 = m2;
			m2 = ar2[0];
			break;
		}
    else if (j == n)
		{
			m1 = m2;
			m2 = ar1[0];
			break;
		}
		if (ar1[i] <= ar2[j])
		{
			m1 = m2;
			m2 = ar1[i];
			i++;
		}
		else
		{
			m1 = m2;
			m2 = ar2[j];
			j++;
		}
	}

	return (m1 + m2)/2;
}
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
	console.log("Median is "+ getMedian(ar1, ar2, n1));

//Program 7
let arr = ["apple", "mango", "apple",
		"orange", "mango", "mango"];
var greet4 = function (arr) {
	return [...new Set(arr)];
}
console.log(greet4(arr))

//Program 8
var rotate = function (arr, numberOfShifts) {
  let tmp = 0;
  const leng = arr.length;
  numberOfShifts = numberOfShifts % leng;
  for (let i = 0; i < numberOfShifts; i++) {
     tmp = arr.pop();
     arr.unshift(tmp);
  }
 return arr;
};
console.log(rotate([1,2,3,4,5] , 2))


