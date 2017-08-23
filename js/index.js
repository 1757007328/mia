//轮播js
$(function(){
	var i=0;
	var iTem = setInterval(function(){
			move();
		},3000);
	function move(){
		i++;
		if(i == 5){
			i = 0;
		}
		$('.lunbo-pic li').eq(i).fadeIn(500).siblings().fadeOut(500);
		$('.lunbo-nav li').eq(i).addClass('select').siblings().removeClass('select');
	}
	
	
	$('.lunbo-nav li').hover(function(){
		var j = $(this).index();
		clearInterval(iTem);
			$('.lunbo-pic li').eq(j).fadeIn(500).siblings().fadeOut(500);
			$('.lunbo-nav li').eq(j).addClass('select').siblings().removeClass('select');
		})
	
	$('.lunbo-pic li').hover(function(){
		clearInterval(iTem);
	},function(){
		iTem = setInterval(function(){
			move();
		},3000);
	})
})
