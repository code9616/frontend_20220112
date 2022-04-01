$(document).ready(function(){
    var i = 1;//상태의 초기값
    $('.q_menu').mouseenter(function(){
        if(i == 1){  
          $('#submn_area').stop().css({height:'0px'}).animate({height:'300px'},500);
           i = 0;//초기값을 수정(작동중지)
        }        
    });
    $('#submn_area').stop().mouseleave(function(){
        i = 1 //초기값수정(작동실행)  
        $('#submn_area').css({height:'300px'}).animate({height:'0px'},500);
    })

  });