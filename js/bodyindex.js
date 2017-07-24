$(function(){
	$(function(){
		var $liarr=$(".banner li");
		var len=$liarr.length;
		var now=0;
		var next=1;
		var timer=null;
		var html="";
		var timer=setInterval(change,2000);
		$(".banner").hover(function(){
			clearInterval(timer)
		},function(){
			timer=setInterval(change,2000)
		})
		for(var i=0;i<len;i++){
			html+="<div>"+(i+1)+"</div>"
		}
		$(html).appendTo("#dot").eq(0).addClass("current");
		$("#dot div").mouseover(function(){
			clearInterval(timer)
			next=$(this).index();
			change();
		})
		function change(){
			$liarr.eq(next).fadeIn(1000).end().eq(now).fadeOut(1000);
			$("#dot div").eq(now).removeClass("current").end().eq(next).addClass("current")
			now=next;
			next++;
			if(next>=len){
				next=0
			}
		}
	})
	//推荐产品recommend
	$(function(){
		var data={
			products:[
				{name:"智利甜心车厘子樱桃J 5斤装",src:"imgs/340_thumb_G_1446071784133.jpg",price:"498.0"},
				{name:"现货 台湾芭乐珍珠番石榴 5斤",exp:"低糖高纤维水果 番石榴新鲜水果",src:"imgs/345_thumb_G_1446072965604.jpg",price:"56.0"},
				{name:"海南蜜宝红心火龙果2.5kg",exp:"蜜宝红心火龙果是非常受欢迎的健康水果",src:"imgs/439_thumb_G_1450081103503.jpg",price:"69.0"},
				{name:"新鲜进口山竹3斤 死竹坏果包赔",exp:"泰国山竹是东南亚热带水果皇后，雪白多",src:"imgs/330_thumb_G_1445911890923.jpg",price:"118.0"},
				{name:"佳沛新西兰鸭嘴金奇异果8粒 ",src:"imgs/336_thumb_G_1446003094375.jpg",price:"96.0"},
				{name:"新西兰进口佳沛阳光金奇异果",src:"imgs/337_thumb_G_1446003251028.jpg",price:"148.0"},
				{name:"新西兰佳沛绿奇异果16粒",exp:"新鲜猕猴桃 进口水果",src:"imgs/338_thumb_G_1446003366236.jpg",price:"139.0"},
				{name:"陕西翠香甜心猕猴桃2kg原箱",exp:"陕西翠香猕猴桃果园现摘现发， 无激素",src:"imgs/449_thumb_G_1450245595331.jpg",price:"79.0"}
			]
		}
		var html=template("recommend_template",data);
		$(".products").append(html);
	})
	$(function(){
		var data={
			right:[
				{
				src:"imgs/1416530759821165353.jpg",
				new1:"鲜果之家水果礼品卡启用新卡通知",
				new2:"强冷空气来袭 水果暂停发货的通知",
				new3:"秋季5种水果最养人秋季5种水果最养人",
				new4:"看看你的身体需要吃什么水果？",
				new5:"橙子缓解咳嗽 冬季养生必吃7大水",
				new6:"盘点20种全球奇异水果 打动多少",
				new7:"秋冬太凉怎么吃水果？教你水果的新...",
				new8:"水果烂了能食用吗 水果如何保存才...",
				new9:"4大水果的特殊功效 女性冬季吃水...",
				new10:"吃水果的“四不”原则 你做到了吗..."
				}
			]
		}
		var html=template("recommend_right",data);
		$(".pro_right").append(html);
	})
	//进口水果import
	$(function(){
		var data={
			products:[
				{src:"imgs/649_thumb_G_1496303378417.jpg",name:"澳大利亚无籽红提2斤装 澳洲提子葡萄",newprice:"46.0",oldprice:"73.60"},
				{src:"imgs/646_thumb_G_1496302616526.jpg",name:"澳洲金手指无籽黑提2斤 新鲜黑手指美人",newprice:"109.0",oldprice:"174.40"},
				{src:"imgs/642_thumb_G_1496217574046.jpg",name:"Yummy新西兰Ambrosia苹果8个150g以",newprice:"88.0",oldprice:"140.80"},
				{src:"imgs/641_thumb_G_1496217343962.jpg",name:"新西兰Jazz爵士苹果8个140g以上/个 新",newprice:"69.0",oldprice:"11.84"},
				{src:"imgs/640_thumb_G_1496217023822.jpg",name:"Appolonia波兰Gala嘎啦果8个约135g/个 ",newprice:"49.0",oldprice:"79.4"},
				{src:"imgs/638_thumb_G_1496216356533.jpg",name:"美国华盛顿品纳塔苹果8个约220g/个 美",newprice:"79.0",oldprice:"126.4"},
				{src:"imgs/637_thumb_G_1496216137838.jpg",name:"智利嘎啦果8个115g以上/个 智利进口水",newprice:"49.0",oldprice:"78.4"},
				{src:"imgs/636_thumb_G_1496215746448.jpg",name:"MrApple新西兰皇家嘎啦果8个 新西兰进",newprice:"46.0",oldprice:"73.6"},
			]
		}
		var html=template("import_pro",data);
		$(".imp_product").append(html);
	})
	$(function(){
		var data={
			products:[
				{src1:"imgs/little/improt-1.gif",src2:"imgs/1452326120976397741.jpg"}
			]
		}
		var html=template("import_left",data);
		$(".imp_left").append(html);
	})
	//国产水果china
	$(function(){
		var data={
			products:[
				{src1:"imgs/little/china-1.gif",src2:"imgs/1416855525072158827.jpg"}
			]
		}
		var html=template("china_left",data);
		$(".cha_left").append(html);
	})
	$(function(){
		var data={
			products:[
				{src:"imgs/659_thumb_G_1496565181222.jpg",name:"广西黑皮甘蔗5斤装 现砍甘蔗清甜多汁",newprice:"67.0",oldprice:"107.20"},
				{src:"imgs/658_thumb_G_1496563303156.jpg",name:"天津玫瑰香葡萄2斤装",newprice:"49.0",oldprice:"78.40"},
				{src:"imgs/657_thumb_G_1496563032129.jpg",name:"北京平谷早露蟠桃2斤装 北京特色地标水",newprice:"59.0",oldprice:"94.40"},
				{src:"imgs/656_thumb_G_1496562725556.jpg",name:"河南白蜜脆瓜5斤装 约3-4个 河南原产地",newprice:"49.0",oldprice:"78.40"},
				{src:"imgs/655_thumb_G_1496306523453.jpg",name:"山东特级美早大樱桃3斤",newprice:"173.0",oldprice:"286.40"},
				{src:"imgs/654_thumb_G_1496306267998.jpg",name:"河北维多利亚葡萄2斤装",newprice:"45.0",oldprice:"72.00"},
				{src:"imgs/653_thumb_G_1496306110903.jpg",name:"福建漳州白心芭乐5斤装",newprice:"49.0",oldprice:"78.40"},
				{src:"imgs/652_thumb_G_1496305874849.jpg",name:"陕西特产阎良甜瓜2个装 阎良香瓜脆瓜哈",newprice:"49.8",oldprice:"79.68"},
			]
		}
		var html=template("china_pro",data);
		$(".cha_product").append(html);
	})
	//水果礼盒
	$(function(){
		var data={
			products:[
				{src1:"imgs/little/gift-1.gif",src2:"imgs/1416857143577228903.jpg"}
			]
		}
		var html=template("gift_left",data);
		$(".gi_left").append(html);
	})
	$(function(){
		var data={
			products:[
				{src:"imgs/391_thumb_G_1447919467445.jpg",name:"欢乐果园10合1水果礼盒C",newprice:"368.0",oldprice:"441.59"},
				{src:"imgs/390_thumb_G_1447919130535.jpg",name:"欢乐果园6合1水果礼盒A",newprice:"288.0",oldprice:"345.59"},
				{src:"imgs/378_thumb_G_1446082106474.jpg",name:"健康之礼 樱桃 石榴 红蛇果 木瓜礼盒装",newprice:"188.0",oldprice:"300.80"},
				{src:"imgs/377_thumb_G_1446082040994.jpg",name:"五羊献瑞报丰年 新年送礼佳品",newprice:"188.0",oldprice:"225.60"},
				{src:"imgs/376_thumb_G_1446081954019.jpg",name:"阖家欢乐水果礼盒包装",newprice:"198.0",oldprice:"316.80"},
				{src:"imgs/375_thumb_G_1446081826946.jpg",name:"水果礼盒 自由组合 随意搭配",newprice:"168.0",oldprice:"268.80"},
				
			]
		}
		var html=template("gift_pro",data);
		$(".gi_product").append(html);
	})
	//水果礼品卡
	$(function(){
		var data={
			products:[
				{src1:"imgs/little/coupon-1.gif",src2:"imgs/1416783269946371731.jpg"}
			]
		}
		var html=template("coupon_left",data);
		$(".cou_left").append(html);
	})
	$(function(){
		var data={
			products:[
				{src:"imgs/524_thumb_G_1479197987858.jpg",name:"【2017年新卡】鲜果之家水果礼品券",newprice:"288.0",oldprice:"288.00"},
				{src:"imgs/523_thumb_G_1479197936966.jpg",name:"【新卡】鲜果之家￥1000元水果礼品卡",newprice:"1000.0",oldprice:"1000.00"},
				{src:"imgs/522_thumb_G_1479197902087.jpg",name:"【新卡】鲜果之家￥500元水果礼品卡",newprice:"500.0",oldprice:"500.00"},
				{src:"imgs/521_thumb_G_1479197311118.jpg",name:"【新卡】鲜果之家￥300元水果礼品卡",newprice:"300.0",oldprice:"300.00"},
				{src:"imgs/519_thumb_G_1479196969023.jpg",name:"【新卡】鲜果之家￥200元水果礼品卡",newprice:"200.0",oldprice:"320.00"},
				{src:"imgs/518_thumb_G_1479196319928.jpg",name:"【新卡】鲜果之家￥100元水果礼品卡",newprice:"100.0",oldprice:"100.00"},
				{src:"imgs/399_thumb_G_1449034228417.jpg",name:"鲜果之家水果礼品卡￥1000",newprice:"1000.0",oldprice:"1000.00"},
				{src:"imgs/398_thumb_G_1449034212709.jpg",name:"鲜果之家水果礼品卡￥500",newprice:"500.0",oldprice:"500.00"}
			]
		}
		var html=template("coupon_pro",data);
		$(".cou_product").append(html);
	})
	//美味零食
	$(function(){
		var data={
			products:[
				{src1:"imgs/little/sock-1.gif",src2:"imgs/1416858330694503494.jpg"}
			]
		}
		var html=template("sock_left",data);
		$(".sk_left").append(html);
	})
	$(function(){
		var data={
			products:[
				{src:"imgs/466_thumb_G_1450423681610.jpg",name:"漳浦杜浔酥糖 麦芽花生糖麻香400克",newprice:"18.8",oldprice:"30.08"},
				{src:"imgs/465_thumb_G_1450421702504.jpg",name:"旺亿软心香酥饼1盒20个",newprice:"39.9",oldprice:"63.84"},
				{src:"imgs/387_thumb_G_1447829202460.jpg",name:"可可西里的诱惑",newprice:"168.0",oldprice:"249.00"},
				{src:"imgs/386_thumb_G_1447826744710.jpg",name:"雪国浪漫",newprice:"168.0",oldprice:"219.00"},
				{src:"imgs/385_thumb_G_1447826053027.jpg",name:"香草芝士慕斯",newprice:"168.0",oldprice:"201.60"},
				{src:"imgs/374_thumb_G_1446081079321.jpg",name:"新疆特产阿克苏薄皮核桃纸皮孕妇大核桃",newprice:"35.9",oldprice:"57.44"},
				{src:"imgs/373_thumb_G_1446080979606.jpg",name:"福建莆田特产特级干货正宗桂圆干 龙眼肉",newprice:"35.9",oldprice:"57.44"},
				{src:"imgs/372_thumb_G_1446080902800.jpg",name:"新疆特产特级坚果特级大粒原色盐焗开心",newprice:"29.9",oldprice:"47.84"}
			]
		}
		var html=template("sock_pro",data);
		$(".sk_product").append(html);
	})
	//农特产品
	$(function(){
		var data={
			products:[
				{src1:"imgs/little/vegetable-1.gif",src2:"imgs/1416864122450155768.jpg"}
			]
		}
		var html=template("vegetable_left",data);
		$(".veg_left").append(html);
	})
	$(function(){
		var data={
			products:[
				{src:"imgs/409_thumb_G_1449472783665.jpg/",name:"古田新鲜银耳 新鲜白木耳带菌棒鲜活银耳",newprice:"49.0",oldprice:"78.40"},
				{src:"imgs/402_thumb_G_1449278474072.jpg/",name:"农家自产野生桂花蜂蜜1000g",newprice:"120.0",oldprice:"192.00"},
				{src:"imgs/401_thumb_G_1449042973373.jpg/",name:"建宁莲子 通芯 无芯 白莲子 易煮烂干货 ",newprice:"39.87",oldprice:"63.68"},
				{src:"imgs/400_thumb_G_1449042344362.jpg/",name:"古田银耳无硫银耳白木耳 干货 250g(6-8",newprice:"48.9",oldprice:"78.24"},
				{src:"imgs/395_thumb_G_1448869482472.jpg/",name:"特级竹荪干货天然无硫肉100g",newprice:"46.0",oldprice:"73.60"},
				{src:"imgs/393_thumb_G_1448182701812.jpg/",name:"清香特级铁观音茶叶 抢新兰若铁观音",newprice:"98.0",oldprice:"156.00"},
				{src:"imgs/392_thumb_G_1448177627747.jpg/",name:"新鲜橘园散养土鸡蛋20枚",newprice:"59.0",oldprice:"94.40"},
				{src:"imgs/384_thumb_G_1447744853183.jpg/",name:"古田特级香菇干货200g",newprice:"43.0",oldprice:"68.80"}
			]
		}
		var html=template("vegetable_pro",data);
		$(".veg_product").append(html);
	})
	$(function(){
		var floorTop=$(".floor").offset().top;
		var widHeight=$(window).height();
		var nowFloorIndex=0;
		var isMoving=false;
		$(window).on("scroll",function(){
			if(!isMoving){
				var scTop=$(window).scrollTop();
				if(scTop>500){
					$("#menu").stop().fadeIn();
				}else{
					$("#menu").stop().fadeOut();
				}
				$(".floor").each(function(index,element){
					isMoving=false;
					var _top=$(element).offset().top;
					if(scTop>_top-widHeight/2){
						$("#menu li").eq(index).children("span").show()
						.end().siblings().children("span").hide();
						nowFloorIndex=index;
					}
				})
			}
			$("#menu li:not(:last)").click(function(){
				isMoving=true;
				var floorIndex=$(this).index();
				var _top=$(".floor").eq(floorIndex).offset().top;
				$("html,body").stop().animate({scrollTop:_top},1000,function(){
					isMoving=false;
					$("#menu li").eq(floorIndex).children("span").show()
							.end().siblings().children("span").hide();
				})
				
			})
			.hover(function(){
				$(this).children("span").show()
			},function(){
				if(nowFloorIndex!==$(this).index()){
					$(this).children("span").hide()
				}
			})
			$("#menu li:last").click(function(){
				$(window).scrollTop(0)
			})
		})
	})
})
