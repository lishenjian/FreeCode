$(document).ready(function () {
    $('ul.nav > li').click(function (e) {
        
        //e.preventDefault();   阻止元素发生默认行为，会阻止链接打开或跳转
        
        $('ul.nav > li').removeClass('active');
        $(this).addClass('active');
    });
});