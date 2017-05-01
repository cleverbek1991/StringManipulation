var input = document.querySelector('#input');
var output = document.querySelector('#output');
var testString = "";

var enter = document.querySelector('#enter')
.addEventListener('click', (e) => {
	testString = input.value;
	alphabits(testString);
	reversal(testString);
	palindrome(testString);
	input.value = '';
});

input.addEventListener('keyup', (e) => {
	if (e.keyCode == 13) {
		testString = input.value;
		alphabits(testString);
		reversal(testString);
		palindrome(testString);
		input.value = '';
	} else {
		output.innerHTML = e.target.value;
	}
});

const reversal = (e) => {
	let reversed = e.split('').reverse().join('').toLowerCase();
	output.innerHTML += `<br>Reversed: ${reversed}`;
};

const alphabits = (e) => {
	let order = e.split('').sort().join('').toLowerCase();
	output.innerHTML += `<br>Alphabetized: ${order}`;
};

const palindrome = (e) => {
	if (e.toUpperCase() == e.split('').reverse().join('').toUpperCase()) {
		output.innerHTML += `<br>${e.toLowerCase()} is a Palindrome`
	} else {
		output.innerHTML += `<br>${e.toLowerCase()} is not a Palindrome`
	}
};