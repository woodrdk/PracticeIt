// parameterMystery2

// Assume the following functions are defined:

function main() {
    var x = 15;
    var y = 12;
    var z = -1;
    mystery(x, z, y);
    mystery(1, 20.5, x);
    mystery(z - x, z * y, x * (z + 1));
}

function mystery(z, y, x) {
    console.log(z + " - " + x + " = " + y);
}
// What console output would result from calling main ?

//answers
//mystery(x, z, y);
//15 - 12 = -1
//mystery(1, 20.5, x);
//1 - 15 = 20.5
//mystery(z - x, z * y, x * (z + 1));
//-16 - 0 = -12
