// data= [{'item': 'item1', 'amount': 400}, 
//         {'item': 'item2', 'amount': 300}, 
//         {'item': 'item1', 'amount': 750}]
// // Output: Counter({'item1': 1150, 'item2': 300})
// fill={};
// for(i of data){
//         if(i['item' in fill]){
//                 fill[i['item']]+=i['amount']
//         }
//         else{
//                 fill[i['item']]=i['amount']
//         }
// }console.log(fill);

var prompt = require('readline-sync');
var n = prompt.questionInt('How many more times? ');
d = {}
for (let i = 0; i <= n; i++) {
   d[i] = i ** 2
}
console.log(d);

// N = int(input())
// i=1
// while i/N:
//     if N/i==0:
//         print(i)
//     i=i+1