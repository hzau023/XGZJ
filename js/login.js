$(function(){
	$("#log_btn").click(function(){
		var log_name=$("#log_name").val(),
			log_pd=$("#log_pd").val(),
			html="",
			index=null;
		$.cookie.json=true;
		var _msg=$.cookie("msg");
		if(!(_msg==null)){
			for(var i=0,len=_msg.length;i<len;i++){
				if(_msg[i].name==log_name){
					index=i;
				}
			}
		}
		if(index==null){
			alert("用户名不存在")
		}else{
			if(_msg[index].password==log_pd){
				var newprod={
					name:_msg[index].name,
					email:_msg[index].email,
					password:_msg[index].pd,
					phone:_msg[index].phone
				}
				$.cookie.json=true;
				var _newmsg=[];
				_newmsg.push(newprod);
				$.cookie("newmsg",_newmsg,{expires:7, path:"/"})
				$("#log_name").val(null);
				$("#log_pd").val(null);
				location="../index.html"
			}else{
				$("#log_name").val(null);
				$("#log_pd").val(null);
				alert("密码错误,请重新输入")
			}
		}
		
	})
	
})
