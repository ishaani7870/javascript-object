

// var a = require("readline-sync");
// var user = a.questionInt("Enter any number")
// empaty={}
// for(i=1; i<=user; i++){
//     mul=i*i
//     empaty[i]=mul}
// console.log(empaty);

function add(x, y = 1, z = 2) {
    console.log( arguments.length );
    return x + y + z;
}

add(10); // 1
add(10, 20); // 2
add(10, 20, 30.88,55,66,45,66,35,45); // 3