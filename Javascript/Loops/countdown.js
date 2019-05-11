// countdown


//Use for loops to produce the following console output:

//10,
//    9,
//    8,
//    7,
//    6,
//    5,
//    4,
//    3,
//    2,
//    1,
//    Blast off!

// Type your solution here:
for (var i = 10; i >= 0; --i) {
    if (i == 0) {
        console.log("Blast off!");
    }
    else {
        console.log(i + ",");
    }
}
