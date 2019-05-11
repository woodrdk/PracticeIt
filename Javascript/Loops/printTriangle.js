// printTriangle

//Write a function named printTriangle that uses a for loop to produce the following console output:

//#
//##
//###
//####
//#####
//######
//Type your solution here:

function printTriangle() {
    for (var i = 0; i <= 6
        ; i++) {
        var mystery = "";
        for (var j = 1; j <= i; j++) {
            mystery += "#";
        }
        console.log(mystery);
    }
}