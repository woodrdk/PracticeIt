// loopMystery3

//What is the output of the following JavaScript code ?

var total = 24;
for (var number = 1; number <= (total - (total % 2) / 2); number++) {
    total = total - number;
    console.log(total + " " + number);
}

// answers

// 23 1
// 21 2
// 18 3
// 14 4
// 9 5
// 3 6
