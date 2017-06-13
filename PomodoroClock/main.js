window.onload = function(){
    var btClkArr = document.getElementsByClassName("btClick");
    var timeShow = document.getElementById("showTime");
    var breakSpan = document.getElementById("break");
    var seSpan = document.getElementById("session");
    var textP = document.getElementById("showTxt");
    var textConut = document.getElementsByClassName("count");
    var countById = document.getElementById("boxBgColor");
        
    //初始时间段
    var showTime = 25*60;
    var countNum = showTime;
/*    var sessContrl = false;
    var breakContrl = false;
*/

    // 用于接收setInterval 函数返回值
    var itvContr = 0;                                    

    //给所有按钮添加点击函数
    for(var a of btClkArr){
        a.onclick = btClickFuc;
    }

    //点击函数：加减 时间
    function btClickFuc(){
       // console.log(this.innerHTML);
        var choice = this.innerHTML;
        
        if(itvContr){
            return;
        }
        
        switch(choice){
            case '-':
                {
                    if(textP.innerHTML == "Break!" && this.nextElementSibling.id == "session"){
                        return;
                    }

                    if(this.nextElementSibling.innerHTML == 1){
                        break;
                    }
                    else{
                        this.nextElementSibling.innerHTML--;
                    }
                
                    break;
                }
            case '+':
                {
                    if(textP.innerHTML == "Break!" && this.previousElementSibling.id == "session"){
                        return;
                    }
                    this.previousElementSibling.innerHTML++;
                    break;
                }
            default:
                break;
        }

        if(textP.innerHTML == "Session" && this.parentNode.id == "breakBt"){
             return;
        }
        /*else if(textP.innerHTML == "Break!" && this.parentNode.id == "sessBt"){
            return;
        }*/

        if(textP.innerHTML == "Session"){
            timeShow.innerHTML = seSpan.innerHTML;
        }
        else{
            timeShow.innerHTML = breakSpan.innerHTML;
        }
        showTime = timeShow.innerHTML*60;
        countNum = showTime;
        console.log(countNum);
    }

    function intervalFunc() {
        var showTxt;
        var timeHour, timeMin, timeSec;
  
        showBgHt = (1-showTime/countNum)*100 + '%';
        countById.style.height = showBgHt;

        //根据文本显示添加span 不同 背景色
        if(textP.innerHTML == "Session"){      
            countById.style.backgroundColor = "#99CC00";
        }
        else{
            countById.style.backgroundColor = "red";
        }

        if(showTime == 0){
            
            if(textP.innerHTML === "Session"){
                showTime = breakSpan.innerHTML*60;
                textP.innerHTML = "Break!";
            }
            else{
                showTime = seSpan.innerHTML*60;
                textP.innerHTML = "Session";
            }
            
        }
        showTime--;


        //时间显示文本计算： 通过秒数 计算 时、分、秒
        timeHour = Math.floor(showTime/(60*60))%24;
        timeMin  = Math.floor(showTime/60)%60;
        timeSec  = Math.floor(showTime)%60;

        if(timeSec < 10){
            timeSec = '0' + timeSec;
        }
        timeShow.innerHTML = '' + (timeHour?(timeHour+":"):'') + timeMin + ":" + timeSec;
        console.log(timeShow.innerHTML);
    }

    //set 进程
    function textClickFunc(){
        if(itvContr){
            clearInterval(itvContr);
            itvContr = 0;
            console.log(itvContr);
        }
        else{
            
            itvContr = setInterval(intervalFunc,1000);
            console.log(itvContr);
        }
        
    }

    textConut[0].onclick = textClickFunc;

};