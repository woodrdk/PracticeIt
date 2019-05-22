// parameterMystery6

function main() {
    var zero = "three";
    var one = "two"
    var two = zero;
    var three = two;

    mystery(zero, one, "0");
    mystery(zero, zero, "seven");
    mystery(one, two, three);
    mystery(one, zero, "some" + one);
}

function mystery(nil, none, zilch) {
    var zero = nil;
    console.log(nil + " + " + none + " = " + zero + " + " + zilch + ".");
}

//answers
//mystery(zero, one, "0");
//three + two = three + 0.
//mystery(zero, zero, "seven");
//three + three = three + seven.
//    mystery(one, two, three);
//two + three = two + three.
//    mystery(one, zero, "some" + one);
//two + three = two + sometwo.
