$(function(){
	function bindProvince(data){
		var province=data.showapi_res_body.data
		var html="";
		province.forEach(function(province){
			html+="<option value="+province.id+">"+province.areaName+"</option>"
		});
		$("#province").append(html)
	}
	$.getJSON("http://route.showapi.com/1149-1?showapi_appid=29550&showapi_sign=e48f5d7e50334ffca41693016df78054&level=1",function(data){
			bindProvince(data)
			$.getJSON("http://route.showapi.com/1149-1?showapi_appid=29550&showapi_sign=e48f5d7e50334ffca41693016df78054&level=1&page=2",function(data){
				bindProvince(data);
				bindCity();
			});
	})
	
	function bindCity(){
		var _id=$("#province").val();
		function city(data){
			var city=data.showapi_res_body.data;
			var html="";
			city.forEach(function(city){
				html+="<option value="+city.id+">"+city.areaName+"</option>"
			})
			$("#city").empty().append(html)
		}
		$.getJSON("http://route.showapi.com/1149-2?showapi_appid=29550&showapi_sign=e48f5d7e50334ffca41693016df78054&parentId="+_id,function(data){
			city(data)
			$.getJSON("http://route.showapi.com/1149-2?showapi_appid=29550&showapi_sign=e48f5d7e50334ffca41693016df78054&page=2&parentId="+_id,function(data){
				city(data);
			})
		})
	}
	
	//缓存收货地址
	$(".ads_sure").click(function(){
		var _country=$("#country").text();
		var _province="";
		var _city="";
		$("#city option").each(function(index,element){
			if($("#city").val()==$(element).val()){
				_city=$(element).text();
			}
		})
		$("#province option").each(function(index,element){
			if($("#province").val()==$(element).val()){
				_province=$(element).text();
			}
		})
		var _buyer=$("#buyer").val()
		var _youjian=$("#youjian").val()
		var _dizi=$("#dizi").val()
		var _youbian=$("#youbian").val()
		var _dianhua=$("#dianhua").val()
		var _phone=$("#phone").val()
		var _dibiao=$("#dibiao").val()
		var _shijian=$("#shijian").val()
		var _ads_cookie_xgzj=[];
		var ads={
			country:_country,
			province:_province,
			city:_city,
			buyer:_buyer,
			youjian:_youjian,
			dizi:_dizi,
			youbian:_youbian,
			dianhua:_dianhua,
			phone:_phone,
			dibiao:_dibiao,
			shijian:_shijian
		}
		_ads_cookie_xgzj.push(ads);
		console.log(_ads_cookie_xgzj)
		$.cookie.json=true;
		$.cookie("ads_cookie_xgzj",_ads_cookie_xgzj,{expires:7,path:"/"});
	})
	
})
