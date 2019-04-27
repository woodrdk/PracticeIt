// recursionMystery1

function mystery1(n) {
    if (n < 0) {
        return -mystery1(-n);
    } else if (n > 100) {
        return n;
    } else {
        return mystery1(n * 2);
    }
}


// mystery1(144);
// 144
// mystery1(90);
// 180
// mystery1(49);
// 196
// mystery1(40);
// 160
// mystery1(-10);
// -160

