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
	
	
	/*$(".content a").hover(function(){
		$(this).css("margin","-1rem");
		$(this).siblings().css("margin","0");
	});*/
	
})//레디펑션