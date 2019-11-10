var found = false
var num = 1;
var counter = 0;

while(!found) {

for (var i = 1; i<=20; i++) {
	if (num%i == 0) {
		counter++;
	}
		
   }
   
   if (counter==20) {
	   console.log(num);
	   found = true;
   }
   else {
	   num++;
       counter = 0;
   }	   
}