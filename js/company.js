$(document).ready(function(){
	
	$(".lnb_main_item:first .lnb_sub").show();
	
	/*$(".lnb_main_item").click(function () {
		$(".lnb_sub", this).slideToggle(300);
	});

	$(".lnb_sub").click(function(){
		$(this).stop().slideToggle();
	});*/
	
	/*lnb 클릭하면 메뉴 열리고 형제는 닫히고*/
	$(".lnb_main_item > a").click(function(){
		$(".lnb_sub").stop().slideUp();
		$("+.lnb_sub", this).stop().slideDown();
	});
	
	/*메인 컨텐츠 옆에서 들어오기*/
	$("section .company-main").css({"opacity":"1",
									"transform":"translate(0,0)"});
	/*서브메뉴 텍스트 나타내기*/
	$("section .company p").css({"opacity":"1"});
	
	/*lnb 위에서 아래로 내려오기*/
	$(".lnb").css({"opacity": "1", "transform":"translate(0,0)"});
	
//	$("*").click(function(){
//		$(this).css({"outline":"none"});
//	});
}); //레디 펑션