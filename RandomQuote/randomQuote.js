$(document).ready(function(){
    var randColor = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', 
    '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", 
    "#BDBB99", "#77B1A9", "#73A857"
    ];

    var randQuote = [
        {"name":"拿破仑","quote":"真正的才智是刚毅的志向"},
        {"name":"莎士比亚","quote":"志向不过是记忆的奴隶，生气勃勃地降生，但却很难成长"},
        {"name":"王尔德","quote":"如果你浪费了自己的年龄，那是挺可悲的。因为你的青春只能持续一点儿时间——很短的一点儿时间。"},
        {"name":"爱因斯坦","quote":"在学校和生活中，工作的最重要的动力是工作中的乐趣，是工作获得结果时的乐趣以及对这个结果的社会价值的认识"},
        {"name":"巴尔扎克","quote":"我们破灭的希望，流产的才能，失败的事业，受了挫折的雄心，往往积聚起来变为忌妒"},
        {"name":"卡耐基","quote":"零星的时间，如果能敏捷地加以利用，可成为完整的时间。所谓“积土成山”是也，失去一日甚易，欲得回已无途"},
        {"name":"塞万提斯","quote":"时间像奔腾澎湃的急湍，它一去无还，毫不留恋"},
        {"name":"毛泽东","quote":"睡眠和休息丧失了时间，却取得了明天工作的精力"}
    ];
   
    var rdFunc = function(){
        var rdNub = Math.floor(Math.random()*12);    
        console.log(randColor[rdNub]);
        $("body").css("background-color" ,randColor[rdNub]);
        $(".quote p").css("color" ,randColor[rdNub]);
        $(".div_bt *").css("background-color" ,randColor[rdNub]);
    }

    rdFunc();

    $(".bt_right").click(function(){
        rdFunc();
         var rdQuote = Math.floor(Math.random()*8);
        $(".quote p:nth-child(1) span").html(randQuote[rdQuote].quote);
        $(".quote p:nth-child(2) span").html(randQuote[rdQuote].name);
 });
});