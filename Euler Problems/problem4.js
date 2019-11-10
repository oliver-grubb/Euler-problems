var largest = 0;

function isPalindrome(input) {
	var reverse = input.toString().split("").reverse().join("");
	if (input == reverse) {
		return true;
	}
	else return false;
}

for (var i = 100; i<1000; i++) {
	for (var j = 100; j<1000; j++) {
		if (isPalindrome(i*j) && (i*j)>largest) {
			largest = i*j;
		}
	}
	
}

console.log(largest);