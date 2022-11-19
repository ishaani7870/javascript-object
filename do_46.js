
// div =[{'x': 10, 'y': 20, 'z': 30}, {'p': 40, 'q': 50, 'r': 60}]
// a=parseInt(div)
// console.log(typeof(a));//NUMBER
// B=toString(div)
// console.log(typeof(B));
// c=parseFloat(div)
// console.log(typeof(c)

const promise = new Promise((resolve, reject) => {
    // contain an operation
    // ...
  
    // return the state
    if (success) {
      resolve(value);
    } else {
      reject(error);
    }
  });