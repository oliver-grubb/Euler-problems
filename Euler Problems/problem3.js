var num = 600851475143 ;
var primes = [];
var largest = 0;

	if (num%2==0) {
	primes.push(2);
	num = num/2;
	   if (2>largest) {
		   largest=2;
	   }
	}
	
	else {
		 for (var i = 3; i <= Math.sqrt(num); i += 2) { 
            while (num % i == 0) { 
			   primes.push(i);
               num = num/i; 
			   if (i>largest){
				   largest=i;
			   }
            } 
        } 
	}
	
	if (num > 2) {
		primes.push(num);
		if (num>largest){
				   largest=num;
			   }
	}


for (var j = 0; j<primes.length; j++) {
	console.log(primes[j]);
}

console.log('Largest: ' + largest);



