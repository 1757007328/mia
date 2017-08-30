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
	});

	$.get("../json/nav.json", function(data) {
		var html = template("nav", data);
		$("#index-nav-list ul").html(html);
	});
	
//	$.get("../json/index_list.json",function(data){
//		var html = template("detailsBody",data);
//		$(".content").html(html);
//		
//		$(".details-bigImg img:first").addClass("select");
//		$(".details-smallImg img").hover(function(){
//		$(".details-bigImg img").eq($(this).index()).addClass("select").siblings().removeClass("select");
//		});
//	
//		$(".details-right-check dd").click(function(){
//		$(this).css("border-color","#fa4b9b");
//		})
//	});
	
	
	var strSearch = location.search;
	var arrSearch = strSearch.split("=");
	var id = arrSearch[1]; 
	$.get("../json/products.json",function(data){
		var html = "<div class='details-top'><div class='details-left'><div class='details-left-bigImg'><img src='"+data[id].detailImg1+"'><img src='"+data[id].detailImg2+"'><img src='"+data[id].detailImg3+"'><img src='"+data[id].detailImg4+"'></div><div class='details-left-smalImg'><img src='"+data[id].detailImg1+"'><img src='"+data[id].detailImg2+"'><img src='"+data[id].detailImg3+"'><img src='"+data[id].detailImg4+"'></div></div><div class='details-right'><div class='details-right-tit'><h3>"+data[id].title+"</h3></div><div class='details-right-bigtit'><p>"+data[id].bigtit+"</p></div><div class='details-right-price'><span>价格:<i>"+data[id].price+"</i></span><span>"+data[id].oldprice+"</span></div><div class='details-right-check'><span>可选</span><i><img src="+data[id].imgUrl+"></i></div><div class='details-right-pay'><span>数量</span><input type='text' value='1'></div><div class='details-right-goto'><button>加入购物车</button></div><div class='details-right-id'><span>商品ID:"+id+"</span></div><div class='details-right-tellyou'><ul><li>满88包邮</li><li>商家</li><li>不支持7天无理由退货</li><li>假一赔十</li></ul></div></div></div></div><div class='details-body'><div class='details-body-img'><img src='"+data[id].IntroduceImg1+"'><img src='"+data[id].IntroduceImg2+"'><img src='"+data[id].IntroduceImg3+"'><img src='"+data[id].IntroduceImg4+"'><img src='"+data[id].IntroduceImg5+"'><img src='"+data[id].IntroduceImg6+"'></div></div>";
		
		$("#content").html(html);
		$(".details-left-bigImg img:first").addClass('select');
	})
	
	
	
	
	
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
	
});