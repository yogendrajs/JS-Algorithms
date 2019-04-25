//======================================
// [1, 2, 3, 4]
// [1, 3, 4, 2]

// [1, 2, 3, 4]
// [1, 4, 2, 3]

// [1, 2, 3, 4, 5]
// [2, 3, 4, 5, 1]
function inversePermutation(permutation){
  console.log('original array:', permutation);
  //to copy the array as a different object and then sort it:
  original = [...permutation].sort();
  numDic = {}
  for (var i = 0; i < original.length; i++){
    numDic[permutation[i]] = original[i];
  } // return numDic;
  mainlisted = [];
  for (var i = 0; i < original.length; i++){
    data = original[i];
    mainlisted.push(numDic[data]);
  }return mainlisted;
}
console.log('inversed array:', inversePermutation([2, 3, 4, 5, 1]));
console.log('inversed array:', inversePermutation([1, 3, 4, 2]));
