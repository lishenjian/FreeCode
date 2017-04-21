
function findLongestWord(str) {
  var newArray = str.split(' ');
  var Max = newArray[0].length;
  console.log(newArray.length);
  console.log("alphabet"[0].toUpperCase());
  for(var i = 1; i < newArray.length; i++){
        //console.log(newArray[i].length);
      if(newArray[i].length > Max){
        Max = newArray[i].length;
      }
  }
  return Max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


//Title Case a Sentence  首字母大写，其余小些

function titleCase(str) {
  var  newArray = str.toLocaleLowerCase().split(' ');
  var Array = [];
  for(var i = 0; i < newArray.length; i++){
    newArray[i] = newArray[i].replace(newArray[i][0],newArray[i][0].toUpperCase()) ;
    Array.push(newArray[i]);
  }
    return Array.join(' ');
 
}

titleCase("I'm a little tea pot");



//分别找到每个小数组中的最大值，然后把它们串联起来，形成一个新数组。

function largestOfFour(arr) {
  // You can do this!
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    var Max = 0;
    for(var j = 0; j < arr[i].length; j++){
      if(arr[i][j] > Max){
        Max = arr[i][j];
      }
    }

    //这里不能 newArr = newArr.push(Max)   push 返回新数组的长度； （更改原有数组）
    newArr.push(Max);
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//检查一个字符串(str)是否以指定的字符串(target)结尾

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if(str.substr(-target.length,target.length) === target){
    return true;
  }
  return false;
}

confirmEnding("Bastian", "n");

//重复一个指定的字符串 num次，如果num是一个负数则返回一个空字符串。

function repeat(str, num) {
  // repeat after me
  var newStr ='';
  if(num < 0){
    return '';
  }
  else{
    for(;num > 0; num--){
      newStr = newStr.concat(str);
    }
    console.log(newStr);
     return newStr;
  } 
 
  
}

repeat("abc", 3);

