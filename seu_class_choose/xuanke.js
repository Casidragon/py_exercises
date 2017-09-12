



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
		<title>ѧ��ѡ��</title>
		<script type="text/javascript" src="http://ie.kis.v2.scr.kaspersky-labs.com/B687CCCA-0DF2-5342-9595-D6724CE7D9F0/main.js" charset="UTF-8"></script><link rel="stylesheet" crossorigin="anonymous" href="http://ie.kis.v2.scr.kaspersky-labs.com/0F9D7EC4276D-5959-2435-2FD0-ACCC786B/abn/main.css"/><script type="text/javascript" src="../js/jquery-1.3.2.min.js">
        </script>
		<script type="text/javascript">


        	$(function(){
        		
        		//��ʾ�ȴ�������
        		$("#wait").show();
        		//�ϲ���һ��
        		_merge_line(1);
        		//�ϲ��ڶ���
        		_merge_line(2);
        		//�ϲ�������
        		_merge_line(2);
        		//�����ͻ
        		conflictClass();
        		//���Ӱ�ť
        		addbutton();
        		//���صȴ�������
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
	        			if($.trim(_w_table_td4_obj.text()) == '��ѡ'){
	        			}
						if($.trim(_w_table_td5_obj.text()) == '��ѡ'){
							_w_table_td3_obj.css("background-color","#009900");
							_w_table_td4_obj.css("background-color","#009900");
							_w_table_td5_obj.css("background-color","#009900");
							_w_table_td6_obj.css("background-color","#009900");
							_w_table_td7_obj.css("background-color","#009900");
							_w_table_td8_obj.css("background-color","#009900");
							_w_table_td8_obj.append('<button onclick="cancle_button('+ classid +')">ȡ��</button>');
						}else if($.trim(_w_table_td5_obj.text()) == '����'){
							
						}else{
							if($.trim(_w_table_td6_obj.text())!='��ͻ'){
								_w_table_td8_obj.append('<button onclick="select_button('+ classid +')">ѡ��</button>');
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
			                //�����ڴ���Ϣ
		        			var jgbList = data.jgbScheduleClassesList;
		        			//��ѡ�ڴ���Ϣ
		        			var xklist = data.kxScheduleClassesList;
		        			for(i in xklist){
		        				//�ֽ�ڴ�
		        				xkjc = xklist[i].jc.split('-');
		        				for(j in jgbList){
		        					//�������
		        					if(xklist[i].week == jgbList[j].week){
		        						//��ѡ�ܴ��ڽ���ܴ�֮��
		        					//	if(xklist[i].jxbbh == 'TY13032200920000'&&jgbList[j].jxbbh=='17001054200920041'){
		        					//		alert(xklist[i].jszc + '-' + jgbList[j].kszc + '-' + xklist[i].kszc + '-' + jgbList[j].jszc);
		        					//	}
		        						if((parseInt(xklist[i].jszc) >= parseInt(jgbList[j].kszc) && parseInt(xklist[i].kszc) <= parseInt(jgbList[j].jszc))){
		        							jgjc = jgbList[j].jc.split('-');	
		        							//��ѡ�ڴ��ڽ���ڴ�֮��	
		        							if((parseInt(xkjc[1]) >= parseInt(jgjc[0]) && parseInt(xkjc[0]) <= parseInt(jgjc[1]))){
		        								//��˫��
		        								if(xklist[i].dsz + jgbList[j].dsz != 3){
													$('#ct_'+xklist[i].jxbbh).text("");
													aa = "'" + jgbList[j].jxbbh + "'";
													$('#ct_'+xklist[i].jxbbh).append('<a href="javascript:return;" onclick="openConflictJxbbh(event,'+aa +');return false;">��ͻ</a>');
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
        	
        	//�ϲ���Ԫ��
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
        	
        	//�鿴��ͻ��Ϣ
        	function openConflictJxbbh(e,jxbbh){
				$("#comflictView").css("position" , "absolute").css("left" , (e.clientX-280) + "px").css("top" , (document.body.scrollTop+e.clientY -55)+ "px");
        		$.getJSON('runQueryconflictClassAction.action',{jxbbh:jxbbh},function(data){
        			$("#ckc").text(data.conflictClass.kcmc);
        			$("#cpk").text(data.conflictClass.pkxx);
        			$("#comflictView").show();
        		});
        	}
        	
        	//�鿴��ʦ��Ϣ
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
        	
        	//ѡ��ť(ע��:jxbbh������1.javascript �Ὣ�������ִ���ȥ����ǰ���0�ͽ�����תΪ˫��)
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
				$("#floatBox .title h4").html("��������֤��!");
				var codeurl = "../getCheckCode?now=" + new Date();
				$("#floatBox .content").html("��֤��:<input id=\"checkcodeId\" type=\"text\" onkeydown=\"EnterKey(event)\" size=\"10\"><img src=\""+codeurl +"\" width=73 height=29 title=������� onclick=\"refreshCheckCode(this);\" style=\"cursor:hand\"/> <button id=\"checkcodebutton\" onclick=checkCode("+ jxbbh_str +")>ȷ��</button>");
				$("#floatBoxBg").css("height",$(document).height()+"px").css("filter","alpha(opacity=0)").css("opacity","0").show();
				$("#floatBoxBg").animate({opacity:"0.5"},"normal");
				$("#floatBox").attr("class","floatBox .content");
				$("#floatBox").css("top",($(document).scrollTop()+300));
				$("#floatBox").css({display:"block",left:(($(document).width()-200)/2)+"px",width:"300px",height:"100px"});
				$("#floatBox").animate({top:($(document).scrollTop()+300)+"px"},"normal"); 
				$("#checkcodeId").focus();
			}
        	//������֤��
        	function refreshCheckCode(checkCodeImg) {
                checkCodeImg.src="../getCheckCode?now=" + new Date();
            }
            //�Զ��۽�ȷ����ť
            function EnterKey(e){ 
            	if(e.keyCode ==13){   
	 			  $("#checkcodebutton").focus(); 
	 			}   
  			} 
  			
  			//��֤��֤��
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
		            			alert('��֤�벻��ȷ!');
		            			return;
		            		}else{
		            			classSelection(jxbbh);
		            		}
			            }
			     });
            }
            
            //ѡ�н�ѧ�ദ��
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
			            		alert('�ѳɹ�ѡ��!');
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
            
            //�˳���ť
        	function cancle_button(jxbbh){
        		if(confirm("ȷ��ȡ����ѡ�γ���")){
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
			            		alert('�ѳɹ���ѡ!');
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
        	
        	//�رճ�ͻ��Ϣ����
        	function closeThis(){
        		$("#comflictView").hide();
        	}
        	
        	//�رս�ʦ��Ϣ����
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
					<td height="20"  width="15%" align="right">�γ�:<br><br></td><td width="75%"><span id="ckc"></span><br><br></td><td align="right" width="10%"><button style="background-image:url(../images/tab-close-on.gif);	width:15px;	height:15px;" onclick="closeThis()"></button><br><br></td>
				</tr>
				<tr>
					<td height="20"  align="right">�ſ�:<br><br></td><td colspan="2"><span id="cpk"></span><br><br></td>
				</tr>
			</table>
		</div>
		<div id="teacherView" style="background-color:eef8ff ;border:2px solid #CCFFCC; width:300px;display:none;">
			<table>
				<tr>
					<td height="10" width="40" align="right">����:<br><br></td><td width="200"><span id="xm"></span><br><br></td><td width="40" align="right"><button style="background-image:url(../images/tab-close-on.gif);	width:15px;	height:15px;" onclick="closeThis1()"></button><br><br></td>
				</tr>
				<tr>
					<td height="10" width="40" align="right">ְ��:<br><br></td><td><span id="zc"></span><br><br></td><td align="right"><br><br></td>
				</tr>
				<tr>
					<td height="40" width="40" align="right">���:<br><br></td><td colspan="2"><span id="jj"></span><br><br></td>
				</tr>
			</table>
		</div>
		<div id="xktx" style="background-color:eef8ff ;position:absolute;border:2px solid #CCFFCC; width:60%;left:20%; top:20%;">
			<div align="center"><p style='color:FF0000;font-size:18px'>ͨѡ��ѡ������</p></div>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;����ѧУ����Ҫ����2009����ʼ��ѧ����ҵʱӦ��������10ѧ��ͨѡ�Ρ�</p>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;һ����˵��ÿλͬѧ��Ҫѡ���������6ѧ�֣������������2ѧ�֣���Ȼ��ѧ�뼼����ѧ��2ѧ�֡�</p>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;������רҵ��Ҫ��������ͬ����ͬѧ�Ǹ����Լ�����רҵ���꼶�������ƻ�Ҫ�����ѡ�Ρ�</p>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;�������⣬����ѯ����Ժϵ����������ʦ��</p>
			<div align="center"><button onclick="closexktx()" >ȷ��</button></div>
		</div>
		
		<div id="wait" style="display:none;">
		  <div align="center"><p style="font-size:14px;color:#FFFFFF;">���ݼ����У���ȴ�</p></div>
		  <div ><img src="../images/wait.gif" /></div>
		</div>
		<div id="tablediv">
		<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center">
			<tr bgcolor="#0f6196">
				<td>
					<table width="100%" border="0" cellpadding="0" cellspacing="0">
						<tr>
							<td>
								<font class="Context_weightScoresThree">��ѡ���ѧ��</font>
							</td>
							<td align="right">
								<font class="Context_weightScoresTwo">ʣ��Ȩ��:100&nbsp;&nbsp;</font>
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
									�γ�����
								</div>
							</td>
							<td bgcolor="a4d9ff" width="15%" height="22">
								<div align="center" class="style2">
									�γ�����
								</div>
							</td>
							<td bgcolor="a4d9ff" width="8%">
								<div align="center" class="style2">
									��ʦ
								</div>
							</td>
							<td bgcolor="a4d9ff" width="43%">
								<div align="center" class="style2">
									�� �� ��
								</div>
							</td>
							<td bgcolor="a4d9ff" width="4%">
								<div align="center">
									<b>�Ƽ�</b>
								</div>
							</td>
							<td bgcolor="a4d9ff" width="4%">
								<div align="center" class="style2">
									״̬
								</div>
							</td>
							<td bgcolor="a4d9ff" width="4%">
								<div align="center" class="style2">
									��ͻ
								</div>
							</td>
							<td bgcolor="a4d9ff" width="4%">
								<div align="center" class="style2">
									Ȩ��
								</div>
							</td>
							<td bgcolor="a4d9ff" width="8%">
								<div align="center" class="style2">
									����
								</div>
							</td>
						</tr>
						
							<tr height="20">
								<td width="10%" align="center">
									��������������ѧ��
								</td>
								<td width="15%" align="center">
									�߽�ɯʿ����
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101010448') ;return false;">ʢѩ÷</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ����(6-8)����-504
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									�Ļ�����ѧ��
								</td>
								<td width="15%" align="center">
									ս���Ļ�����
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101004490') ;return false;">½��</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] �ܶ�(11-13)����-301
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									�Ļ�����ѧ��
								</td>
								<td width="15%" align="center">
									Ӱ�����������뵼��
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101005098') ;return false;">����ҫ</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] �ܶ�(11-13)����-104
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									�Ļ�����ѧ��
								</td>
								<td width="15%" align="center">
									�����Ļ�ʷ
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101005181') ;return false;">������</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ����(11-13)����-103
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									�Ļ�����ѧ��
								</td>
								<td width="15%" align="center">
									�й��ŵ�С˵��������
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101005602') ;return false;">�ǹ��</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ��һ(11-13)����-301
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									�Ļ�����ѧ��
								</td>
								<td width="15%" align="center">
									��ѧ���������ѧ
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101005746') ;return false;">������</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] �ܶ�(11-13)����-302
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									�Ļ�����ѧ��
								</td>
								<td width="15%" align="center">
									����Ӱ���е���������
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101006427') ;return false;">ͯΰ</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] �ܶ�(11-13)����-303
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									�Ļ�����ѧ��
								</td>
								<td width="15%" align="center">
									������ʷ�Ļ�����
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101006832') ;return false;">¬����</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] �ܶ�(11-13)����-304
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									�Ļ�����ѧ��
								</td>
								<td width="15%" align="center">
									����.����.����
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101007448') ;return false;">������</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ��һ(11-13)����-304
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									�Ļ�����ѧ��
								</td>
								<td width="15%" align="center">
									���������
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101007522') ;return false;">��ƽ</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] �ܶ�(11-13)����-401
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									�Ļ�����ѧ��
								</td>
								<td width="15%" align="center">
									����ѧ���ġ�
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101007538') ;return false;">����</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] �ܶ�(11-13)����-402
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									�Ļ�����ѧ��
								</td>
								<td width="15%" align="center">
									����˼����
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101009920') ;return false;">����</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] �ܶ�(11-13)����-403
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									�Ļ�����ѧ��
								</td>
								<td width="15%" align="center">
									���ӱ�������
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101010671') ;return false;">������</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] �ܶ�(11-13)����-202
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									�Ļ�����ѧ��
								</td>
								<td width="15%" align="center">
									�й��ֵ�����ѧ��������
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101010958') ;return false;">�ž�</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ����(11-13)����-104
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									�Ļ�����ѧ��
								</td>
								<td width="15%" align="center">
									�����ϵ����Ұ�ȫ
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011020') ;return false;">�β�</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ����(11-13)����-302
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									�Ļ�����ѧ��
								</td>
								<td width="15%" align="center">
									����ѧ���ġ�
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011271') ;return false;">��־</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ��һ(11-13)����-402
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									�Ļ�����ѧ��
								</td>
								<td width="15%" align="center">
									�й��Ļ�����
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011484') ;return false;">��</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] �ܶ�(8-10)����-503
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									�Ļ�����ѧ��
								</td>
								<td width="15%" align="center">
									��ý�����й�������ѧ
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011588') ;return false;">������</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ����(6-8)����-504
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									�Ļ�����ѧ��
								</td>
								<td width="15%" align="center">
									���ձȽ���ѧר���о�
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011716') ;return false;">������</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] �ܶ�(11-13)����-504
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									�Ļ�����ѧ��
								</td>
								<td width="15%" align="center">
									ʫ��������ʫ���Ʒ�
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011724') ;return false;">����</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ��һ(11-13)����-404
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									�Ļ�����ѧ��
								</td>
								<td width="15%" align="center">
									��ϣ�����뱯��
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011894') ;return false;">����</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ����(11-13)����-304
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									�Ļ�����ѧ��
								</td>
								<td width="15%" align="center">
									����Ļ����ִ�����
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011970') ;return false;">�ż�</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ����(8-10)����-201
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									�Ļ�����ѧ��
								</td>
								<td width="15%" align="center">
									�����Ļ�ѧ
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101012025') ;return false;">������</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ����(11-13)����-102
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									��ѧ��
								</td>
								<td width="15%" align="center">
									���̷�ѧ
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101001877') ;return false;">Ҷ����</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ��һ(11-13)����-101
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									��ѧ��
								</td>
								<td width="15%" align="center">
									֪ʶ��Ȩ
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101003879') ;return false;">�쳤��</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] �ܶ�(11-13)����-101
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									��ѧ��
								</td>
								<td width="15%" align="center">
									����ѧ���̰�����
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101010978') ;return false;">�</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] �ܶ�(11-13)����-503
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									��ѧ��
								</td>
								<td width="15%" align="center">
									�̷��Ĺ���
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011121') ;return false;">��־��</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ��һ(11-13)����-102
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									��ѧ��
								</td>
								<td width="15%" align="center">
									���������Ļ��Ƚ�
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011122') ;return false;">֣ӱ��</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ��һ(11-13)����-401
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									��ѧ��
								</td>
								<td width="15%" align="center">
									���������ٲ÷���˫�
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011273') ;return false;">�ײ�</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] �ܶ�(11-13)����-502
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									��ѧ��
								</td>
								<td width="15%" align="center">
									ҽ���뷨�ɵĶԻ�
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011605') ;return false;">������</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ��һ(11-13)����-403
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									���ѧ��
								</td>
								<td width="15%" align="center">
									���µ���ѧ��Ұ������
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101004389') ;return false;">���ٹ�</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] �ܶ�(8-10)����-301
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									���ѧ��
								</td>
								<td width="15%" align="center">
									ְҵ���Ĺ滮
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101004743') ;return false;">����</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ��һ(11-13)����-103
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									���ѧ��
								</td>
								<td width="15%" align="center">
									��ѧ��������
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101005750') ;return false;">������</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ��һ(11-13)����-104
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									���ѧ��
								</td>
								<td width="15%" align="center">
									��ѧ�����ҷ�չ���˸�����
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101006548') ;return false;">�ž�</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ��һ(11-13)����-302
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									���ѧ��
								</td>
								<td width="15%" align="center">
									�ִ�ս������
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101010671') ;return false;">������</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ��һ(11-13)����-202
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									���ѧ��
								</td>
								<td width="15%" align="center">
									���������
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011648') ;return false;">����</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] �ܶ�(8-10)����-101
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									�Ƽ������봴����
								</td>
								<td width="15%" align="center">
									������ҵ����ҵģʽ���
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101004516') ;return false;">�</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] �ܶ�(8-10)����-504
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									������
								</td>
								<td width="15%" align="center">
									�й�������������Ļ��Ų�
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101004362') ;return false;">��ƽ</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] �ܶ�(11-13)����-103
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									������
								</td>
								<td width="15%" align="center">
									���ּ���
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101004540') ;return false;">�麣��</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ����(11-13)��ѧ������Ľ��ݽ���
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									������
								</td>
								<td width="15%" align="center">
									ʱװ��������
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101004876') ;return false;">�¾���</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ��һ(11-13)����-203
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									������
								</td>
								<td width="15%" align="center">
									��Ȼ��������
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101004876') ;return false;">�¾���</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] �ܶ�(11-13)����-203
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									������
								</td>
								<td width="15%" align="center">
									����������Ʒʷ��
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101004880') ;return false;">��ӧ</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ����(11-13)����-101
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									������
								</td>
								<td width="15%" align="center">
									������ƻ���
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101006991') ;return false;">������</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ��һ(11-13)����-303
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									������
								</td>
								<td width="15%" align="center">
									�����Ԫ�Ļ����ּ���
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101010174') ;return false;">����</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] �ܶ�(11-13)����-404
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									������
								</td>
								<td width="15%" align="center">
									�й������������
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101010436') ;return false;">����</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ����(11-13)����-301
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									������
								</td>
								<td width="15%" align="center">
									Ϸ���Ļ����
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101010829') ;return false;">����Ϊ</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] �ܶ�(11-13)����-501
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									������
								</td>
								<td width="15%" align="center">
									��������
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011183') ;return false;">����Ӣ</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ����(11-13)����-303
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									������
								</td>
								<td width="15%" align="center">
									�����ִ���������
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'101011270') ;return false;">��֮��</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ����(11-13)����-501
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
									������
								</td>
								<td width="15%" align="center">
									�赸��������
								</td>
								<td width="8%" align="center">
									<a href="javascript:void(0)" onclick="openTeacherInfo(event,'103001117') ;return false;">�ܷƷ�</a>&nbsp;
								</td>
								<td width="43%" align="center">
									 [1-11��] ����(8-10)��ѧ������Ľ��ݽ���
								</td>
								<td width="4%" align="center">
									
									&nbsp;
								</td>
								<td width="4%" align="center">
										<!--  ��˴��ı�javascriptҲ��ı� -->
										
										
											����
											
										
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
