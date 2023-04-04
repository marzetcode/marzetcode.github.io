/////////////////////////////////////////////////////////////////////////////////////////////

/*
Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/
function sumAll(arr) {
	let sum = 0;
	for (let i = Math.min(arr[0], arr[1]); i <= Math.max(arr[0], arr[1]); i++) {
		sum += i;
	}
	return sum;
};
// console.log(sumAll([1, 4]));

/////////////////////////////////////////////////////////////////////////////////////////////

/*
Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
Note: You can return the array with its elements in any order.
*/
function diffArray(arr1, arr2) {
	const newArr = [];
	arr1.concat(arr2).forEach(item => {
		if ((arr1.includes(item) && !arr2.includes(item)) || (!arr1.includes(item) && arr2.includes(item))) {
			newArr.push(item)
		}
	})
	return newArr;
};
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

/////////////////////////////////////////////////////////////////////////////////////////////

/*
Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
Note: You have to use the arguments object.
*/
function destroyer(arr, ...vals) {
	return arr.filter(item => !vals.includes(item));
};
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

/////////////////////////////////////////////////////////////////////////////////////////////

/*
Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
*/
function whatIsInAName(collection, source) {
	let sourceKeys = Object.keys(source);

	return collection.filter(item =>
		sourceKeys.every(key => item.hasOwnProperty(key) && item[key] === source[key])
	)
};
// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

/////////////////////////////////////////////////////////////////////////////////////////////

/*
Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/
function spinalCase(str) {
	return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
};
// console.log(spinalCase('This_Is Spinal Tap'));

/////////////////////////////////////////////////////////////////////////////////////////////

/*
Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.
Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/
function translatePigLatin(str) {
	let vowels = ['a', 'e', 'i', 'o', 'u'];
	let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
	return str;
}

translatePigLatin("consonant");

/////////////////////////////////////////////////////////////////////////////////////////////
