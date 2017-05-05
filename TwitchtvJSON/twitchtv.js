$(document).ready(function(){

//定义变量接受user 个人信息
  var srcImg ='';
  var gameData ='';
  var urlLink ='';
  var nameData ='';
  var statusData ='';


  //控制menu
  $(".manu div").click(function(){
    $(".manu div").removeClass("select");
    $(this).addClass('select');
  });

  var arrWrite = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];

//换 get JSON 数据，并处理
  for(var i = 0; i < arrWrite.length; i++){
    var url = "https://api.twitch.tv/kraken/channels/" + arrWrite[i] + "?client_id=3ayqtffruo2goxf0cvyp75wjm28g4pq&callback=?";
    $.getJSON(url, function(data) {

        console.log(data);

        if(data.logo === null){
          srcImg = 'https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png';
        }
        else{
          srcImg = data.logo;
        }
        
        if(data.game === null){
          gameData = "Offline";
        }
        else{
          gameData = data.game;
        }
        
        urlLink = data.url;
        nameData = data.name;
        if(data.game === undefined){
          statusData = 'Account Deactivated';
        }
        else if(data.game === null){
          statusData = 'offline';
        }
        else{
          statusData = 'online';
        }

        //组html 元素，css 属性已在css 文件中定义
        var appendDiv = '<div class="tv_user ' + statusData + '"><a href="' + urlLink +'"><div><img src="' + srcImg + '" alt="TWITCH">';
        var appendDiv1 ='<h3>' + nameData + '</h3></div><p>'  + gameData + '</p></a>' + '</div>';
        $(".body_cont").append(appendDiv + appendDiv1);
   });
 }

//给menu 添加点击事件
  $("#all").on("click",function(){
      $('.online').show();
      $('.offline').show();
  });

  $("#online").on("click",function(){
      $('.online').show();
      $('.offline').hide();
  });

  $("#offline").on("click",function(){
      $('.online').hide();
      $('.offline').show();
  });

});