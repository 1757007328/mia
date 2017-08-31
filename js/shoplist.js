//商品列表页Javascript
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
	});

	$.get("../json/nav.json", function(data) {
		var html = template("nav", data);
		$("#index-nav-list ul").html(html);
	});
	
	
	$(window).scroll(function(){
		if($(this).scrollTop()>200){
			$(".adtip").css("display","block");
		}else{
			$(".adtip").css("display","none");
		}
		
	});
	$(".weixin").hover(function(){
		$(".weixin img").css("display","block").animate({left: '-160px'},700);
	},function(){
		$(".weixin img").css("display","none").animate({left: '-240px'},0.1);;
	});
	$(".gotop").click(function(){
		$("body,html").animate({"scrollTop":0},300);
	})
	
	var $obox = $(".content-body");
	var $odiv  = $(".commodity");
	var $odl  = $odiv.find("dl");
	$.get("../json/products.json",function(data){
		var html = "";
		for(var i in data){
			html += "<div class='commodity'><dl> <dt> <a href='shopdetails.html?id=" + i +"'><img src='"+data[i].imgUrl+"'></a></dt><dd><div class='commodityPrice'><span>￥<em>"+data[i].price+"</em></span><span>￥<em>"+data[i].oldprice+"</em></span></div><a href='detail.html?id=" + i +"'>"+data[i].title+"</a></dd></dl></div>";
			
		}
		$obox.html(html);
	})

});