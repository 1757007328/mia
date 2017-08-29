$(function(){
	
	//验证码随机生成
	var number = "";
	function num(){
		number = parseInt(Math.random()*9000)+1000;
	}
	num();

	$("#verinumba").click(function(){
		num();
		$("#verinumba").html(number);
	})
	$("#verinumba").html(number);
	
	$("#btn").click(function(){
		var name = $("#username").val();
		var overinumb = $("#verinumb");
		var oReg = /^1\d{10}$/;
		if(name == ""){
			$(".tip").css("display","block");
			$("#tip").html('请输入你的手机号')
		}else if(oReg.test(name) == false){
			$(".tip").css("display","block");
			$("#tip").html('请检查你的手机号格式是否正确')
		}else if($("#verinumb").val() != number){
			$(".tip").css("display","block");
			$("#tip").html('请检查你输入的验证码是否正确')
			
		}else{ 
			
			if($("#psw1").val().length < 6){
				$(".tip").css("display","block");
				$("#tip").html('密码位数在6-12位');
			}else if($("#psw1").val() != $("#psw2").val()){
					$(".tip").css("display","block");
					$("#tip").html('两次密码须一致');
				}else{
					$(".tip").css("display","block");
					$("#tip").html('恭喜你，注册成功！！3S后跳转到登录界面');
					setTimeout(function(){
//						window.open("login.html","aaa");
						self.location='login.html'; 
					},3000)
					
				}
				
			
		}
	})
	
	$("input").focus(function(){
		$(".tip").css("display","none");
	})
	
})
