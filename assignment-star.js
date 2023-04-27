const prompt = require('prompt-sync')({ sigint: true });

function print(output) {
    process.stdout.write(output)
}



// // Task-1==============================================
// const range = parseInt(prompt('Enter the range '));

// for (let i = 0; i < range; i++) {
//     for (let j = 0; j < i + 1; j++) {
//         print("*");
//     }
//     print("\n")
// }



// // Task-2==============================================
// const range = parseInt(prompt('Enter the range '));

// for (let i = 0; i < range; i++) {
//     for (let j = i; j < range; j++) {
//         print("*");
//     }
//     print("\n")
// }



// // Task-3==============================================
// const range = parseInt(prompt('Enter the range '));

// for (let i = 0; i < range; i++) {
//     for (let j = 0; j < i + 1; j++) {
//         print("*");
//     }
//     print("\n")
// }

// for (let i = 1; i < range; i++) {
//     for (let j = i; j < range; j++) {
//         print("*");
//     }
//     print("\n")
// }




// // Task-4==============================================
// const range = parseInt(prompt('Enter the range '));

// for (let i = 0; i < range; i++) {

//     for (let j = i + 1; j < range; j++) {
//         print(" ");
//     }

//     for (let j = 0; j < i + 1; j++) {
//         print("*");
//     }

//     print("\n")
// }




// // Task-5==============================================
// const range = parseInt(prompt('Enter the range '));

// for (let i = 0; i < range; i++) {

//     for (let j = 0; j < i; j++) {
//         print(" ");
//     }

//     for (let j = i; j < range; j++) {
//         print("*");
//     }


//     print("\n")
// }




// // Task-6==============================================
// const range = parseInt(prompt('Enter the range '));


// for (let i = 0; i < range; i++) {

//     for (let j = i; j < range; j++) {
//         print(" ");
//     }

//     for (let j = 0; j < i + 1; j++) {
//         print("*");
//     }

//     print("\n")
// }


// for (let i = 1; i < range; i++) {

//     for (let j = 0; j < i + 1; j++) {
//         print(" ");
//     }

//     for (let j = i; j < range; j++) {
//         print("*");
//     }


//     print("\n")
// }




// // Task-7==============================================
// const range = parseInt(prompt('Enter the range '));

// for (let i = 0; i < range; i++) {
//     for (let j = i; j < Math.floor(range / 2); j++) {
//         print(" ");
//     }
//     for (let j = 0; j < i + 1; j++) {
//         print("*");
//     }
//     print("\n")
// }




// // Task-8==============================================


// const range = parseInt(prompt('Enter the range '));


// for (let i = 1; i <= range; i++) {

//     for (let j = 1; j <= range - i; j++) {
//         print(" ");
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         print("*");
//     }
//     print("\n")
// }




// // Task-8==============================================

// const range = parseInt(prompt('Enter the range '));


// for (let i = 1; i <= range; i++) {

//     for (let j = 1; j <= range - i; j++) {
//         print(" ");
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         print("*");
//     }
//     print("\n")
// }




// // Task-9==============================================

// const range = parseInt(prompt('Enter the range '));


// for (let i = 1; i <= range; i++) {

//     for (let j = range - i; j <= range - 2; j++) {
//         print(" ");
//     }

//     for (let k = i; k <= 2 * range - i; k++) {
//         print("*");
//     }
//     print("\n")
// }





// // Task-10==============================================

// const range = parseInt(prompt('Enter the range '));



// for (let i = 1; i <= range; i++) {

//     for (let j = 1; j <= range - i; j++) {
//         print(" ");
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         print("*");
//     }
//     print("\n")
// }

// for (let i = 2; i <= range; i++) {

//     for (let j = range - i; j <= range - 2; j++) {
//         print(" ");
//     }

//     for (let k = i; k <= 2 * range - i; k++) {
//         print("*");
//     }
//     print("\n")
// }





// // Task-11==============================================

// const range = parseInt(prompt('Enter the range '));


// for (let i = 1; i <= range; i++) {
//     for (let j = 1; j <= range - i; j++) {
//         print(" ")
//     }
//     print("*")
//     for (let l = 3; l < i + 1; l++) {
//         if (i > 2 && i < range) {
//             print(" ")
//         }
//     }
//     if (i > 1 && i < range) {
//         print("*")
//     }
//     if (i === range) {
//         for (let n = 1; n < range; n++) {
//             print("*")
//         }
//     }
//     print("\n")
// }




// // Task-12==============================================

// const range = parseInt(prompt('Enter the range '));


// for (let i = 1; i <= range; i++) {
//     if (i === 1) {
//         for (let j = 1; j <= range; j++) {
//             print("*")
//         }
//     }
//     if (i > 1 && i <= range) {
//         for (let k = 1; k < i; k++) {
//             print(" ")
//         }
//         print("*")
//         for (let m = 1; m < range - i; m++) {
//             print(" ")
//         }
//         if (i > 1 && i < range) {
//             print("*")
//         }
//     }

//     print("\n")
// }



// // Task-13==============================================

// const range = parseInt(prompt('Enter the range '));


// for (let i = 1; i <= range; i++) {

//     for (let j = 1; j <= range - i; j++) {
//         print(" ");
//     }
//     if (i < range) {
//         print("*");
//     }
//     if (i > 1 && i < range) {
//         for (let l = 3; l <= 2 * i - 1; l++) {
//             print(" ");
//         }
//         print("*");
//     }
//     if (i === range) {
//         for (let k = 1; k <= 2 * i - 1; k++) {
//             print("*");
//         }
//     }
//     print("\n")
// }



// // Task - 14 ==============================================

// const range = parseInt(prompt('Enter the range '));


// for (let i = 1; i <= range; i++) {

//     for (let j = range - i; j <= range - 2; j++) {
//         print(" ");
//     }
//     print("*")
//     if (i === 1) {
//         for (let l = 1; l < range * 2 - 1; l++) {
//             print("*")
//         }
//     }
//     if (i > 1 && i < range) {
//         for (let m = i + 2; m <= 2 * range - i; m++) {
//             print(" ");
//         }
//         print("*")
//     }

//     print("\n")
// }







