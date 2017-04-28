$(document).ready(function(){
  var objWthData;
    if(window.XMLHttpRequest){
        objWthData = new XMLHttpRequest();
    }
    else{
        objWthData = new ActiveXObject("Microsoft.XMLHTTP");
    }


    var url = 'http://v.juhe.cn/weather/index';  
      objWthData = $.ajax(url, {  
        data: {  
          'cityname': '苏州',  
          'dtype': 'jsonp',  
          'key': '9165b04c30732b47cd2f896c372b2f09',  
        },  
        dataType: 'jsonp',
        success:function(data){
            console.log(data);          

            $(".weather_dt p:nth-child(2)").append(data.result.sk.humidity);
            $(".weather_dt p:nth-child(3)").append(data.result.today.dressing_advice);
            $(".weather_dt p:nth-child(4)").append(data.result.today.wash_index);
            $(".weather_dt p:nth-child(5)").append(data.result.today.travel_index);
            $(".weather_dt p:nth-child(6)").append(data.result.today.exercise_index);
            $(".weather_dt p:nth-child(7)").append(data.result.today.uv_index);
            

            $(".weather_dt").prepend(data.result.today.city+" ");
            $(".weather_dt").prepend(data.result.today.week+" ");
            $(".weather_dt").prepend(data.result.today.date_y+" ");


            var futureArr = data.result.future;
            console.log(futureArr);

           for(var atrObj in futureArr){
             console.log(futureArr[atrObj].week);
              var textP ="<div>" + "<P>" + futureArr[atrObj].week + "</P>" + "<br>" +
                  "<P>" + futureArr[atrObj].temperature + "</P>" + "<br>" +
                  "<P>" + futureArr[atrObj].weather + "</P>" + "<br>" +
                  "<P>" + futureArr[atrObj].wind + "</P>" + "</div>";
              $(".wt_future").append(textP);
           }

      
    }
      });  
    //console.log(objWthData);
});