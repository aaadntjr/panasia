$(document).ready(function(){
//	페이드 슬라이드쇼
	var now = 0;
	var count = 2;
	var slideImg = $(".wrap section .slide img");
	
	$(slideImg).eq(now).siblings().fadeOut();
	
	
	function slide(){
		
		now = now == count ? now=0 : now+=1;
		
		$(slideImg).eq(now).fadeIn();
		$(slideImg).eq(now).siblings().fadeOut();
		
	}
	
	setInterval(slide,2000);/* 슬라이드쇼 끝*/
	
	
	/*맨 위로 올라가는 버튼 만들기*/
    $(document).scroll(function(){
		
       if($('html').scrollTop() > 150){
           $('.top-bt').css('opacity','1');
       } else {
           $('.top-bt').css('opacity','0');
       }
    });
    
    $('.top-bt').click(function(){
        $('html').animate({scrollTop : 0},"normal");
        
        return false;
    });
	
	$("header").css({"opacity":".8"});
	$("section").css({"opacity":"1","transform":"translate(0,0)"});
	$(".content").css({"opacity":"1","transform":"translate(0,0)"});
	
	

})//레디펑션