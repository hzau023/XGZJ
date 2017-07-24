$(function(){
	$(function(){
		//购物车读取数据
		var get_cart_xgzj=$.cookie("cart_xgzj");
		if(get_cart_xgzj==null||get_cart_xgzj.length==0){
			alert("您还未添加商品")
			location="../index.html"
		}else{
			$(".product_num").text(get_cart_xgzj.length);
			var totmon=0;
			$(get_cart_xgzj).each(function(index,element){
				var data={
					products:[
						{
							name:element.name,
							exp:element.exp,
							img_src:element.img_src,
							price:element.price,
							amount:element.amount,
							litot:(element.amount*element.price).toFixed(0)
						}
					]
				}
				var  html=template("buy_products",data);
				$(".buy_sure").append(html);
				totmon+=data.products[0].price*data.products[0].amount
			})
			var _totmon=totmon.toFixed(2)
			$(".totilemon").text(_totmon);
			//数量输入
			$(".buy_productbox").on("blur",".amount",function(){
				var $row=$(this).parents(".buy_product_list");
				var _amount=$row.find(".amount").val();
				
				
				var _name=$row.find(".name").text();
				$(get_cart_xgzj).each(function(index,element){
					if(_name==element.name){
						element.amount=_amount;
					}
				})
				$row.find(".amount").val(_amount)
				$row.find(".sub").text(_amount*$row.find(".price").text());
				calcTotal();
				$.cookie("cart_xgzj",get_cart_xgzj,{expries:7,path:"/"})
	//			_product.amount=$(this).val();
	//			$row.children(".sub").text(_product.amount*_product.price);
	//			calcTotal();
	//			$.cookie("products",_products,{expries:7})
			})
			//数量加减
			$(".buy_productbox").delegate(".add,.minus","click",function(){
				var $row=$(this).parents(".buy_product_list");
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
				$row.find(".sub").text(_amount*$row.find(".price").text());
				var _name=$row.find(".name").text()
				$(get_cart_xgzj).each(function(index,element){
					if(_name==element.name){
						element.amount=_amount;
					}
				})
				calcTotal();
				$.cookie("cart_xgzj",get_cart_xgzj,{expries:7,path:"/"})
			})
			
			//合计函数
			function calcTotal(){
				var _total=0;
				$(".buy_product_list input:checked").each(function(index,element){
					_total+=Number($(element).parents(".buy_product_list").find(".sub").text());
				})
				$(".totilemon").text(_total.toFixed(2));
			}
			// 勾选
			$("#ck_all").click(function(){
				var status=$(this).prop("checked");
				$(".ck_product").prop("checked",status)
				calcTotal();
			})
			$(".ck_product").click(function(){
				var status=$(this).prop("checked");
				if(status==true){
					calcTotal();
				}else{
					calcTotal();
				}
				
				if($(".ck_product:checked").length==get_cart_xgzj.length){
					$("#ck_all").prop("checked",true);
				}else{
					$("#ck_all").prop("checked",false);
				}
			})
			//删除
			$(".buy_productbox").on("click",".del",function(e){
				e.preventDefault();
				var $row=$(this).parents(".buy_product_list");
				var _name=$row.find(".name").text();
				$(get_cart_xgzj).each(function(index,element){
					if(_name==element.name){
						get_cart_xgzj.splice(index,1)
					}
				})
				$row.remove();
				$.cookie("cart_xgzj",get_cart_xgzj,{expries:7,path:"/"});
				if(get_cart_xgzj.length==0){
					location="../index.html"
					return;
				}
			})
			//删除全部
			$(".buy_productbox").on("click",".del_all",function(e){
				e.preventDefault();
				$(".buy_product_list").remove();
				get_cart_xgzj=[]
				$.cookie("cart_xgzj",get_cart_xgzj,{expries:7,path:"/"});
				if(get_cart_xgzj.length==0){
					location="../index.html"
					return;
				}
			})
			//删除选定
			$(".buy_productbox").on("click",".del_check",function(e){
				e.preventDefault();
				$(".buy_product_list input:checked").each(function(index,element){
					var $row=$(this).parents(".buy_product_list");
					var status=$(this).prop("checked");
					if(status==true){
						$row.remove();
						var _name=$row.find(".name").text();
						$(get_cart_xgzj).each(function(index,element){
							if(_name==element.name){
								get_cart_xgzj.splice(index,1)
							}
						})
						$.cookie("cart_xgzj",get_cart_xgzj,{expries:7,path:"/"});
					}
				})
			})
		}
	})
})
