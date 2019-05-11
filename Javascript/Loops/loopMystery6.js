// loopMystery6

//What is the output of the following JavaScript code ?

for (var i = 1; i <= 10; i++) {
    var mystery = "";
    for (var j = 1; j <= 10 - i; j++) {
        mystery += " ";
    }
    for (var j = 1; j <= 2 * i - 1; j++) {
        mystery += "*";
    }
    console.log(mystery);
}

// awnser
//         *         
//        ***       
//       *****     
//      *******   
//     ********* 
//    ***********
//   *************
//  ***************
// *****************
//*******************