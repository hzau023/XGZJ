
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
//	console.log("11111")
	})
	$("#list").mouseleave(function(){
		$("#list").css("display","none")
	})
	
	//动态获取数据，加载页面
	$(function(){
		$.cookie.json=true;
		var _btncon=$.cookie("btncon")
		$(".pro_name_list").text(_btncon)
		var len=0;
		$.getJSON("../data/shuju.json",function(responseData){
			$(responseData).each(function(index,element){
				if(element.mixclass==_btncon||element.minclass==_btncon){
					data={
						products:[responseData[index]]
					}
					len+=data.products.length
					var html=template("list_products_template",data);
					$(".listProducts").append(html);
				}
			})
			$(".tot_pro").text(len)
		})
	})
	//加减
	$(function(){
			$(".listProducts").delegate(".add,.minus","click",function(){
				var $row=$(this).parents(".list_product");
				var _amount=$row.find(".amount").val()
				if($(this).is(".add")){
					++_amount;
				}else{
					if(_amount<=1){
						return;
					}else{
						--_amount;
					}
				}
				$row.find(".amount").val(_amount)
			})
		
	})
	
	
	
	
})
