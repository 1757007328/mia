//商品详情页Javascript
$(function() {
	
	$("#index-nav-list ul").on("mouseenter", "li", function() {
		$(".navCon").show();
		var index = $(this).index();
		$.get("../json/nav_data.json", function(data) {
			var html = template("navCon", data[index]);
			$(".navCon").html(html);

		})

	});

	$("#index-nav-list").on("mouseleave", function() {
		$(".navCon").hide();
	})

	$.get("../json/nav.json", function(data) {
		var html = template("nav", data);
		$("#index-nav-list ul").html(html);
	})
	
	
	$(window).scroll(function(){
		if($(this).scrollTop()>200){
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
	
	$(".details-smallImg img").hover(function(){
		$(".details-bigImg img").eq($(this).index()).addClass("select").siblings().removeClass("select");
		})
	
	$(".details-right-check dd").click(function(){
		$(this).css("border-color","#fa4b9b");
	})
})