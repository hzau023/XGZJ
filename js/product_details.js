$(function(){
	$("#list .div1,.list1").mouseover(function(){
		$("#list .div1 div").css("background","url(../imgs/little/left_lm.png) no-repeat 0px 3px ")
	}).mouseout(function(){
		$("#list .div1 div").css("background","url(../imgs/little/left_lm_a.png) no-repeat -10px 3px ")
	})
	
	$("#list .div2,.list2").mouseover(function(){
		$("#list .div2 div").css("background","url(../imgs/little/left_lm.png) no-repeat 0px -51px ")
	}).mouseout(function(){
		$("#list .div2 div").css("background","url(../imgs/little/left_lm_a.png) no-repeat -10px -106px ")
	})
	
	$("#list .div3,.list3").mouseover(function(){
		$("#list .div3 div").css("background","url(../imgs/little/left_lm.png) no-repeat 0px -105px ")
	}).mouseout(function(){
		$("#list .div3 div").css("background","url(../imgs/little/left_lm_a.png) no-repeat -10px -159px ")
	})
	
	
	
	$("#list .div4,.list4").mouseover(function(){
		$("#list .div4 div").css("background","url(../imgs/little/left_lm.png) no-repeat 0px -159px ")
	}).mouseout(function(){
		$("#list .div4 div").css("background","url(../imgs/little/left_lm_a.png) no-repeat -10px -214px ")
	})
	
	$("#list .div5,.list5").mouseover(function(){
		$("#list .div5 div").css("background","url(../imgs/little/left_lm.png) no-repeat 0px -215px ")
	}).mouseout(function(){
		$("#list .div5 div").css("background","url(../imgs/little/left_lm_a.png) no-repeat -10px -214px")
	})
	
	$("#list .div6,.list6").mouseover(function(){
		$("#list .div6 div").css("background","url(../imgs/little/left_lm.png) no-repeat 0px -267px ")
	}).mouseout(function(){
		$("#list .div6 div").css("background","url(../imgs/little/left_lm_a.png) no-repeat -10px -268px ")
	})
	
	
	
	$(".totnav").mouseenter(function(){
	$("#list").css("display","block")
	})
	$("#list").mouseleave(function(){
		$("#list").css("display","none")
	})
	
	$(function(){
		$.cookie.json=true;
		var _btncon=$.cookie("btncon")
		console.log(_btncon)
		$.getJSON("../data/shuju.json",function(responseData){
			$(responseData).each(function(index,element){
				if(_btncon==element.name){
					//加载详情图片
					data={
						products:responseData[index].xiangqing.imgs
					}
					var html=template("picContent_list",data);
					$(".picContent").append(html);
					
					//商品详情
					data1={
						products:[responseData[index]]
					}
					var html=template("pro_right_det",data1);
					$(".pro_recommend").append(html);
					//动态图标
//					data2={
//						products:responseData[index].minpic
//					}
//					var html=template("minpic_list",data);
//					$(".minpro,minpro1").append(html);
				}
			})
		})
	})
	$(function(){
		window.onload=function(){
			$(".toBuy").delegate(".add,.minus","click",function(){
				var _amount=$(this).parent().parent().find(".amount").val();
				if($(this).is(".add")){
					++_amount;
				}else{
					if(_amount<=1){
						return;
					}else{
						--_amount;
					}
				}
				$(this).parent().parent().find(".amount").val(_amount);
			})
		}
	})
	
})