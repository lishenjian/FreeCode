function myClick(){

   switch(this.innerHTML){
        case '=':
            {
                sum = eval(result.innerHTML);
                result.innerHTML = sum;
                reStr = '';
                break;
            }
        case "AC":
            {
                result.innerHTML = '';
                reStr = '';
                break;
            }
        case "CE":
            {
                var length = reStr.length;
                reStr = reStr.slice(0,length-1);
                result.innerHTML = reStr;
                console.log(result.innerHTML);
                break;
            }
        case "Ans":
            {
                break;
            }
        case " ":
            {
                result.innerHTML = '';  
                break;
            }
        default:
            reStr += this.innerHTML;
            result.innerHTML = reStr;
            console.log(result.innerHTML);
    }
}

var sum;
var result = document.getElementById("result");
var reStr = result.innerHTML;
var btArr = document.getElementsByTagName("button");
for(var a of btArr){
    a.onclick = myClick;
}

