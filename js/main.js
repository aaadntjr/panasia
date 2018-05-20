$(document).ready(function(){
	
	var now = 0;
	var count = 2;
	var slideImg = $(".wrap section .slide img");
	
	$(slideImg).eq(now).siblings().fadeOut();
	
	
	function slide(){
		
		now = now == count ? now=0 : now+=1;
		
		$(slideImg).eq(now).fadeIn();
		$(slideImg).eq(now).siblings().fadeOut();
		
	}
	
	setInterval(slide,2000);
	
	
    $(document).scroll(function(){
       if($(document).scrollTop() > 200){
           $('.top-bt').css('opacity','1');
       } else {
           $('.top-bt').css('opacity','0');
       }
    });
    
    $('.top-bt').click(function(){
        $('html').animate({scrollTop : 0},"slow");
        
        return false;
    });
	
})//레디펑션