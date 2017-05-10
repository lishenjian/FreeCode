
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



/*function diff(arr1, arr2) {
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

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);*/



/*
将给定的数字转换成罗马数字。
1 2  3   4  5 6  7   8    9
I II III IV V VI VII VIII IX
				
10 20 30  40 50 60 70  80   90
X  XX XXX XL L  LX LXX LXXX XC
 								
100 200 300 400 500 600 700 800 900
C   CC  CCC CD  D   DC  DCC DCCC CM

*/

/*function convert(num) {
    var roman = '';
    var Symbols = ['I','V','X','L','C','D','M'];
    var i = 0;
    while(num > 0){
        var remainder = num % 10;
        console.log(remainder);
        switch(remainder){
            case 9:{
                roman = Symbols[i] + Symbols[i+2] + roman;
                break;
            }
            case 8:{
                roman = Symbols[i] + roman;
            }
            case 7:{
                roman = Symbols[i] + roman;
            }
            case 6:{
                roman = Symbols[i] + roman;
            }
            case 5:{
                roman = Symbols[i+1] + roman;
                break;
            }
            case 4:{
                roman = Symbols[i] + Symbols[i+1] + roman;
                break;
            }
            case 3:{
                roman = Symbols[i] + roman;
            }
            case 2:{
                roman = Symbols[i] + roman;
            }
            case 1:{
                roman = Symbols[i] + roman;
                break;
            }
           
            default:
                break;
        }
        i = i +2;
        num = Math.floor(num/10);
    }
    console.log(roman);
    return roman;
}

convert(97);
*/


/*
    写一个 function，它遍历一个对象数组（第一个参数）并返回一个包含相匹配的属性-值对（第二个参数）的所有对象的数组。
    如果返回的数组中包含 source 对象的属性-值对，那么此对象的每一个属性-值对都必须存在于 collection 的对象中。

*/

/*function where(collection, source) {
  var arr = [];
  var key = Object.keys(source);
  console.log(key);
  
  for(var i = 0; i < collection.length; i++){
    var k = 0;
    for(var j = 0; j < key.length; j++){
        if(collection[i].hasOwnProperty(key[j])&&collection[i][key[j]] === source[key[j]]){
            k++;
        }
    }
    if(k == key.length){
        arr = arr.concat(collection[i]);
    }
  }
  console.log(arr);
  // What's in a name?
  return arr;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) */


/*
    使用给定的参数对句子执行一次查找和替换，然后返回新句子。
    注意：替换时保持原单词的大小写。例如，如果你想用单词 "dog" 替换单词 "Book" ，你应该替换成 "Dog"。

*/


/*function myReplace(str, before, after) {
  if(before[0] > 'A' && before[0] < 'Z'){
    after = after.slice(0,1).toUpperCase() + after.slice(1);
  }
  console.log(after);
  str = str.replace(before,after);
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");*/





/*

    把指定的字符串翻译成 pig latin。

    Pig Latin 把一个英文单词的第一个辅音或辅音丛（consonant cluster）移到词尾，然后加上后缀 "ay"。

    如果单词以元音开始，你只需要在词尾添加 "way" 就可以了。

*/

/*function translate(str) {
  var i = 0;
  var vowelArr = ['a','o','e','i','u'];
  for(i = 0; i < str.length; i++){
      console.log(str[i]);
    if(vowelArr.indexOf(str[i]) !== -1){
      break ;
    }
  }
  console.log(i);
  if(i == 0){
    str = str + 'way';
  }
  else{
    str = str.substr(i) + str.substr(0,i) + 'ay';
  }
  
  console.log(str);
  return str;
}

translate("consonant");
*/


/*

    DNA 链缺少配对的碱基。依据每一个碱基，为其找到配对的碱基，然后将结果作为第二个数组返回。

    Base pairs（碱基对） 是一对 AT 和 CG，为给定的字母匹配缺失的碱基。

*/


/*function pair(str) {
  var atArr = ['A','T'];
  var cgArr = ['C','G'];
  var newArr = str.split("");
  console.log(newArr);
  for(var i = 0; i < newArr.length; i++){

    var j = atArr.indexOf(newArr[i]);
    var k = cgArr.indexOf(newArr[i]);
    console.log(j);
    console.log(k);
    var arr1 = [];
    var arr2 = [];
    if(j !== -1){
        arr1.push(atArr[j]);
        arr1.push(atArr[1-j]);
        newArr[i] = arr1;
    }
    else if(k !== -1){
        arr2.push(cgArr[k]);
        arr2.push(cgArr[1-k]);
        newArr[i] = arr2;
    }
    console.log(newArr[i]);
  }
  return newArr;
}

pair("GCG");*/



/*

    从传递进来的字母序列中找到缺失的字母并返回它。

    如果所有字母都在序列中，返回 undefined。

*/


/*function fearNotLetter(str) {
  var newStr = '';
  for(var i = 0; i < str.length-1; i++){
    var code1 = str.charCodeAt(i);
    var code2 = str.charCodeAt(i+1);
  
    if((code2 - code1) != 1){
      newStr = String.fromCharCode(code1+1);
      i = 0;
      break;
    }
  }
  if(i !== 0){
    return undefined;
  }
  console.log(newStr);
  return newStr;
}

fearNotLetter("bcd");*/

/*function unite(arr1, arr2, arr3) {
   var newArray=[];
   //将参数组合成
   var allArray=Array.prototype.concat.apply([], arguments);
   console.log();
   for(var i = 0; i < allArray.length; i++){
      if(newArray.indexOf(allArray[i]) === -1){
         newArray.push(allArray[i]);
      }
   }
   return newArray;
}
unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);*/




/*

给一个正整数num，返回小于或等于num的斐波纳契奇数之和

*/

/*
function sumFibs(num) {
    var arr = [];
    var x = 1;
    var y = 1;
    var sum = 0;
    for(var i = 1; i <= num; i++){
        if(i === 1 || i === 2){
            arr.push(1);
        }
        else{
            arr.push(arr[arr.length-1]+arr[arr.length-2]);
        }
    }
    console.log(arr);
    for(var i = 0; i < arr.length; i++){
        if(arr[i]%2 !== 0){
            sum = sum + arr[i];
        }

    return sum;
}
*/



/*function sumFibs(num) {
    var i =1;
    var arr = [];
    var add = 0;
    var sum = 0;
    while(1){
        if(i === 1 || i === 2){
            arr.push(1);
        }
        else{
            add = arr[arr.length-1]+arr[arr.length-2];
            console.log(add);
            if(add > num){
                break;
            }
            
            arr.push(add);
        }

        
        i++;
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i]%2 !== 0){
            sum = sum + arr[i];
        }
    }
    console.log(sum);
    return sum;
}

sumFibs(75025);*/


/*

    求小于等于给定数值的质数之和。

*/


/*function sumPrimes(num) {
    var arr = [];
    var sum = 0;
    for(var i = 2; i <= num; i++){
        for(var j = 2; j < i; j++){
            if(i % j === 0){
                break;
            }
        } 
        if(j === i){
            arr.push(i);  
        }
    }
    console.log(arr);
    for(var k = 0; k < arr.length; k++){
        sum+=arr[k];
    }
    console.log(sum);
    return sum;
}

sumPrimes(977);*/


/*

找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。

*/

/*function smallestCommons(arr) {
  var res=make_arr(arr).reduce(function(a,b){  //利用reduce,两两求最小公倍数
    return gcd(a,b);
  });
  return res;
}

function make_arr(arr){ //返回包含给定参数和他们之间连续数字的顺序数组
  arr.sort(function(a,b){
    return a-b;
  });
  var max=arr.pop();
  var num=arr[0];
  while( num<max ){
    num++;
    arr.push(num);
  }
  //console.log(arr);
  return arr;
  
}

function gcd(a,b){  //遍历,获得a,b的最小公倍数
  var max=Math.max(a,b),
      min=Math.min(a,b),
      count;
  console.log(a);
  console.log(b);
  for(var i=1;i<=max;i++){
    count=min*i;
    if(count%max===0){
       // console.log(count);   
      return count;
    }
  }
  
}

smallestCommons([1,5]);*/



/*function drop(arr, func) {
    var length = arr.length;
    for(var i = 0; i < length; i++){
        if(func(arr[0])){   
            return arr;
        }
        else{
            arr.shift();
        }
    }
    return arr;
}

drop([1, 2, 3, 4], function(n) {return n > 5; });*/


/*function steamroller(arr) {
  // I'm a steamroller, baby
  console.log(arr);
  var i = 0;
  while (arr.some(item => item instanceof Array)) {
      i++;
      console.log(arr);
    arr = [].concat(...arr);
  }
  console.log(arr);
  return arr;
}

steamroller([1, [2], [3, [[4]]]]);*/


/*function every(collection, pre) {
  // Is everyone being true?
  var result = collection.every(function(item){
      console.log(item[pre]);
    return item[pre];
  });
  return result;
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
*/



/*
    创建一个计算两个参数之和的 function。如果只有一个参数，
    则返回一个 function，该 function 请求一个参数然后返回求和的结果。
 */
function add() {
  var newArr=[].concat(...arguments);
  if(newArr.some(function(num){
    return typeof num!="number";
  }) ){
    return undefined;
  }
  if(arguments.length == 2){
    return arguments[0] + arguments[1];
  }
  else{
    return function(num){
      if( typeof num != "number" ){ 
        return undefined;
      }
        return newArr[0] + num;
     };
  }
 
}

add(2,3);