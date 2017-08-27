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
	})

	$.get("../json/nav.json", function(data) {
		var html = template("nav", data);
		$("#index-nav-list ul").html(html);
	})
	

})