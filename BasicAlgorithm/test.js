
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
      //newStr = newStr.concat(str);     // 可行，性能不如 +=
      newStr += str;
    }
    console.log(newStr);
    return newStr;
  } 
 
  
}

repeat("abc", 3);




/*
 * 截断一个字符串！

 * 如果字符串的长度比指定的参数num长，则把多余的部分用...来表示。

 * 切记，插入到字符串尾部的三个点号也会计入字符串的长度。

 * 但是，如果指定的参数num小于或等于3，则添加的三个点号不会计入字符串的长度。
 
 */




function truncate(str, num) {
  // Clear out that junk in your trunk
  if(num >= str.length){
    return str;
  }
  else if(num > 3){
    str = str.slice(0,num-3) + '...';
  }
  else{
    str = str.slice(0,num) + '...';
  }
  return str;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);



function chunk(arr, size) {
  // Break it up.
  var newArr = [];
  var i = 0;
  for(var reLength = arr.length; reLength > size;){
    newArr.push(arr.slice(i,i+size));
    console.log(newArr);
    reLength = reLength - size;
    i +=size;
  }
    
  return newArr;
}

chunk([0, 1, 2, 3, 4, 5], 4);



function mutation(arr) {
  for(var i = 0; i < arr[1].length; i++){
    
    if(arr[0].toLowerCase().indexOf(arr[1].toLowerCase()[i],0) < 0){
      console.log(arr[1][i]);
      return false;
    }
     
  }
  return true;
}

mutation(["hello", "Hello"]);



function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function isTrue(value){
    return value;
  }

  return arr.filter(isTrue);
}

bouncer([7, "ate", "", false, 9]);



function destroyer(arr) {
  var newArr = arguments;
  function delArr(value){
    for( var i = 1; i< newArr.length; i++){
     if(value == newArr[i]){
       return false;
     }
    }
    return true;   
  }
  return arr.filter(delArr);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);



function where(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a,b){
    return a - b;
  });
  for(var i = 0; i < arr.length; i++){
    if(arr[i] >= num){
      arr.splice(i,0,num);
      return i;
    }
  }
}

where([5, 3, 20, 3], 5);




function rot13(str) { // LBH QVQ VG!
  var newStr ='';
  for(var i = 0; i<str.length; i++){
    console.log(str.charCodeAt(i));
    if(str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90){
      newStr +=(String.fromCharCode(str.charCodeAt(i) -13));
      console.log(newStr);
    }
    else if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) < 78){
    newStr +=(String.fromCharCode(str.charCodeAt(i) + 13));
    }
    else{
      newStr +=str[i];
    }
  }
  return newStr;
}

rot13("SERR PBQR PNZC");