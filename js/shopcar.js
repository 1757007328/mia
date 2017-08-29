//购物车JavaScript
$(function() {
	
	$(window).scroll(function(){
		if($(this).scrollTop()>100){
			$(".adtip").css("display","block");
		}else{
			$(".adtip").css("display","none");
		}
		
	})
	$(".weixin").hover(function(){
		$(".weixin img").css("display","block").animate({left: '-160px'},700);
	},function(){
		$(".weixin img").css("display","none").animate({left: '-240px'},0.1);;
	})
	$(".gotop").click(function(){
		$("body,html").animate({"scrollTop":0},300);
	})
})