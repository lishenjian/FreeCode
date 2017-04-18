$(document).ready(function(){
    var arr = [];

    //定义初始弹幕高度，根据此设置，调整首次弹幕的高度
    var topMin = $('.screen_show').offset().top;
    var topMax = topMin + $('.screen_show').height();
    console.log(topMax);
	var _top = topMin;

    //button  发射 添加点击事件
    $(".bt_sub").click(function(){
        var text = $(".text_msg").val();
        arr.push(text);
        $(".text_msg").val('');
        var showData = $("<div></div>");
        showData.text(text);
        $(".screen_show").append(showData);
        funcRunData(showData);
    });

    //响应 “enter” 键
    $(".text_msg").keypress(function(event){
        if(event.keyCode == "13"){
            $(".bt_sub").trigger('click');
        }
    });

    //响应清除按钮：清除全局数组，和屏幕div
    $(".bt_del").click(function(){
        $(".screen_show").empty();
        arr = [];
    })

    //参考freeCode函数功能：设置移动位置，颜色 动画（animate();）

    function funcRunData(showData){
        var _left = $('.screen_show').width() - showData.width();
	    _top = _top + 50;
	    if (_top > (topMax - 50)) {
	      _top = topMin;
	    }
	    showData.css({
	      left: _left,
	      top: _top,
	      color: getRandomColor()
	    });
        console.log(_left);
	    var time = 20000 + 10000 * Math.random();
	    showData.animate({
	      left: "-" + _left + "px"
	    }, time, function() {
	      showData.remove();
	    });
    }

    function getRandomColor(){
	    return '#' + (function(h) {
	      return new Array(7 - h.length).join("0") + h
	    })((Math.random() * 0x1000000 << 0).toString(16))
	  }


    function timeTask(){
	    if (arr.length > 0) {
	      var n = Math.floor(Math.random() * arr.length + 1) - 1;
	      var showData = $("<div>" + arr[n] + "</div>");
	      $(".screen_show").append(showData);
	      funcRunData(showData);
	    }

	    setTimeout(timeTask, 3000);
	  }
	  timeTask();
});