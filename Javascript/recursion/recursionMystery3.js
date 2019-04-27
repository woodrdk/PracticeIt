// recursionMystery3

function mystery3(n) {
    if (n <= 1) {
        return "*";
    } else if (n == 2) {
        return mystery3(n - 1) + "*";
    } else {
        return "(" + mystery3(n - 2) + ")";
    }
}

//   mystery3(0);	
//   *
//   mystery2(2);	
//   **
//   mystery2(3);
//   (*)
//   mystery2(6);
//   ((**))
//   mystery2(9);
//   ((((*))))
