
/*
我们会传递给你一个包含两个数字的数组。返回这两个数字和它们之间所有数字的和。
*/

/*function sumAll(arr) {
    var min = Math.min(arr[0],arr[1]);
    var max = Math.max(arr[0],arr[1]);
    var length = max - min + 1;
    var newArr = [];
    for(var i = min; i<= max; i++){
        newArr.push(i);
    }
    return newArr.reduce(function(acc,val){
        return acc + val;
    },0);
}

    sumAll([1, 4]);*/



/*
    比较两个数组，然后返回一个新数组，该数组的元素为两个
    给定数组中所有独有的数组元素。换言之，返回两个数组的差异。

*/



function diff(arr1, arr2) {
  var newArr = [];
  var newArr1 = arr1.filter(function(element){
    if(arr2.indexOf(element) != -1){
      return false;
    }
    else{
      return true;
    }
  });
  
  var newArr2 = arr2.filter(function(element){
    if(arr1.indexOf(element) != -1){
      return false;
    }
    else{
      return true;
    }
  });
   console.log(newArr1);
   console.log(newArr2);
   newArr = newArr1.concat(newArr2);
  // Same, same; but different.
  console.log(newArr);
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

