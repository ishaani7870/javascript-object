// d1 = {'a': 100, 'b': 200, 'c':300}
// d2 = {'a': 300, 'b': 200, 'd':400}
// // {a:400,b:400,d:400,c:300}


// for(i in d1){
//     if(i in d2){
//         d2[i]=d2[i]+d1[i]
//     }
//     else{
//         d2[i]=d1[i]
//     }
// }console.log(d2);


// dic={'a':200,'b':300,'c':400}
// dic1={'a':400,'b':300,'c':400}
// for (i in dic){
//     if (i in dic1){
//         dic[i]=dic1[i]+dic[i]
//     }
//     else{
//         dic1[i]=dic[i]
//     }
// }console.log(dic,dic1);


// for (i=1; i<=100; i++) {

//     if (i%5==0 && i%3==0) {
//         console.log("kajal ishaani");
//     } else if(i%3==0) {
//         console.log("kajal");
//     } else if(i%5==0){
//         console.log("ishaani");
//     } else {
//         console.log(i);
//     }

//   }

//   for (i=1; i<=30;i++){
//     if (i%5==0 && i%3==0){
//         console.log("fizz buzz");
//     }else if (i%3==0){
//         console.log("fizz");
//     }else if (i%5==0){
//         console.log("bizz")
//     }else{
//         console.log(i);
//     }
//   }


// let age =15;
// let hasvoterCard='no';
// if  (age>14 && hasvoterCard =='yes'){

//     console.log("you can vote  !");
// }
// else if (age>=14 &&  hasvoterCard!='yes'){

//     console.log("get your voter id card !");
// }
// else{
//     console.log("you cannot vote !");
// }

let age =15;
let hasvoterCard='YES';

if  (age>14){

    if  (hasvoterCard =='yes'){

    console.log("you can vote  !");
    }
    else if (age>=14 &&  hasvoterCard!='yes'){

        console.log("get your voter id card !");
    }
else{
    console.log("you cannot vote !");
}
}


// let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let s = '';
// for (let i = 0, j = 1; i < board.length; i++, j++) {
//   s += board[i] + ' ';
//   if (j % 3 == 0) {
//     console.log(s);
//     s = '';
//   }
// }

