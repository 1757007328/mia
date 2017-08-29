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
	//结束验证码生成
	//进行数据验证(本地)
	
	$("#btn").click(function(){
		var name = $("#username").val();
		var oReg = /^1\d{10}$/;
		if(name == ""){
			$(".tit").css("display","block");
			$("#tit").html("请输入账号");
		}else{
			if(oReg.test(name) == false){
				$(".tit").css("display","block");
				$("#tit").html("请检查你的手机号格式是否正确");
			}else{
				if($("#psw").val() == ""){
					$(".tit").css("display","block");
					$("#tit").html("请输入你的密码");
				}else{
					if($("#psw").val().length < 6){
						$(".tit").css("display","block");
						$("#tit").html("密码位数大于6位");
					}else{
						if($("#verinumb").val() == ""){
								$(".tit").css("display","block");
								$("#tit").html("请输入验证码");
							}else{
								if($("#verinumb").val() != number){
									$(".tit").css("display","block");
									$("#tit").html("验证码输入错误");
								}else{
									$(".tit").css("display","block");
									$("#tit").html("登录成功,3S后跳转到首页！！");
									setTimeout(function(){
										self.location='../index.html';
									},3000)
							}
						}				
					}
				}
			}
		}
	})
	
	
	$("input").focus(function(){
		$(".tit").css("display","none");
	})
	
	
	
})
