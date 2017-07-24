$(function(){
	$(function(){
		var html="";
		$.cookie.json=true;
		var _newmsg=$.cookie("newmsg");
		if(!(_newmsg==null)){
			if(_newmsg.length!==0){
				$("#headerId").html("您好！"+_newmsg[0].name+"欢迎您来到鲜果之家网上水果商城 <a href='' id='esc'>[退出]</a>")
			}
		}
		$("#esc").click(function(){
			$.cookie("newmsg","",{expires:-1, path:"/"});
		})
	})
	
$(function(){
	$(window).on("scroll",function(){
		var scTop=$(window).scrollTop();
		if(scTop>135){
			$("#floatHead").css("display","block")
		}else{
			$("#floatHead").css("display","none")
		}
	})
})
	
	
	$(".ul2 li:nth-child(2),.ul2_list").mouseover(function(){
		$(".ul2_list").css({
			"display":"block"
		})
		$(".ul2 li:nth-child(2)").css({
			"border":"1px solid #efefef",
			"border-bottom":"none",
			"background":"white"
		})
		$(".ul2 li:nth-child(2) a").css({
			"color":"#93bf50"
		})
	}).mouseout(function(){
		$(".ul2_list").css({
			"display":"none"
		})
		$(".ul2 li:nth-child(2)").css({
			"border":"none",
			"background":"#f7f7f7"
		})
		$(".ul2 li:nth-child(2) a").css({
			"color":"#999999"
		})
	})
	
	
	
	$(".ul2 li:nth-child(3),.ul3_list").mouseover(function(){
		$(".ul3_list").css({
			"display":"block"
		})
		$(".ul2 li:nth-child(3)").css({
			"border":"1px solid #efefef",
			"border-bottom":"none",
			"background":"white"
		})
		$(".ul2 li:nth-child(3) a").css({
			"color":"#93bf50"
		})
	}).mouseout(function(){
		$(".ul3_list").css({
			"display":"none"
		})
		$(".ul2 li:nth-child(3)").css({
			"border":"none",
			"background":"#f7f7f7"
		})
		$(".ul2 li:nth-child(3) a").css({
			"color":"#999999"
		})
	})
	
	
	$(".ul2 li:nth-child(4),.ul4_list").mouseover(function(){
		$(".ul4_list").css({
			"display":"block"
		})
		$(".ul2 li:nth-child(4)").css({
			"border":"1px solid #efefef",
			"border-bottom":"none",
			"background":"white"
		})
		$(".ul2 li:nth-child(4) a").css({
			"color":"#93bf50"
		})
	}).mouseout(function(){
		$(".ul4_list").css({
			"display":"none"
		})
		$(".ul2 li:nth-child(4)").css({
			"border":"none",
			"background":"#f7f7f7"
		})
		$(".ul2 li:nth-child(4) a").css({
			"color":"#999999"
		})
	})
	
	$(".ul3 li:nth-child(2)").mouseover(function(){
		$(".weixin").css({
			"display":"block"
		})
	}).mouseout(function(){
		$(".weixin").css({
			"display":"none"
		})
	})
	
	
	$("#list .div1,.list1").mouseover(function(){
		$(".list1").css({
			"display":"block"
		})
		$("#list .div1").css({
			"background":"white"
		})
		$("#list .div1 div").css({
			"background":"url(imgs/little/left_lm.png) no-repeat 0px 3px "
		})
		$("#list .div1 a").css({
			"color":"#76ac25"
		})
	}).mouseout(function(){
		$(".list1").css({
			"display":"none"
		})
		$("#list .div1").css({
			"background":"#76ac25"
		})
		$("#list .div1 div").css({
			"background":"url(imgs/little/left_lm_a.png) no-repeat -10px 3px "
		})
		$("#list .div1 a").css({
			"color":"white"
		})
	})
	
	$("#list .div2,.list2").mouseover(function(){
		$(".list2").css({
			"display":"block"
		})
		$("#list .div2").css({
			"background":"white"
		})
		$("#list .div2 div").css({
			"background":"url(imgs/little/left_lm.png) no-repeat 0px -51px "
		})
		$("#list .div2 a").css({
			"color":"#76ac25"
		})
	}).mouseout(function(){
		$(".list2").css({
			"display":"none"
		})
		$("#list .div2").css({
			"background":"#76ac25"
		})
		$("#list .div2 div").css({
			"background":"url(imgs/little/left_lm_a.png) no-repeat -10px -106px "
		})
		$("#list .div2 a").css({
			"color":"white"
		})
	})
	
	$("#list .div3,.list3").mouseover(function(){
		$(".list3").css({
			"display":"block"
		})
		$("#list .div3").css({
			"background":"white"
		})
		$("#list .div3 div").css({
			"background":"url(imgs/little/left_lm.png) no-repeat 0px -105px "
		})
		$("#list .div3 a").css({
			"color":"#76ac25"
		})
	}).mouseout(function(){
		$(".list3").css({
			"display":"none"
		})
		$("#list .div3").css({
			"background":"#76ac25"
		})
		$("#list .div3 div").css({
			"background":"url(imgs/little/left_lm_a.png) no-repeat -10px -159px "
		})
		$("#list .div3 a").css({
			"color":"white"
		})
	})
	
	
	
	$("#list .div4,.list4").mouseover(function(){
		$(".list4").css({
			"display":"block"
		})
		$("#list .div4").css({
			"background":"white"
		})
		$("#list .div4 div").css({
			"background":"url(imgs/little/left_lm.png) no-repeat 0px -159px "
		})
		$("#list .div4 a").css({
			"color":"#76ac25"
		})
	}).mouseout(function(){
		$(".list4").css({
			"display":"none"
		})
		$("#list .div4").css({
			"background":"#76ac25"
		})
		$("#list .div4 div").css({
			"background":"url(imgs/little/left_lm_a.png) no-repeat -10px -214px "
		})
		$("#list .div4 a").css({
			"color":"white"
		})
	})
	
	$("#list .div5,.list5").mouseover(function(){
		$(".list5").css({
			"display":"block"
		})
		$("#list .div5").css({
			"background":"white"
		})
		$("#list .div5 div").css({
			"background":"url(imgs/little/left_lm.png) no-repeat 0px -215px "
		})
		$("#list .div5 a").css({
			"color":"#76ac25"
		})
	}).mouseout(function(){
		$(".list5").css({
			"display":"none"
		})
		$("#list .div5").css({
			"background":"#76ac25"
		})
		$("#list .div5 div").css({
			"background":"url(imgs/little/left_lm_a.png) no-repeat -10px -214px"
		})
		$("#list .div5 a").css({
			"color":"white"
		})
	})
	
	$("#list .div6,.list6").mouseover(function(){
		$(".list6").css({
			"display":"block"
		})
		$("#list .div6").css({
			"background":"white"
		})
		$("#list .div6 div").css({
			"background":"url(imgs/little/left_lm.png) no-repeat 0px -267px "
		})
		$("#list .div6 a").css({
			"color":"#76ac25"
		})
	}).mouseout(function(){
		$(".list6").css({
			"display":"none"
		})
		$("#list .div6").css({
			"background":"#76ac25"
		})
		$("#list .div6 div").css({
			"background":"url(imgs/little/left_lm_a.png) no-repeat -10px -268px "
		})
		$("#list .div6 a").css({
			"color":"white"
		})
	})
	
	//
	$('#macart,#num').click(function(){
		$.cookie.json=true;
		var _newmsg=$.cookie("newmsg");
		var get_cart_xgzj=$.cookie("cart_xgzj");
		if(_newmsg==null){
			location="html/login.html"
		}else{
			location="http://127.0.0.1:8020/xianguozhijia_徐春鹏/html/buy.html"
		}
	})
	//
	$('.cart').mouseenter(function(){
		$(function(){
			//购物车读取数据
			$.cookie.json=true;
			var get_cart_xgzj=$.cookie("cart_xgzj");
			if(get_cart_xgzj==null||get_cart_xgzj.length==0){
				$(".null").css({
					"display":"block"
				})
				$(".cart_product").css({
					"display":"none"
				})
				$(".cart_foot").css({
					"display":"none"
				})	
			}else{
				$(".null").css({
					"display":"none"
				})
				$(".cart_foot").css({
					"display":"block"
				})
				$(".cart_product").css({
					"display":"block"
				})
			}
			var totile=0;
			$(get_cart_xgzj).each(function(index,element){
				var data={
					products:[
						{
							name:element.name,
							exp:element.exp,
							img_src:element.img_src,
							price:element.price,
							amount:element.amount
						}
					]
				}
				var  html=template("cart_list_product",data);
				$(".cart_product_box").append(html);
				totile+=data.products[0].price*data.products[0].amount
				$(".cart_foot_num").text(get_cart_xgzj.length);
			})
			$(".cart_foot_totile").text(totile.toFixed(2));
			
		})
	}).mouseleave(function(){
		$(".cart_product_box").html("")
	})
	
	function toCart(e){
		e.stopPropagation();
		var _name=$(this).parent().find(".name").text();
		var _exp=$(this).parent().find(".exp").eq(0).text();
		var _img_src=$(this).parent().find(".img_src").attr("src");
		var _newprice=$(this).parent().find(".newprice").text();
		var _amount=$(this).parent().find(".amount").val();
		if(_img_src.charAt(0)=="."){
			_img_src=_img_src.slice(3)
		}
		if(_amount==0){
			_amount=1
		}
		var product={
//			id:id,
			name:_name,
			exp:_exp,
			img_src:_img_src,
			price:_newprice,
			amount:_amount
		}
		$.cookie.json=true;
		var _cart_xgzj=$.cookie("cart_xgzj")||[];
		var index=indexOf(product.name,_cart_xgzj)
		if(index==-1){
			_cart_xgzj.push(product)
		}else{
			_cart_xgzj[index].amount=product.amount+_cart_xgzj[index].amount;
		}
		function indexOf(name,products){
			for(var i=0 ,len=products.length;i<len;i++){
				if(products[i].name==name){
					return i
				}
			}
			return -1;
		}
		$.cookie("cart_xgzj",_cart_xgzj,{expires:7,path:"/"})
		//购物车读取数据
		var get_cart_xgzj=$.cookie("cart_xgzj");
		$("#num").text(get_cart_xgzj.length)
	}
	//购物车添加 ,删除
	$(function(){
			$("body").on("click",".toCart",toCart)
			$.cookie.json=true;
			var get_cart_xgzj=$.cookie("cart_xgzj");
			if(get_cart_xgzj==null){
				$("#num").text(0)
			}else{
				$("#num").text(get_cart_xgzj.length)
			}
			$("body").on("click",".ify_xxx",function(e){
				e.stopPropagation();
				var _btncon=$(this).parent().find(".name").text();
				$.cookie.json=true;
				$.cookie("btncon",_btncon,{expires:7,path:"/"})
				location.reload();
			})
			
			
			$(".cart_product_box").on("click",".cart_del",function(e){
				e.preventDefault();
				$.cookie.json=true;
				var get_cart_xgzj=$.cookie("cart_xgzj");
				var $row=$(this).parents(".cart_product");
				var _name=$row.find(".name").text();
				$(get_cart_xgzj).each(function(index,element){
					if(_name==element.name){
						get_cart_xgzj.splice(index,1)
					}
				})
				$(".cart_product_box").html("")
				$("#num").text(get_cart_xgzj.length)
				$.cookie("cart_xgzj",get_cart_xgzj,{expries:7,path:"/"});
			})
	})
	
	$(function(){
		$(".ify").click(function(e){
			e.preventDefault;
			var _btncon=$(this).text();
			$.cookie.json=true;
			$.cookie("btncon",_btncon,{expires:7,path:"/"})
			location.reload()
		})
	})
	
	$(function(){
		$("productxxx").delegate(".toCart","click", addCart);
		function addCart(event) {
			event.stopPropagation();
			var _img_src=$(this).parent().find(".img_src").attr("src");
			var flyer=document.createElement("img");
			var _img=$(this).parent().find(".img_src");
			var offset=_img.offset()
			flyer.src=_img_src;
			$(flyer).css({
				"width":224,
				"height":220
			})
			var _left=event.clientX;
			var _top=event.clientY-220;
			$(flyer).fly({
			    start: {
			        left: offset.left,
			        top: _top
			    },
			    end: {
			        left: _left,
			        top: _top+220,
			        height:0,
			        width:0
			    }
			})
		}
	})
	
	
})
