//轮播js
$(function() {
	var i = 0;
	var iTem = setInterval(function() {
		move();
	}, 3000);

	function move() {
		i++;
		if(i == 5) {
			i = 0;
		}
		$('.lunbo-pic li').eq(i).fadeIn(500).siblings().fadeOut(500);
		$('.lunbo-nav li').eq(i).addClass('select').siblings().removeClass('select');
	}

	$('.lunbo-nav li').hover(function() {
		var j = $(this).index();
		clearInterval(iTem);
		$('.lunbo-pic li').eq(j).fadeIn(500).siblings().fadeOut(500);
		$('.lunbo-nav li').eq(j).addClass('select').siblings().removeClass('select');
	});

	$('.lunbo-pic li').hover(function() {
		clearInterval(iTem);
	}, function() {
		iTem = setInterval(function() {
			move();
		}, 3000);
	});

	$("#index-nav-list ul").on("mouseenter", "li", function() {
		$(".navCon").show();
		var index = $(this).index();
		$.get("json/nav_data.json", function(data) {
			var html = template("navCon", data[index]);
			$(".navCon").html(html);

		})

	});

	$("#index-nav-list").on("mouseleave", function() {
		$(".navCon").hide();
	});

	$.get("json/nav.json", function(data) {
		var html = template("nav", data);
		$("#index-nav-list ul").html(html);
	});
	$.get("json/index_list.json", function(data) {
		var html = template("index-list1", data);
		$(".index-forYou-lists").html(html);

		var html1 = template("today-list", data);
		$(".index-today-list").html(html1);
		
		var html2 = template("bigBrand-list", data);
		$(".index-bigBrand-list").html(html2);
	});
	
	
	
	//侧边栏功能js
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
		$("body,html").animate({"scrollTop":0},800);
	})
});