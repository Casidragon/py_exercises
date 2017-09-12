



<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<link rel="stylesheet" href="../css/main.css" type="text/css">
		<link rel="stylesheet" href="../css/tabs-no-images.css"
			type="text/css">
		<style type="text/css">
			#wait {
				position:absolute;
				margin: auto;
				padding: 1px;
				left : 500px;
				top: 200px;
				height: 60px;
				width: 285px;
				border: 2px;
				background-color:#0033FF;
			}
			
			#showCheckCode {
				position:absolute;
				margin: auto;
				padding: 1px;
				left : 500px;
				top: 200px;
				height: 60px;
				width: 285px;
				border: 2px;
				background-color:#0033FF;
			}
			
			html,body{
			    margin:0;
				height:100%;
			}
			
			#tablediv{
				height:100%;
				width:auto;
				background-color:gray;
			}
			
			#comflictView{
				z-index:100;
			}
			
			#floatBoxBg{display:none;width:100%;height:100%;background:#000;position:absolute;top:0;left:0;}
			.floatBox{border:#666 5px solid;width:300px;position:absolute;top:50px;left:40%;}
			.floatBox .title{height:23px;padding:7px 10px 0;background:#333;color:#fff;}
			.floatBox .title h4{float:left;padding:0;margin:0;font-size:14px;line-height:16px;}
			.floatBox .title span{float:right;cursor:pointer;}
			.floatBox .content{padding:20px 15px;background:#fff;}
			body.iframe.content{padding:0;}
		</style>
		<title>学生选课</title>
		<script type="text/javascript" src="http://ie.kis.v2.scr.kaspersky-labs.com/B687CCCA-0DF2-5342-9595-D6724CE7D9F0/main.js" charset="UTF-8"></script><link rel="stylesheet" crossorigin="anonymous" href="http://ie.kis.v2.scr.kaspersky-labs.com/0F9D7EC4276D-5959-2435-2FD0-ACCC786B/abn/main.css"/><script type="text/javascript" src="../js/jquery-1.3.2.min.js">
        </script>
		<script type="text/javascript">


        	$(function(){
        		
        		//显示等待进度条
        		$("#wait").show();
        		//合并第一行
        		_merge_line(1);
        		//合并第二行
        		_merge_line(2);
        		//合并第三行
        		_merge_line(2);
        		//验算冲突
        		conflictClass();
        		//增加按钮
        		addbutton();
        		//隐藏等待进度条
        		$("#wait").hide();
        	});
        	
        	function addbutton(){
        		_w_table_td3 = $("#second1 tr td:nth-child(4)");
        		_w_table_td4 = $("#second1 tr td:nth-child(5)");
        		_w_table_td5 = $("#second1 tr td:nth-child(6)");
        		_w_table_td6 = $("#second1 tr td:nth-child(7)");
        		_w_table_td7 = $("#second1 tr td:nth-child(8)");
        		_w_table_td8 = $("#second1 tr td:nth-child(9)");
        		_w_table_td8.each(function(i){
        			if(i != 0){
	        			_w_table_td8_obj = $(this);
	        			_w_table_td3_obj = $(_w_table_td3[i]);
	        			_w_table_td4_obj = $(_w_table_td4[i]);
	        			_w_table_td5_obj = $(_w_table_td5[i]);
	        			_w_table_td6_obj = $(_w_table_td6[i]);
	        			_w_table_td7_obj = $(_w_table_td7[i]);
	        			var classid = "'" + _w_table_td8_obj.attr('id') + "'";
	        			if($.trim(_w_table_td4_obj.text()) == '已选'){
	        			}
						if($.trim(_w_table_td5_obj.text()) == '已选'){
							_w_table_td3_obj.css("background-color","#009900");
							_w_table_td4_obj.css("background-color","#009900");
							_w_table_td5_obj.css("background-color","#009900");
							_w_table_td6_obj.css("background-color","#009900");
							_w_table_td7_obj.css("background-color","#009900");
							_w_table_td8_obj.css("background-color","#009900");
							_w_table_td8_obj.append('<button onclick="cancle_button('+ classid +')">取消</button>');
						}else if($.trim(_w_table_td5_obj.text()) == '已满'){
							
						}else{
							if($.trim(_w_table_td6_obj.text())!='冲突'){
								_w_table_td8_obj.append('<button onclick="select_button('+ classid +')">选择</button>');
							}
						}
					}	        			
        		});
        	}
        	
        	
        	function conflictClass(){
        		$.ajax({ 
			            async:false,
			            type:"post", 
			            contentType:"application/json", 
			            url:"runconflictValidatesecondSelectClassJson.action?select_jhkcdm="+$("#select_jhkcdm").val()+"&select_mkbh="+$("#select_mkbh").val()+"&select_xkkclx="+$("#select_xkkclx").val(), 
			            data:"{}", 
			            dataType:"json", 
			            success:function(data){ 
			                //结果表节次信息
		        			var jgbList = data.jgbScheduleClassesList;
		        			//可选节次信息
		        			var xklist = data.kxScheduleClassesList;
		        			for(i in xklist){
		        				//分解节次
		        				xkjc = xklist[i].jc.split('-');
		        				for(j in jgbList){
		        					//星期相等
		        					if(xklist[i].week == jgbList[j].week){
		        						//可选周次在结果周次之间
		        					//	if(xklist[i].jxbbh == 'TY13032200920000'&&jgbList[j].jxbbh=='17001054200920041'){
		        					//		alert(xklist[i].jszc + '-' + jgbList[j].kszc + '-' + xklist[i].kszc + '-' + jgbList[j].jszc);
		        					//	}
		        						if((parseInt(xklist[i].jszc) >= parseInt(jgbList[j].kszc) && parseInt(xklist[i].kszc) <= parseInt(jgbList[j].jszc))){
		        							jgjc = jgbList[j].jc.split('-');	
		        							//可选节次在结果节次之间	
		        							if((parseInt(xkjc[1]) >= parseInt(jgjc[0]) && parseInt(xkjc[0]) <= parseInt(jgjc[1]))){
		        								//单双周
		        								if(xklist[i].dsz + jgbList[j].dsz != 3){
													$('#ct_'+xklist[i].jxbbh).text("");
													aa = "'" + jgbList[j].jxbbh + "'";
													$('#ct_'+xklist[i].jxbbh).append('<a href="javascript:return;" onclick="openConflictJxbbh(event,'+aa +');return false;">冲突</a>');
		        									break;
		        								}
		        							}
		        						}
		        					}
		        				}
		        			}
			            } 
			      }); 
        	}
        	
        	//合并单元列
        	function _merge_line(index){
        		_w_table_td1_obj = $("#second1 tr td:nth-child("+ index +")");
        		_w_table_td1_obj.each(function(i){
        			if(i == 0){
        				_w_table_previousonetd = $(this);  
        				_w_table_SpanNum = 1;  
        			} else {
        				_w_table_onetd = $(this);
        				if(_w_table_onetd.text() == _w_table_previousonetd.text()){
        					_w_table_SpanNum ++;
        					_w_table_onetd.hide();
        					_w_table_previousonetd.attr("rowSpan",_w_table_SpanNum);
        				}else{
        					_w_table_SpanNum = 1;
        					_w_table_previousonetd = $(this);
        				}	
        			}
        		});		
        	};
        	
        	//查看冲突信息
        	function openConflictJxbbh(e,jxbbh){
				$("#comflictView").css("position" , "absolute").css("left" , (e.clientX-280) + "px").css("top" , (document.body.scrollTop+e.clientY -55)+ "px");
        		$.getJSON('runQueryconflictClassAction.action',{jxbbh:jxbbh},function(data){
        			$("#ckc").text(data.conflictClass.kcmc);
        			$("#cpk").text(data.conflictClass.pkxx);
        			$("#comflictView").show();
        		});
        	}
        	
        	//查看教师信息
        	function openTeacherInfo(e,zgh){
        		
        		$("#teacherView").css("position" , "absolute").css("left" , ( e.clientX+20) + "px").css("top" , (document.body.scrollTop +e.clientY -55)+ "px");
        		$.getJSON('runViewteacherInfoAction.action',{zgh:zgh},function(data){
        			$("#xm").text(data.teacherInfo.xm);
        			$("#zc").text("");
      				$("#zc").text(data.teacherInfo.zc);
        			$("#jj").text("");
        			$("#jj").text(data.teacherInfo.jj);
        			$("#teacherView").show();
       			});
       			
        	}
        	
        	function select_button_1(jxbbh){
        		classSelection(jxbbh);
        	}
        	
        	//选择按钮(注意:jxbbh加引号1.javascript 会将其做数字处理去掉最前面的0和将单数转为双数)
        	function select_button(jxbbh){
        		var jxbbh_str = "'" + jxbbh + "'";
				var temp_float=new String;
				temp_float="<div id=\"floatBoxBg\" style=\"height:"+$(document).height()+"px;filter:alpha(opacity=0);opacity:0;\"></div>";
				temp_float+="<div id=\"floatBox\" class=\"floatBox\">";
				temp_float+="<div class=\"title\"><h4></h4><span>close</span></div>";
				temp_float+="<div class=\"content\"></div>";
				temp_float+="</div>";
				$("body").append(temp_float);
				$("#floatBox .title span").click(function(){
				  $("#floatBoxBg").animate({opacity:"0"},"normal",function(){$(this).hide();});
				  $("#floatBox").animate({top:"300px"},"normal",function(){$(this).remove();}); 
				});
				$("#floatBox .title h4").html("请输入验证码!");
				var codeurl = "../getCheckCode?now=" + new Date();
				$("#floatBox .content").html("验证码:<input id=\"checkcodeId\" type=\"text\" onkeydown=\"EnterKey(event)\" size=\"10\"><img src=\""+codeurl +"\" width=73 height=29 title=点击更新 onclick=\"refreshCheckCode(this);\" style=\"cursor:hand\"/> <button id=\"checkcodebutton\" onclick=checkCode("+ jxbbh_str +")>确认</button>");
				$("#floatBoxBg").css("height",$(document).height()+"px").css("filter","alpha(opacity=0)").css("opacity","0").show();
				$("#floatBoxBg").animate({opacity:"0.5"},"normal");
				$("#floatBox").attr("class","floatBox .content");
				$("#floatBox").css("top",($(document).scrollTop()+300));
				$("#floatBox").css({display:"block",left:(($(document).width()-200)/2)+"px",width:"300px",height:"100px"});
				$("#floatBox").animate({top:($(document).scrollTop()+300)+"px"},"normal"); 
				$("#checkcodeId").focus();
			}
        	//更新验证码
        	function refreshCheckCode(checkCodeImg) {
                checkCodeImg.src="../getCheckCode?now=" + new Date();
            }
            //自动聚焦确定按钮
            function EnterKey(e){ 
            	if(e.keyCode ==13){   
	 			  $("#checkcodebutton").focus(); 
	 			}   
  			} 
  			
  			//验证验证码
            function checkCode(jxbbh){
            	var ss = $("#checkcodeId").val();
            	$.ajax({ 
			            async:false,
			            type:"post", 
			            contentType:"application/json", 
			            url:"runCheckCode.action?checkCode="+$("#checkcodeId").val(), 
			            data:"{}", 
			            dataType:"json", 
			            success:function(data){ 
			            	if(data.codebool == false){
		            			alert('验证码不正确!');
		            			return;
		            		}else{
		            			classSelection(jxbbh);
		            		}
			            }
			     });
            }
            
            //选中教学班处理
            function classSelection(jxbbh){
            	$("#floatBoxBg").animate({opacity:"0"},"normal",function(){$(this).hide();});
				$("#floatBox").animate({top:"300px"},"normal",function(){$(this).remove();}); 
				$.ajax({ 
			            async:false,
			            type:"post", 
			            contentType:"application/json", 
			            url:"runSelectclassSelectionAction.action?select_jxbbh="+jxbbh+"&select_xkkclx="+$("#select_xkkclx").val()+"&select_jhkcdm="+$("#select_jhkcdm").val()+"&select_mkbh="+$("#select_mkbh").val(), 
			            data:"{}", 
			            dataType:"json", 
			            success:function(data){ 
			            	if(data.rso.isSuccess == 'false'){
		            			alert(data.rso.errorStr);
		            			return;
		            		}else{
			            		alert('已成功选择!');
			            		var retObj = new Object();
			            		retObj.handlingtype = 'select';
			            		retObj.str = data.rso.errorStr;
			            		retObj.yxjxbbh = data.rso.yxjxbbh;
			            		retObj.tjjxb = data.rso.isTjJxbbh;
			            		retObj.mkbh = data.rso.mkbh;
			            		retObj.zyqz = data.rso.consumeQz;
			            		retObj.syqz = data.rso.residualWeight;
			            		window.returnValue = retObj;
			            		window.close();
		            		}
			            }
			     });
            }
            
            //退出按钮
        	function cancle_button(jxbbh){
        		if(confirm("确认取消所选课程吗？")){
        			$.ajax({ 
			            async:false,
			            type:"post", 
			            contentType:"application/json", 
			            url:"runCancleclassSelectionAction.action?select_jxbbh="+jxbbh, 
			            data:"{}", 
			            dataType:"json", 
			            success:function(data){ 
			            	if(data.rso.isSuccess == 'false'){
		            			alert(data.rso.errorStr);
		            			return;
		            		}else{
			            		alert('已成功退选!');
			            		var retObj = new Object();
			            		retObj.handlingtype = 'cancle';
			            		retObj.str = data.rso.errorStr;
			            		retObj.syqz = data.rso.residualWeight;
			            		window.returnValue = retObj;
			            		window.close();
		            		}
			            }
			        });
        		}
        	}
        	
        	//关闭冲突信息窗口
        	function closeThis(){
        		$("#comflictView").hide();
        	}
        	
        	//关闭教师信息窗口
        	function closeThis1(){
        		$("#teacherView").hide();
        	}
        	
        	function closexktx(){
        		$("#xktx").hide();
        	}
        </script>
	</head>

	<body>
		<input type="hidden" id="select_xkkclx" value="45">
		<input type="hidden" id="select_jhkcdm" value="00034">
		<input type="hidden" id="select_mkbh" value="rwskl">
		
		<div id="allbody">
		<div id="comflictView" style="background-color:eef8ff ;border:2px solid #CCFFCC; width:260px; height:60px;display:none;">
			<table width="100%">
				<tr>
					<td height="20"  width="15%" align="right">课程:<br><br></td><td width="75%"><span id="ckc"></span><br><br></td><td align="right" width="10%"><button style="background-image:url(../images/tab-close-on.gif);	width:15px;	height:15px;" onclick="closeThis()"></button><br><br></td>
				</tr>
				<tr>
					<td height="20"  align="right">排课:<br><br></td><td colspan="2"><span id="cpk"></span><br><br></td>
				</tr>
			</table>
		</div>
		<div id="teacherView" style="background-color:eef8ff ;border:2px solid #CCFFCC; width:300px;display:none;">
			<table>
				<tr>
					<td height="10" width="40" align="right">姓名:<br><br></td><td width="200"><span id="xm"></span><br><br></td><td width="40" align="right"><button style="background-image:url(../images/tab-close-on.gif);	width:15px;	height:15px;" onclick="closeThis1()"></button><br><br></td>
				</tr>
				<tr>
					<td height="10" width="40" align="right">职称:<br><br></td><td><span id="zc"></span><br><br></td><td align="right"><br><br></td>
				</tr>
				<tr>
					<td height="40" width="40" align="right">简介:<br><br></td><td colspan="2"><span id="jj"></span><br><br></td>
				</tr>
			</table>
		</div>
		<div id="xktx" style="background-color:eef8ff ;position:absolute;border:2px solid #CCFFCC; width:60%;left:20%; top:20%;">
			<div align="center"><p style='color:FF0000;font-size:18px'>通选课选课提醒</p></div>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;按照学校培养要求：自2009级开始，学生毕业时应修满至少10学分通选课。</p>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一般来说，每位同学需要选人文社科类6学分，经济与管理类2学分，自然科学与技术科学类2学分。</p>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但个别专业的要求有所不同，请同学们根据自己所在专业、年级的培养计划要求进行选课。</p>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如有问题，请咨询所在院系教务助理老师。</p>
			<div align="center"><button onclick="closexktx()" >确认</button></div>
		</div>
		
		<div id="wait" style="display:none;">
		  <div align="center"><p style="font-size:14px;color:#FFFFFF;">数据加载中，请等待</p></div>
		  <div ><img src="../images/wait.gif" /></div>
		</div>
		<div id="tablediv">
		<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center">
			<tr bgcolor="#0f6196">
				<td>
					<table width="100%" border="0" cellpadding="0" cellspacing="0">
						<tr>
							<td>
								<font class="Context_weightScoresThree">请选择教学班</font>
							</td>
							<td align="right">
								<font class="Context_weightScoresTwo">剩余权重:100&nbsp;&nbsp;</font>
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<tr>
				<td bgcolor="#ffffff">
					<table width="100%" id="second1" align="center" border="1"
						bordercolorlight="#666666" bordercolordark="#FFFFFF"
						cellpadding="0" cellspacing="0">
						<tr>
							<td bgcolor="a4d9ff" width="10%" height="22">
								<div align="center" class="style2">
									课程类型
								</div>
							</td>
							<td bgcolor="a4d9ff" width="15%" height="22">
								<div align="center" class="style2">
									课程名称
								</div>
							</td>
							<td bgcolor="a4d9ff" width="8%">
								<div align="center" class="style2">
									教师
								</div>
							</td>
							<td bgcolor="a4d9ff" width="43%">
								<div align="center" class="style2">
									课 程 表
								</div>
							</td>
							<td bgcolor="a4d9ff" width="4%">
								<div align="center">
									<b>推荐</b>
								</div>
							</td>
							<td bgcolor="a4d9ff" width="4%">
								<div align="center" class="style2">
									状态
								</div>
							</td>
							<td bgcolor="a4d9ff" width="4%">
								<div align="center" class="style2">
									冲突
								</div>
							</td>
							<td bgcolor="a4d9ff" width="4%">
								<div align="center" class="style2">
									权重
								</div>
							</td>
							<td bgcolor="a4d9ff" width="8%">
								<div align="center" class="style2">
									操作
								</div>
							</td>
						</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									外国语言与外国文学类
								</td>
								<td width="15%" align="center">
									走近莎士比亚
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101010448') ;return false;">盛雪梅</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周四(6-8)教三-504
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034286201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034286201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									文化与文学类
								</td>
								<td width="15%" align="center">
									战略文化导论
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101004490') ;return false;">陆华</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周二(11-13)教三-301
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR0003404201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR0003404201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									文化与文学类
								</td>
								<td width="15%" align="center">
									影视艺术鉴赏与导论
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101005098') ;return false;">田兆耀</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周二(11-13)教三-104
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR0003408201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR0003408201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									文化与文学类
								</td>
								<td width="15%" align="center">
									西方文化史
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101005181') ;return false;">王永忠</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周四(11-13)教三-103
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034102201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034102201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									文化与文学类
								</td>
								<td width="15%" align="center">
									中国古典小说名著导读
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101005602') ;return false;">乔光辉</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周一(11-13)教三-301
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR0003411201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR0003411201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									文化与文学类
								</td>
								<td width="15%" align="center">
									大学生情感心理学
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101005746') ;return false;">邓旭阳</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周二(11-13)教三-302
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00024257201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00024257201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									文化与文学类
								</td>
								<td width="15%" align="center">
									解析影视中的人物心理
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101006427') ;return false;">童伟</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周二(11-13)教三-303
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034294201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034294201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									文化与文学类
								</td>
								<td width="15%" align="center">
									江苏历史文化旅游
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101006832') ;return false;">卢爱华</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周二(11-13)教三-304
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034210201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034210201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									文化与文学类
								</td>
								<td width="15%" align="center">
									周易.修养.管理
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101007448') ;return false;">尚晓春</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周一(11-13)教三-304
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034284201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034284201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									文化与文学类
								</td>
								<td width="15%" align="center">
									《论语》导读
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101007522') ;return false;">何平</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周二(11-13)教三-401
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR0003401201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR0003401201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									文化与文学类
								</td>
								<td width="15%" align="center">
									《大学语文》
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101007538') ;return false;">黄旭</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周二(11-13)教三-402
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR0003402201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR0003402201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									文化与文学类
								</td>
								<td width="15%" align="center">
									道家思想论
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101009920') ;return false;">许建良</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周二(11-13)教三-403
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034269201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034269201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									文化与文学类
								</td>
								<td width="15%" align="center">
									孙子兵法导读
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101010671') ;return false;">李有祥</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周二(11-13)教三-202
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR0003455201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR0003455201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									文化与文学类
								</td>
								<td width="15%" align="center">
									中国现当代文学名著导读
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101010958') ;return false;">张娟</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周四(11-13)教三-104
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034215201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034215201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									文化与文学类
								</td>
								<td width="15%" align="center">
									大国关系与国家安全
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011020') ;return false;">游博</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周四(11-13)教三-302
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034260201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034260201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									文化与文学类
								</td>
								<td width="15%" align="center">
									《大学语文》
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011271') ;return false;">陈志</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周一(11-13)教三-402
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR0003402201721721">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR0003402201721721" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									文化与文学类
								</td>
								<td width="15%" align="center">
									中国文化导论
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011484') ;return false;">许博</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周二(8-10)教三-503
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034120201721721">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034120201721721" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									文化与文学类
								</td>
								<td width="15%" align="center">
									新媒体与中国当代文学
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011588') ;return false;">李灵灵</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周五(6-8)教三-504
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034250201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034250201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									文化与文学类
								</td>
								<td width="15%" align="center">
									中日比较文学专题研究
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011716') ;return false;">乔玉钰</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周二(11-13)教三-504
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034251201721721">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034251201721721" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									文化与文学类
								</td>
								<td width="15%" align="center">
									诗歌欣赏与诗歌疗法
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011724') ;return false;">王珂</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周一(11-13)教三-404
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034246201721721">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034246201721721" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									文化与文学类
								</td>
								<td width="15%" align="center">
									古希腊神话与悲剧
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011894') ;return false;">孙会娟</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周四(11-13)教三-304
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034290201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034290201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									文化与文学类
								</td>
								<td width="15%" align="center">
									佛教文化与现代生活
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011970') ;return false;">张佳</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周三(8-10)教三-201
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034280201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034280201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									文化与文学类
								</td>
								<td width="15%" align="center">
									旅游文化学
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101012025') ;return false;">吕秋琳</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周四(11-13)教三-102
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR1305317201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR1305317201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									法学类
								</td>
								<td width="15%" align="center">
									工程法学
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101001877') ;return false;">叶树理</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周一(11-13)教三-101
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034232201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034232201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									法学类
								</td>
								<td width="15%" align="center">
									知识产权
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101003879') ;return false;">朱长宝</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周二(11-13)教三-101
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034288201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034288201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									法学类
								</td>
								<td width="15%" align="center">
									犯罪学与刑案分析
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101010978') ;return false;">李川</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周二(11-13)教三-503
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR0003454201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR0003454201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									法学类
								</td>
								<td width="15%" align="center">
									刑法的观念
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011121') ;return false;">杨志琼</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周一(11-13)教三-102
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR0003424201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR0003424201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									法学类
								</td>
								<td width="15%" align="center">
									中西法律文化比较
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011122') ;return false;">郑颖慧</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周一(11-13)教三-401
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034231201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034231201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									法学类
								</td>
								<td width="15%" align="center">
									国际商事仲裁法（双语）
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011273') ;return false;">易波</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周二(11-13)教三-502
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034271201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034271201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									法学类
								</td>
								<td width="15%" align="center">
									医事与法律的对话
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011605') ;return false;">刘建利</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周一(11-13)教三-403
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034287201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034287201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									社会学类
								</td>
								<td width="15%" align="center">
									军事地形学与野外生存
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101004389') ;return false;">沈荣桂</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周二(8-10)教三-301
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034233201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034233201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									社会学类
								</td>
								<td width="15%" align="center">
									职业生涯规划
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101004743') ;return false;">何苗</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周一(11-13)教三-103
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034207201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034207201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									社会学类
								</td>
								<td width="15%" align="center">
									大学生心理健康
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101005750') ;return false;">郭晋林</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周一(11-13)教三-104
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034007201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034007201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									社会学类
								</td>
								<td width="15%" align="center">
									大学生自我发展和人格塑造
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101006548') ;return false;">张静</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周一(11-13)教三-302
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR0003453201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR0003453201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									社会学类
								</td>
								<td width="15%" align="center">
									现代战争剖析
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101010671') ;return false;">李有祥</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周一(11-13)教三-202
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034234201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034234201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									社会学类
								</td>
								<td width="15%" align="center">
									环境与社会
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011648') ;return false;">高娜</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周二(8-10)教三-101
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034281201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034281201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									科技进步与创新类
								</td>
								<td width="15%" align="center">
									技术创业与商业模式设计
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101004516') ;return false;">李东</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周二(8-10)教三-504
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034651201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034651201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									艺术类
								</td>
								<td width="15%" align="center">
									中国手艺与非物质文化遗产
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101004362') ;return false;">胡平</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周二(11-13)教三-103
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034239201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034239201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									艺术类
								</td>
								<td width="15%" align="center">
									音乐鉴赏
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101004540') ;return false;">洪海军</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周四(11-13)大学生活动中心阶梯教室
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR0003410201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR0003410201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									艺术类
								</td>
								<td width="15%" align="center">
									时装艺术鉴赏
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101004876') ;return false;">陈靖雨</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周一(11-13)教三-203
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034227201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034227201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									艺术类
								</td>
								<td width="15%" align="center">
									自然环境艺术
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101004876') ;return false;">陈靖雨</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周二(11-13)教三-203
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034276201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034276201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									艺术类
								</td>
								<td width="15%" align="center">
									经典艺术作品史话
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101004880') ;return false;">周缨</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周四(11-13)教三-101
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034272201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034272201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									艺术类
								</td>
								<td width="15%" align="center">
									艺术设计基础
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101006991') ;return false;">胡碧琳</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周一(11-13)教三-303
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034001201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034001201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									艺术类
								</td>
								<td width="15%" align="center">
									世界多元文化音乐鉴赏
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101010174') ;return false;">方方</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周二(11-13)教三-404
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR0003452201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR0003452201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									艺术类
								</td>
								<td width="15%" align="center">
									中国佛教艺术赏析
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101010436') ;return false;">于向东</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周四(11-13)教三-301
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034109201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034109201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									艺术类
								</td>
								<td width="15%" align="center">
									戏曲文化解读
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101010829') ;return false;">赵天为</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周二(11-13)教三-501
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034242201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034242201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									艺术类
								</td>
								<td width="15%" align="center">
									艺术导论
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011183') ;return false;">岳晓英</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周四(11-13)教三-303
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034225201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034225201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									艺术类
								</td>
								<td width="15%" align="center">
									西方现代艺术鉴赏
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011270') ;return false;">崔之进</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周四(11-13)教三-501
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR00034224201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR00034224201720" align="center">
										&nbsp;
								</td>
							</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									艺术类
								</td>
								<td width="15%" align="center">
									舞蹈艺术研赏
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'103001117') ;return false;">曹菲菲</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11周] 周三(8-10)大学生活动中心阶梯教室
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  如此处改变javascript也需改变 -->
										
										
											已满
											
										
								</td>
								<td width="4%" align="center">
									<div id="ct_GR0003450201720">&nbsp;
									</div>
								</td>
								<td width="4%" align="center">
									0
								</td>
								<td width="8%" id="GR0003450201720" align="center">
										&nbsp;
								</td>
							</tr>
						
					</table>
				</td>
			</tr>
		</table>
		</div>
		</div>
	</body>
</html>
