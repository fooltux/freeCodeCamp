function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  
 function notInArr1(element) {
  return arr1.indexOf(element) <0;
 }
 function notInArr2(element) {
  return arr2.indexOf(element) <0;
 }
  
  newArr=newArr.concat(arr1.filter(notInArr2));
  newArr=newArr.concat(arr2.filter(notInArr1));

  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

