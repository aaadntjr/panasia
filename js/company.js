$(document).ready(function(){
	
	$(".lnb_main_item:first .lnb_sub").show();
	
	/*$(".lnb_main_item").click(function () {
		$(".lnb_sub", this).slideToggle(300);
	});

	$(".lnb_sub").click(function(){
		$(this).stop().slideToggle();
	});*/
	
	$(".lnb_main_item > a").click(function(){
		$(".lnb_sub").stop().slideUp();
		$("+.lnb_sub", this).stop().slideDown();
	});
	
	
}); //레디 펑션