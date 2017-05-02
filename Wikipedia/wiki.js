$(document).ready(function(){

    var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&origin=*&gsrsearch=';
    $('.search_tex button').click(function(){
        var searTex = $('.search_tex input').val();
        console.log(searTex);
        var newUrl = url + searTex;
        console.log(newUrl);
        $(".wiki_img").css({"display":"none"});
        $.ajax({
            url: newUrl,
            success: function(response){
                var queryArr = response.query.pages;
                console.log(queryArr);
                for(var objRes in queryArr){
                    var index = queryArr[objRes].index;
                    console.log(index);
                    var listA = $(".resultlist li").eq(index-1).find("a");
                    var title = queryArr[objRes].title;
                    var href="http://en.wikipedia.org/wiki/"+encodeURIComponent(title);
                    
                    var listP = $(".resultlist li").eq(index-1).find("p");
                    var imgSrc = '';
                     try{
                            imgSrc=queryArr[objRes].thumbnail.source;
                        }catch(e){}
                    
                    console.log(imgSrc);
                    listA.text(title);
                    listA.attr("href",href);
                    listP.find("img").attr("src",imgSrc);
                    console.log(queryArr[objRes].extract);
                    listP.append(queryArr[objRes].extract);
                    $(".resultlist").addClass("addClass");
            }
            }
        });
        
    });
    $(".search_tex input").focus(function(){
        $(".wiki_img").css({"display":"block"});
       // $(".search_rst").css({"display":"none"});
    });
});