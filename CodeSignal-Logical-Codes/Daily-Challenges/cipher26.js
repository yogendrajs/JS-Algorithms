// For message = "taiaiaertkixquxjnfxxdh", the output should be
// cipher26(message) = "thisisencryptedmessage".


let alpha = 'abcdefghijklmnopqrstuvwxyz';

let input = 'thisisencryptedmessage';
let j = 0;
let newdata = '';

for (let i of input){
    let index = alpha.indexOf(i);
    // console.log(index);
    j+=index;
    newIndex = j%26
    newdata+=alpha[newIndex];
}
console.log(newdata);