// loopMystery5


//What is the output of the following JavaScript code ?

for (var i = 0; i < 5; i++) {
    var mystery = "";
    for (var j = 1; j <= 10; j++) {
        mystery += ((i * j) + " ");
    }
    console.log(mystery);
}

// answer

// 0 0 0 0 0 0 0 0 0 0
// 1 2 3 4 5 6 7 8 9 10
// 2 4 6 8 10 12 14 16 18 20
// 3 6 9 12 15 18 21 24 27 30
// 4 8 12 16 20 24 28 32 36 40