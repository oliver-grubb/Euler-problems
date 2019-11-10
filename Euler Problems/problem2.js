var first = 1;
var second = 2;
var next = 0;
var evensum = 2;

while (next<4000000) {
	next=first+second;
	if (next%2==0) {
		evensum+=next;
	}
	first=second;
	second=next;
}

console.log(evensum);