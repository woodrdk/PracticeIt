// parameterMystery4

//Assume the following functions are defined:

function main() {
    var bit = "byte";
    var byte = bit;
    var nibble = "bit";
    mystery(bit, nibble, "nibble");
    mystery("byte " + bit, byte + " bit", "nibble nibble");
    mystery(bit, bit, nibble + " " + bit);
}

function mystery(nibble, bit, byte) {
    byte = "nibble";
    console.log("How many " + bit + "s in a " + byte + " of " + nibble + "s?");
}
//What console output would result from calling main ?

//answers
//mystery(bit, nibble, "nibble");
//    How many bits in a nibble of bytes ?

//    mystery("byte " + bit, byte + " bit", "nibble nibble");
//How many byte bits in a nibble of byte bytes ?
//    mystery(bit, bit, nibble + " " + bit);
//How many bytes in a nibble of bytes ?
