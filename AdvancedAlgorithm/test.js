/*
  如果传入字符串是一个有效的美国电话号码，则返回 true.
  555-555-5555
  (555)555-5555
  (555) 555-5555
  555 555 5555
  5555555555
  1 555 555 5555
  简单来说，美国号码的规则就是，国家代码（必须为1），然后就是3,3,4的数字组合，前三个数字可以用括号包起来。另外就是间隔使用空格或者“-”。

*/

function telephoneCheck(str) {
  // Good luck!
  var regPattern = /^(1\s?)?\(?\d{3}\)?(\s|-)?\d{3}(\s|-)?\d{4}$/;
  var index1=str.indexOf("(");   
  var index2=str.indexOf(")");

  if(index1==-1 && index2==-1){                                     //没有括号
    return regPattern.test(str);
  }
  else if((index1 !=-1 && index2 !=-1)&&(index2-index1==4)){        //有括号，并且两个括号位置间隔三个字符
    var str2 = str.replace(/[\(\)]/g,"");                           //替换括号为空字符，应用正则表达式test测试    类似2(757)6227382  列子
    
    return regPattern.test(str2);
  }
  else{
    return false;
  }
   
}

telephoneCheck("555)-555-5555");


//原型对象理解
/*function test(){
    function Person(){                  //Person 对象构造函数

    }

    var friend = new Person();        //通过构造函数生成对象实例        表达式在此位置时，已经生成一个实例并且实例中添加了一个指向原型对象的指针；
    Person.prototype = {                //重写原型对象                   
      constructor: Person,
      name: "Nicholas",
      age: 29,
      job: "Software Engineer",
      sayName: function (){
        alert(this.name);
      }
    } 
    //var friend = new Person();        //在重写原型对象后 调用构造函数，对象实例所指向的原型对象就是重写后的
    friend.sayName();                   //(error)  查询sayName() 方法，最初原型对象中没有该方法，重写后的原型对象含有，但是 friend 通过构造函数指向的是最初原型；
}
test();*/



/*
    求数组对等差分
*/
function sym(args){
    var arr = [];
    for(var element of arguments){
        arr.push(element);
    }
    var res = arr.reduce(function(acc,value){
        var acc1 = [];
        var value1 = [];

        //去数组中重复项(保留一个)
        acc.forEach(function(a){
            if(acc1.indexOf(a)===-1){
                acc1.push(a);
            }
        });
        
        //去数组中重复项(保留一个)
        value.forEach(function(b){
            if(value1.indexOf(b)===-1){
                value1.push(b);
            }
        });

        acc = acc1.concat(value1);
        //console.log(acc);

        //删除数组中重复项（全部重复值）
        acc =  acc.filter(function(element){
            var index = acc.indexOf(element);
            if(acc.indexOf(element,index+1)!==-1){
                return false;
            }
            else{
                return true;
            }
            
        });
        //console.log(acc);
        return acc;
    });
    
    res.sort(function(a,b){
        return a-b;
    });
    //console.log(res);
    return res;
}
//sym([1, 2, 3], [5, 2, 1, 4]);
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
//sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);


/*

    设计一个收银程序 checkCashRegister() ，其把购买价格(price)作为第一个参数 ,
    付款金额 (cash)作为第二个参数, 和收银机中零钱 (cid) 作为第三个参数.

*/

function checkCashRegister(price, cash, cid) {
    var change = [];
    var diff = undefined;
    var arr = [["ONE HUNDRED",100],["TWENTY",20],["TEN",10],["FIVE",5],["ONE",1],["QUARTER",0.25],["DIME",0.1],["NICKEL",0.05],["PENNY",0.01]];
    
    diff = cash - price;
    if(price == cash){
        return "Closed";
    }
    
    //数组反转
    cid.reverse();

    var i = 0;
    var i;
    for(var a of cid){
        var num = 0;
        while(diff >= arr[i][1] && a[1] !== 0){
            diff = (diff - arr[i][1]).toFixed(2);
            a[1] = (a[1] - arr[i][1]).toFixed(2);
            num++;
            if(diff < arr[i][1] || a[1] == 0){
                change.push([a[0],arr[i][1]*num]);
                if(diff == 0 && a[1] == 0){
                    return "Closed";
                }
                break;
            }
        }
        i++;
    }
    if(diff > 0){
        return "Insufficient Funds";
    }
    return change;
}
//checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

//checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);


/*

依照一个存着新进货物的二维数组，更新存着现有库存(在 arr1 中)的二维数组.
 如果货物已存在则更新数量 . 如果没有对应货物则把其加入到数组中，更新最新的数量. 
 返回当前的库存数组，且按货物名称的字母顺序排列.

*/


function updateInventory(arr1, arr2) {

goon:for(var a of arr2){
        for(var b of arr1){
            if(a[1]===b[1]){
                b[0]+=a[0];
                continue goon;
            }
        }
        arr1.push(a);
    }
    //console.log(arr1);
    arr1.sort(function(a,b){
        return a[1] > b[1];
    });
    //console.log(arr1);
    return arr1;
}
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];
updateInventory(curInv, newInv);


/*

    全排列算法

*/


/*var permAlone=(function() {
    var count;   //计数器
    function judge(arr) {  //判断是否符合要求
        for(let i=0,l=arr.length;i<l-1;i++){
            if( arr[i]==arr[i+1] ){
                return;
            }
        }
        count++;
    }
    function fn(source, result) {  
        console.log(source);
        console.log(result);
        if (source.length == 0){
            //console.log(result);
            judge(result);
        }
        else{
            for (var i = 0; i < source.length; i++){
                
                //console.log(result);
                fn(source.slice(0, i).concat(source.slice(i + 1)), result.concat(source[i]));  
            }  
        }

    }  
    return function(str){
        var start=new Date();
        var arr=str.split("");
        //console.log(arr);
        count=0;
        fn(arr, []); 
        //console.log(new Date()-start+"ms");
        //console.log(count);
        return count;
    };
    
})();*/

/*var permAlone=(function() {
    var count;   //计数器
  
    function fn(source, result) {  
        console.log(source);
        console.log(result);
        if (source.length == 0){
            //console.log(result);
            for(let i = 0; i<result.length; i++){
                if(result[i]==result[i+1]){
                    return ;
                }
            }
            count++;
        }
        else{
            for (var i = 0; i < source.length; i++){
                fn(source.slice(0, i).concat(source.slice(i + 1)), result.concat(source[i]));  
            }  
        }

    }  
    return function(str){
        var start=new Date();
        var arr=str.split("");
        count=0;
        fn(arr, []); 
        return count;
    };
    
})();*/

function fn(source, result) {  
    if (source.length == 0){
        //console.log(result);
        for(let i = 0; i<result.length; i++){
            if(result[i]==result[i+1]){
                return ;
            }
        }
        count++;
    }
    else{
        for (var i = 0; i < source.length; i++){
            fn(source.slice(0, i).concat(source.slice(i + 1)), result.concat(source[i]));  
        }  
    }

}  
function permAlone(str){
    var start=new Date();
    var arr=str.split("");
    count=0;
    fn(arr, []); 
    console.log(count);
    return count;
}
//全排列算法
permAlone('abfdefa');



/*
    把常见的日期格式如：YYYY-MM-DD 转换成一种更易读的格式。
    易读格式应该是用月份名称代替月份数字，用序数词代替数字来表示天 (1st 代替 1).
    记住不要显示那些可以被推测出来的信息: 如果一个日期区间里结束日期与开始日期相差小于一年，
    则结束日期就不用写年份了。月份开始和结束日期如果在同一个月，则结束日期月份就不用写了。
    另外, 如果开始日期年份是当前年份，且结束日期与开始日期小于一年，则开始日期的年份也不用写
*/

//暂时方法，后期修改
function makeFriendlyDates(arr) {
    var ordinal = ['st','nd','rd','th'];
    var day = undefined;
    var mounth = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var result = [[],[]];

    arr[0] = arr[0].split("-").join("");
    arr[1] = arr[1].split("-").join("");

    arr.sort(function(a,b){
        return a > b;
    });
    var leng = arr.length;
    for(let i = 0; i < leng; i++){
        result[i].push(arr[i].substr(0,4)); 
        result[i].push(arr[i].substr(4,2)); 
        result[i].push(arr[i].substr(6,2)); 
    }
    var diff = result[1].join("")-result[0].join("");
    for(let i = 0; i < 2; i++){
            result[i][1] = parseInt(result[i][1],10);
            result[i][2] = parseInt(result[i][2],10);

            switch(result[i][2]){
                case 1:
                case 21:
                case 31:
                    result[i][2] = result[i][2] + "st";
                    break;
                case 2:
                case 22:
                    result[i][2] = result[i][2] + "nd";
                    break;
                case 3:
                case 23:
                    result[i][2] = result[i][2] + "rd";
                    break;
                default:
                    result[i][2] = result[i][2] + "th";
                    break;
            }
            
    }
    console.log(diff);
    console.log(result[0][0]);
    if(diff < 10000 && diff > 0){
        
        if(result[0][0] != 2016){
            arr[0] = mounth[result[0][1]-1] + " " + result[0][2] + ", " + result[0][0];
        }
        else{
            arr[0] = mounth[result[0][1]-1] + " " + result[0][2];
        }

        if((result[1][0] > result[0][0]) || (result[0][1] !== result[1][1])){
            arr[1] = mounth[result[1][1]-1] + " " + result[1][2];
        }
        else{
            arr[1] = result[1][2] + "";
        }
        console.log(arr);
        return arr;
    }
    else if(diff == 0){
        arr = [];
        if(result[0][0] != 2016){
            arr[0] = mounth[result[0][1]-1] + " " + result[0][2] + ", " + result[0][0];
        }
        else{
            arr[0] = mounth[result[0][1]-1] + " " + result[0][2];
        }
        console.log(arr);
        return arr;
    }
    else{
         arr[0] = mounth[result[0][1]-1] + " " + result[0][2] + ", " + result[0][0];
         arr[1] = mounth[result[1][1]-1] + " " + result[1][2] + ", " + result[1][0];
         
    }
    console.log(arr);
    return arr;
}

makeFriendlyDates(["2022-09-05", "2023-09-04"]);


/*
    构造对象
*/

var Person = (function() {
    var name;     //name闭包了
    return function(firstAndLast){
      name=firstAndLast;
      this.getFullName=function(){
        return name;
      };
      this.getLastName=function(){
        var arr=name.split(" ");
        return arr[1];
      };
      this.getFirstName=function(){
        var arr=name.split(" ");
        return arr[0];
      };
      this.setFirstName=function(first){
        var arr=name.split(" ");
        arr[0]=first;
        return name=arr.join(" ");
      };
      this.setLastName=function(last){
        var arr=name.split(" ");
        arr[1]=last;
        return name=arr.join(" ");
      };
      this.setFullName=function(firstAndLast){
        return name=firstAndLast;
      };
    };    
})();

var bob = new Person('Bob Ross');
bob.getFullName();



/*
返回一个数组，其内容是把原数组中对应元素的平均海拔转换成其对应的轨道周期.
*/

function orbitalPeriod(arr) {
    var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var newArr = [];
  var obj = {};
  for(var i = 0; i < arr.length; i++){
    obj = {};
    obj.name = arr[i].name;
    obj.orbitalPeriod = Math.round(2*Math.PI*Math.pow(Math.pow((arr[i].avgAlt+earthRadius),3)/GM,0.5));
    newArr.push(obj);
  }
  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);




/*
    元素和等于给定值   求匹配索引和
*/

function pairwise(arr, arg) {
    var sum = undefined;
    var indexArr = [];
    var anth = undefined;
    var rstIdx;
    //console.log(navigator.appVersion);
    if(arr.length == 0){
        return 0;
    }
    for(var i = 0; i < arr.length; i++){
        anth = arg - arr[i];
        rstIdx = arr.indexOf(anth);
        if(arr[i] == null){
            break;
        }
        if(rstIdx != -1 && rstIdx != i){

            if(indexArr.indexOf(rstIdx) == -1 && indexArr.indexOf(i)){
                indexArr.push(i);
                indexArr.push(rstIdx);
                arr[i] = null;
                arr[rstIdx] = null;
            }
        }
    }

    console.log(indexArr);
    rstIdx = indexArr.reduce(function(a,b){
        return a+b;
    });
    console.log(rstIdx);

    
    return rstIdx;
}

pairwise([], 100);



// 下面几个是排序算法：冒泡、插入、选择
/*function test(){
    var testArr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
    var testArr1 = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
    var temp;
    for(var i = 0; i < testArr.length; i++){
        for(var j = 0; j < testArr.length-1; j++){
            if(testArr[j] > testArr[j+1]){
                temp = testArr[j];
                testArr[j] = testArr[j+1];
                testArr[j+1] = temp;
            }
        }
    }
    console.log(testArr);
}
test();*/



/*var testArr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
function selectSort(array){
  for(i = 0; i < array.length; i++){
     var slc = array[i];//初始时设未排序的第一个值为选中值
     var slcIdx;//记录一次循环后作为选中值的index
     for(j = i; j < array.length; j++){  
      if(array[j] < slc){
       slc = array[j];
       slcIdx = j; 
      }
     }
   if(slc != array[i]){//如果最后作为选中值的值和初始slc值不相等
    var temp = array[i];
    array[i] = array[slcIdx];
    array[slcIdx] = temp;
   }
  }
console.log(testArr);
}
selectSort(testArr);*/

/*var testArr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
function insertSort(array){
  for (var i = 0 ; i < array.length-1; i++) {//注意i小于数组的长度-1，否则会造成数组越界，形成死循环
    var temp = array[i+1];
    for (var j = i; j >= 0; j--) {
        console.log(temp);
        console.log(array[i+1]);
        if(temp < array[j]){
            array[j+1] = array[j];
            if(j == 0){//当j==0时，说明已经排到了数组的最开头
            array[0] = temp;
            }
        }else{
            array[j+1] = temp;
            break;
        }
    }
  }
  console.log(testArr);
}
 insertSort(testArr);*/

/*var testArr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
 function insertSort(array){

    //按顺序，每一项检查已排列好的序列
    for(var i = 0; i < array.length; i++){
      //跟已排好序的序列做对比，并插入到合适的位置
      for(var j = 0; j < i; j++){
        //小于或者等于时（我们是升序）插入到该项前面
        if(array[i] <= array[j]){
          console.log(array[i] + ' ' + array[j]);
          array.splice(j, 0, array[i]);
          //删除原有项
          array.splice(i + 1, 1);
          break;
        }
      }
    }
    console.log(testArr);
  }

  insertSort(testArr);*/
