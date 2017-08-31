//购物车JavaScript
$(function() {
	
	$(window).scroll(function(){
		if($(this).scrollTop()>100){
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
	
	$.get("../json/products.json",function(data){
		var strCookie = $.cookie("cart");
		var objCookie = strCookie ? JSON.parse(strCookie):{};
		var html = "";
		var smum = 0;
		var smumPrice = 0;
		var sp1 = 0;
		for(var attr in objCookie){
			html += "<dl><dt><img src=' " + data[attr].imgUrl + " '></dt><dd><p class='car-tit'>" + data[attr].title +"</p><p class='car-price'>单价"+data[attr].price+"</p><em class='car-lt'>-</em><input type='text' disabled='disabled' data-id=pid"+data[attr].id +" value=' " + objCookie[attr] + " '><em class='car-gt'>+</em><p class='car-remove'>删除商品</p></dd></dl>";
		$("#shopcar").html(html);
		
		
		smum += Number(objCookie[attr]);
		
		$(".car-lt").on("click",function(){
			var id = $(this).parent().find('input').attr("data-id");
			var num = --objCookie[id];
			$(this).parent().find('input').val(num);
			cookie(id,num,true);
			smum--;
			snumadd();
			return false;
			
		})
		$(".car-gt").on("click", function() {
			var id = $(this).parent().find('input').attr("data-id");
			var num = ++objCookie[id];
			$(this).parent().find('input').val(num);
			cookie(id,num,true);
			smum++;
			snumadd();
			return false;
		})
		function snumadd(){
			$("#anum").html(smum);
			smumPrice +=Number(data[attr].price)*Number(objCookie[attr]);
			$("#car-money").html(smumPrice);
		}
		
		snumadd();
		
		}
		
		$(".car-remove").click(function(){
			$(this).parent().parent().remove();
		})
	})
	
	
	
});