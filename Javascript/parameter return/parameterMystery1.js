// parameterMystery1


//Assume the following functions are defined:

function main() {
    var a = 1;
    var b = 2;
    var c = -3;
    mystery(a, b, c);
    mystery(c, 4, a);
    mystery(a + b, b + c, c + a);
}
​
function mystery(c, a, b) {
    console.log(b + " + " + c + " = " + a);
}

//What console output would result from calling main?
 
// answers
//mystery(a, b, c);	
//-3 + 1 = 2
// mystery(c, 4, a);	
//1 + -3 = 4
// mystery(a + b, b + c, c + a);	
//-2 + 3 = -1
