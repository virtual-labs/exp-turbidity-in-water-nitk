var tn=0;
var count=0;	
function navNext()
{
	for(temp=0;temp<=12;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";
}

function showIncubatorKnob()
{
     if (document.getElementById('11-2').style.visibility=="hidden")
         document.getElementById('11-2').style.visibility="visible";
     else
         document.getElementById('11-2').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}

var ca;
var questions=["Which of the following unit is not used to measure turbidity of water?",
			   "Turbidity is caused by particles suspended in water that </br>scatter light making the water appear cloudy or murky.",
			   "Which of the following reagents are used to preapre </br>solution 1 and solution 2 respectively?"];
var options2=[["NTU","ATU","JTU","FTU"],//ans:ATU (1)
			  ["True","False"],//True(0)
			  ["Hydrochloric acid, potassium thiocynate","Hexamethylenetetramine, hydrazine sulphate","Hydrazine sulphate, hexamethylenetetramine","None of the above"]];//Hydrazine sulphate, hexamethylenetetramine(2)

function validateAnswer(qn,ans,left,top)
{
	 $("#answer").empty();
	document.getElementById("a").innerHTML="";
	document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
	document.getElementById("q").innerHTML=questions[qn];
	el = document.createElement("option");
	el.textContent = " ";
	el.value = " ";
	answer.appendChild(el);
  
	for(j=0;j<options2[qn].length;j++)
	{
		opt = options2[qn][j];

		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		answer.appendChild(el);
		$("#answer").change(function()
		{
			ca=$(this).children("option:selected").val();
			if(options2[qn][ans]==ca)
			{
				document.getElementById("a").innerHTML="Correct Answer!";
			}
			else
			{
				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
			}
			setTimeout(function()
			{
				document.getElementById("questDiv").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			},1500);
		});
	}
}


function magic()
{
	if(simsubscreennum==1)
	{
		tn=1;
		step1and3();
	}
	
	if(simsubscreennum==2)
	{
		document.getElementById("1-2").style.visibility="hidden";
		document.getElementById("1-2on").style.visibility="hidden";
		document.getElementById("1-2tare").style.visibility="hidden";
		document.getElementById("1-23").style.visibility="hidden";
		document.getElementById("1-33").style.visibility="hidden";
		document.getElementById("1-35").style.visibility="hidden";
		document.getElementById("1-1weight").style.visibility="hidden";
		tn=2;
		step2and4();
	}
	
	if(simsubscreennum==3)
	{
		document.getElementById("2-41").style.visibility="hidden";
		tn=3;
		step1and3();
	}
	
	if(simsubscreennum==4)
	{
		document.getElementById("3-23").style.visibility="hidden";
		document.getElementById("3-2on").style.visibility="hidden";
		document.getElementById("3-2tare").style.visibility="hidden";
		document.getElementById("3-2").style.visibility="hidden";
		document.getElementById("3-33").style.visibility="hidden";
		document.getElementById("3-35").style.visibility="hidden";
		document.getElementById("3-1weight").style.visibility="hidden";
		tn=4;
		step2and4();
	}
	
	if(simsubscreennum==5)
	{
		document.getElementById("4-41").style.visibility="hidden";
		$("#5-41").fadeIn(500,
		function()
		{
			myInt=setInterval(function(){animatearrow();},500);
			document.getElementById("arrow1").style="visibility:visible; position:absolute; left:590px; top:220px; height:35px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
			document.getElementById("arrow1").style.msTransform="rotate(180deg)";
			document.getElementById("arrow1").style.transform="rotate(180deg)";
			$("#5-41").click(function()
			{
				myStopFunction();
				$("#5-41").css({"visibility":"hidden"});
				$("#5-42").css({"visibility":"visible"});
				$("#5-42").animate({"position":"absolute","left":"80px"},1500,
				function()
				{
					document.getElementById("p5-1").innerHTML="Press the up arrow on pipette bulb </br>to take the liquid up in to the pipette.";
					document.getElementById("p5-1").style.visibility="visible";
					$("#5-42").animate({"position":"absolute","top":"170px"},500,
					function()
					{
						document.getElementById("5-48").style.visibility="visible";
						$("#5-14").animate({"position":"absolute","top":"355px"},1000);
						$("#5-48").animate({"position":"absolute","top":"260px"},1000,
						function()
						{
							document.getElementById("p5-1").style.visibility="hidden";
							$("#5-48").animate({"position":"absolute","top":"170px"},300);
							$("#5-42").animate({"position":"absolute","top":"80px"},300,
							function()
							{
								$("#5-48").animate({"position":"absolute","left":"480.5px","top":"190px"},1000);
								$("#5-42").animate({"position":"absolute","left":"465px","top":"100px"},1000,
								function()
								{
									document.getElementById("p5-1").innerHTML="Press the down arrow to release</br> the liquid up in to the pipette.";
									document.getElementById("p5-1").style.visibility="visible";
									$("#5-48").animate({"position":"absolute","top":"400px"},750);
									$("#5-34").animate({"position":"absolute","top":"388px"},1000,
									function()
									{
										document.getElementById("5-42").style.visibility="hidden";
										document.getElementById("p5-1").style.visibility="hidden";
										suck5mlfromsolution2();
									});	
								});
							});
						});
					});
				});
			});
		});
	}
		
	if(simsubscreennum==6)
	{
		setTimeout(function()
		{
			myInt=setInterval(function(){animatearrow();},500);
			document.getElementById("arrow1").style="visibility:visible; position:absolute; left:400px; top:390px; height:35px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
			document.getElementById("arrow1").style.msTransform="rotate(180deg)";
			document.getElementById("arrow1").style.transform="rotate(180deg)";
			$("#6-14").click(function()
			{
				myStopFunction();
				$("#6-14").hide();
				$("#6-16").hide();
				$("#6-15").css({"visibility":"visible"});
				$("#6-15").animate({"position":"absolute","left":"135px","top":"190px"},1500,
				function()
					{
						document.getElementById("6-15").style.animation="rotateBeaker 0.75s forwards";
						setTimeout(function(){
							$("#6-15").hide();
							$("#6-17").css({"visibility":"visible"});
							//document.getElementById("6-17").style.visibility="visible";
							$("#6-13").animate({"position":"absolute","top":"302px"},2500,
								function(){
									$("#6-17").hide();
									$("#6-18").css({"visibility":"visible"});
									//document.getElementById("6-18").style.visibility="visible";
									document.getElementById("6-18").style.animation="rotateBeaker1 0.75s forwards";
									setTimeout(function(){
										$("#6-18").hide(500);
										setTimeout(function()
										{
											$("#6-20").fadeIn(100);
											setTimeout(function()
											{
												myInt=setInterval(function(){animatearrow();},500);
												document.getElementById("arrow1").style="visibility:visible; position:absolute; left:472px; top:370px; height:35px; z-index:10;";
												document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
												document.getElementById("arrow1").style.msTransform="rotate(270deg)";
												document.getElementById("arrow1").style.transform="rotate(270deg)";
 												$("#6-20").click(function()
 												{
 													myStopFunction();
 													$("#6-20").animate({"position":"absolute","left":"118px","top":"252px"},2000,
 													function(){
 														$("#6-20").animate({"position":"absolute","top":"267px"},500,
 															function(){
 																//document.getElementById("nextButton").style.visibility="visible";
																validateAnswer(2,2,"250px","100px");
 															}
 														);
 													  }
 													);
  												});
											},300);
										},250);
									},750);
								}
							);
						},800);	
					}			  	
				);
			});
		},500);
	}
	
	if(simsubscreennum==7)
	{
		$("#7-1").fadeIn(2000);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},2000);
	}
	
	if(simsubscreennum==8)
	{
		setTimeout(function()
		{
			myInt=setInterval(function(){animatearrow();},500);
			document.getElementById("arrow1").style="visibility:visible; position:absolute; left:105px; top:420px; height:35px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
			document.getElementById("arrow1").style.msTransform="rotate(180deg)";
			document.getElementById("arrow1").style.transform="rotate(180deg)";
			$("#8-10").on('click',function()
 			{
 				myStopFunction();
				document.getElementById("8-10").onclick="";
				//$("#8-10").css({"transform":"rotate(180deg)"});
				$("#8-19").css({"visibility":"visible"});
				$("#8-11").css({"visibility":"visible"});
				$("#8-12").css({"visibility":"visible"});
				tn=8;
				step8and9and10and11();
			});
		},500);
	}
	
	if(simsubscreennum==9)
	{
		document.getElementById("8-1").style.visibility="hidden";
		document.getElementById("8-18").style.visibility="hidden";
		document.getElementById("8-11").style.visibility="hidden";
		document.getElementById("8-12").style.visibility="hidden";
		document.getElementById("8-16").style.visibility="hidden";
		document.getElementById("8-17").style.visibility="hidden";
		document.getElementById("8-19").style.visibility="hidden";
		tn=9;
		step8and9and10and11();
	}
	
	if(simsubscreennum==10)
	{
		document.getElementById("9-1").style.visibility="hidden";
		document.getElementById("9-18").style.visibility="hidden";
		document.getElementById("9-11").style.visibility="hidden";
		document.getElementById("9-12").style.visibility="hidden";
		document.getElementById("9-16").style.visibility="hidden";
		document.getElementById("9-17").style.visibility="hidden";
		document.getElementById("9-19").style.visibility="hidden";
		tn=10;
		step8and9and10and11();
	}
	if(simsubscreennum==11)
	{
		document.getElementById("10-1").style.visibility="hidden";
		document.getElementById("10-18").style.visibility="hidden";
		document.getElementById("10-11").style.visibility="hidden";
		document.getElementById("10-12").style.visibility="hidden";
		document.getElementById("10-16").style.visibility="hidden";
		document.getElementById("10-17").style.visibility="hidden";
		document.getElementById("10-19").style.visibility="hidden";
		tn=11;
		step8and9and10and11();
	}
	if(simsubscreennum==12)
	{
		document.getElementById("11-1").style.visibility="hidden";
		document.getElementById("11-18").style.visibility="hidden";
		document.getElementById("11-11").style.visibility="hidden";
		document.getElementById("11-12").style.visibility="hidden";
		document.getElementById("11-16").style.visibility="hidden";
		document.getElementById("11-17").style.visibility="hidden";
		document.getElementById("11-19").style.visibility="hidden";
	}
}

function step1and3()
{
	setTimeout(function()
		{
			myInt=setInterval(function(){animatearrow();},500);
			document.getElementById("arrow1").style="visibility:visible; position:absolute; left:140px; top:452.5px; height:30px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(90deg)";
			document.getElementById("arrow1").style.msTransform="rotate(90deg)";
			document.getElementById("arrow1").style.transform="rotate(90deg)";
			$("#"+tn+"-1on").click(function()
			{
				myStopFunction();
				$("#"+tn+"-1on").css({"visibility":"hidden"});
				$("#"+tn+"-2on").css({"visibility":"visible"});
				$("#"+tn+"-1grey").fadeIn(0);
				$("#"+tn+"-2").fadeIn(500,function()
				{
					myInt=setInterval(function(){animatearrow();},500);
					document.getElementById("arrow1").style="visibility:visible; position:absolute; left:575px; top:417px; height:35px; z-index:10;";
					document.getElementById("arrow1").style.WebkitTransform="rotate(0deg)";
					document.getElementById("arrow1").style.msTransform="rotate(0deg)";
					document.getElementById("arrow1").style.transform="rotate(0deg)";
					$("#"+tn+"-2").click(function()
					{
						myStopFunction();
						document.getElementById(tn+"-2hand").style.visibility="visible";
						$("#"+tn+"-2").fadeOut(0);
						document.getElementById(tn+"-2hand").style.animation="moveBeaker1 2.5s forwards";
						setTimeout(function()
						{
							document.getElementById(tn+"-2hand").style.visibility="hidden";
							document.getElementById(tn+"-23").style.visibility="visible";
							// $("#"+tn+"-2").css({"position":"absolute","left":"115px", "top":"240px"});
							// $("#"+tn+"-2").fadeIn(0);
							
							document.getElementById(tn+"-22").style.visibility="visible";
							
							myInt=setInterval(function(){animatearrow();},500);
							document.getElementById("arrow1").style="visibility:visible; position:absolute; left:230px; top:452.5px; height:30px; z-index:10;";
							document.getElementById("arrow1").style.WebkitTransform="rotate(90deg)";
							document.getElementById("arrow1").style.msTransform="rotate(90deg)";
							document.getElementById("arrow1").style.transform="rotate(90deg)";
							$("#"+tn+"-1tare").click(function()
							{
								myStopFunction();
								$("#"+tn+"-1tare").css({"visibility":"hidden"});
								$("#"+tn+"-2tare").css({"visibility":"visible"});
								document.getElementById(tn+"-1weight").style.visibility="visible";
								$("#"+tn+"-31").fadeIn(500);
								$("#"+tn+"-32").fadeIn(1000);
								setTimeout(function()
								{
									myInt = setInterval(function(){ animatearrow(); }, 500);
									document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:560px; top:230px; height: 30px; z-index: 10;";
									document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
									// Code for IE9
									document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
									// Standard syntax
									document.getElementById("arrow1").style.transform = "rotate(270deg)";
									document.getElementById(tn+"-32").onclick=function()
									{
										myStopFunction();
										document.getElementById(tn+"-32").onclick="";
										document.getElementById(tn+"-32").style.animation="moveSpatula1 1.5s forwards";
										setTimeout(function()
										{
											document.getElementById(tn+"-32").style="position:absolute; left:480px; top:300px; width:105px;";
											document.getElementById(tn+"-32").style.animation="moveSpatula2 0.25s forwards";
											setTimeout(function()
											{
												$("#"+tn+"-31").fadeOut(0);
												$("#"+tn+"-32").fadeOut(0);
												document.getElementById(tn+"-33").style.visibility="visible";
												document.getElementById(tn+"-34").style.visibility="visible";
												document.getElementById(tn+"-34").style.animation="moveSpatula3 2.5s forwards";
												setTimeout(function()
												{
													myInt = setInterval(function(){ animatearrow(); }, 500);
													document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:190px; top:195px; height: 30px; z-index: 10;";
													document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
													// Code for IE9
													document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
													// Standard syntax
													document.getElementById("arrow1").style.transform = "rotate(270deg)";
													document.getElementById(tn+"-34").onclick=function()
													{
														myStopFunction();
														document.getElementById(tn+"-34").onclick="";
														document.getElementById(tn+"-34").style="position:absolute; left:145px; top:165px; width:105px;";
														document.getElementById(tn+"-34").style.animation="rotSpatula1 1.5s forwards";
														setTimeout(function()
														{
															document.getElementById(tn+"-35").style.visibility="visible";
															document.getElementById(tn+"-35").style.animation="fallKI 2s forwards";
															setTimeout(function()
															{
																document.getElementById(tn+"-34").style.visibility="hidden";
																setTimeout(function()
																{
																	if(tn==1)
																		document.getElementById(tn+"-1weight").innerHTML="&nbsp;&nbsp;1.000 g";
																	if(tn==3)
																		document.getElementById(tn+"-1weight").innerHTML="&nbsp;&nbsp;10.000 g";
																	
																	setTimeout(function()
																	{
																		document.getElementById("nextButton").style.visibility="visible";
																		if(tn==3)
																		{
																																																											document.getElementById("nextButton").style.visibility="hidden";
																				validateAnswer(1,0,"100px","100px");
																		}
																	},500);
																},2000);
															},150);								
														},1500);
													}
												},2600);
											},250);
										},1500);
									}
								},1000);
							});
						},2500);
					});
				});
			});
		},500);
}

function step2and4()
{
	setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:375px; height: 35px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(0deg)";
			$("#"+tn+"-21").on('click',function(){
				myStopFunction();
				$("#"+tn+"-21").css({"visibility":"hidden"});
				$("#"+tn+"-22").css({"visibility":"visible"});
				$("#"+tn+"-22").animate({"position":"absolute","left":"185px"},1000,
					function(){
						$("#"+tn+"-22").css({"visibility":"hidden"});
						$("#"+tn+"-23").css({"visibility":"visible"});
						$("#"+tn+"-24").css({"visibility":"visible"});
						setTimeout(function()
						{
							$("#"+tn+"-14").animate({"position":"absolute","top":"345px"},2000);
							$("#"+tn+"-24").animate({"position":"absolute","top":"355px"},2000);
							setTimeout(function()
							{
									$("#"+tn+"-23").hide();
									$("#"+tn+"-24").hide();
									setTimeout(function()
									{
										$("#"+tn+"-31").css({"visibility":"visible"});
										myInt = setInterval(function(){ animatearrow(); }, 500);
										document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:170px; top:165px; height: 35px; z-index: 10;";
										document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
										// Code for IE9
										document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
										// Standard syntax
										document.getElementById("arrow1").style.transform = "rotate(180deg)";
										$("#"+tn+"-31").on('click',function()
										{
											myStopFunction();
											$("#"+tn+"-31").animate({"position":"absolute","top":"215px"},1500,
												function()
												{
													$("#"+tn+"-31").css({"position":"absolute","top":"215px","left":"185px"});
													document.getElementById(tn+"-31").style.animation="stirring 1s 3";
													setTimeout(function()
													{
														$("#"+tn+"-11").css({"visibility":"hidden"});
															setTimeout(function(){
																$("#"+tn+"-31").animate({"position":"absolute","top":"100px"},1500,
																	function()
																	{
																		$("#"+tn+"-31").hide();
																		setTimeout(function()
																		{
																			document.getElementById(tn+"-42").style.visibility="visible";
																			document.getElementById(tn+"-42").style.animation="name1 2.5s forwards";
																			setTimeout(function()
																			{
																				document.getElementById(tn+"-42").style.visibility="hidden";
																				document.getElementById(tn+"-41").style.visibility="visible";
																				document.getElementById("nextButton").style.visibility="visible";
																			},2500);
																		},500);
																	}
																);
															},3000);
													},750);
												}
											);
										});
									},500);
							},2500);
						},500);
					}
				);
			});
		},500);
}

function suck5mlfromsolution2()
{
	$("#5-51").fadeIn(500,
	function()
	{
		myInt=setInterval(function(){animatearrow();},500);
		document.getElementById("arrow1").style="visibility:visible; position:absolute; left:590px; top:220px; height:35px; z-index:10;";
		document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
		document.getElementById("arrow1").style.msTransform="rotate(180deg)";
		document.getElementById("arrow1").style.transform="rotate(180deg)";
		$("#5-51").click(function()
		{
			myStopFunction();
			$("#5-51").css({"visibility":"hidden"});
			$("#5-52").css({"visibility":"visible"});
			$("#5-52").animate({"position":"absolute","left":"270px"},1500,
			function()
			{
				document.getElementById("p5-1").innerHTML="Press the up arrow on pipette bulb </br>to take the liquid up in to the pipette.";
				document.getElementById("p5-1").style.visibility="visible";
				$("#5-52").animate({"position":"absolute","top":"170px"},500,
				function()
				{
					document.getElementById("5-58").style.visibility="visible";
					$("#5-24").animate({"position":"absolute","top":"355px"},1000);
					$("#5-58").animate({"position":"absolute","top":"260px"},1000,
					function()
					{
						document.getElementById("p5-1").style.visibility="hidden";
						$("#5-58").animate({"position":"absolute","top":"170px"},300);
						$("#5-52").animate({"position":"absolute","top":"80px"},300,
						function()
						{
							$("#5-58").animate({"position":"absolute","left":"480.5px","top":"190px"},1000);
							$("#5-52").animate({"position":"absolute","left":"465px","top":"100px"},1000,
							function()
							{
								document.getElementById("p5-1").innerHTML="Press the down arrow to release</br> the liquid up in to the pipette.";
								document.getElementById("p5-1").style.visibility="visible";
								$("#5-58").animate({"position":"absolute","top":"400px"},750);
								$("#5-34").animate({"position":"absolute","top":"380px"},1000,
								function()
								{
									document.getElementById("5-52").style.visibility="hidden";
									document.getElementById("5-58").style.visibility="hidden";
									document.getElementById("p5-1").style.visibility="hidden";
									addDistilledWater();
								});
							});
						});			
					});
				});
			});
		});
	});
}

function addDistilledWater()
{
	$("#5-11").css({"visibility":"hidden"});
	$("#5-12").css({"visibility":"hidden"});
	$("#5-13").css({"visibility":"hidden"});
	$("#5-14").css({"visibility":"hidden"});
	$("#5-21").css({"visibility":"hidden"});
	$("#5-22").css({"visibility":"hidden"});
	$("#5-23").css({"visibility":"hidden"});
	$("#5-24").css({"visibility":"hidden"});
	$("#5-48").css({"visibility":"hidden"});
	$("#5-58").css({"visibility":"hidden"});
	//flipping an image bottle3.png
	document.getElementById("5-61").style.WebkitTransform="scaleX(-1)";
	document.getElementById("5-61").style.msTransform="scaleX(-1)";
	document.getElementById("5-61").style.transform="scaleX(-1)";
	setTimeout(function()
	{
	$("#5-61").css({"visibility":"visible"});
	$("#5-62").css({"visibility":"visible"});
		setTimeout(function()
		{
			myInt=setInterval(function(){animatearrow();},500);
			document.getElementById("arrow1").style="visibility:visible; position:absolute; left:340px; top:385px; height:35px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
			document.getElementById("arrow1").style.msTransform="rotate(180deg)";
			document.getElementById("arrow1").style.transform="rotate(180deg)";
			$("#5-61").on('click',function()
			{	
				myStopFunction();
				document.getElementById("5-61").onclick="";
				$("#5-64").css({"visibility":"visible"});
				$("#5-62").animate({"position":"absolute","top":"355px"},1500);
				$("#5-34").animate({"position":"absolute","top":"345px"},2500,
					function()
					{
						$("#5-64").css({"visibility":"hidden"});
						$("#5-61").css({"visibility":"hidden"});
						$("#5-62").css({"visibility":"hidden"});
						$("#nextButton").css({"visibility":"visible"});
					}
				);
				
			});
		},500);
	},500);
}

function step8and9and10and11()
{
	setTimeout(function()
	{
		myInt=setInterval(function(){animatearrow();},500);
		document.getElementById("arrow1").style="visibility:visible; position:absolute; left:192px; top:265px; height:35px; z-index:10;";
		document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
		document.getElementById("arrow1").style.msTransform="rotate(180deg)";
		document.getElementById("arrow1").style.transform="rotate(180deg)";
		$("#"+tn+"-2").on('click',function()
		{
			myStopFunction();
			document.getElementById(tn+"-2").onclick="";
			$("#"+tn+"-2").css({"visibility":"hidden"});
			$("#"+tn+"-3").css({"visibility":"visible"});
			$("#"+tn+"-3").animate({"position":"absolute","top":"150px"},250,
			function()
			{
				$("#"+tn+"-3").animate({"position":"absolute","left":"300px","top":"370px"},1500,
				function()
				{
					$("#"+tn+"-3").css({"visibility":"hidden"});
					$("#"+tn+"-4").css({"visibility":"visible"});
					setTimeout(function()
					{
						myInt=setInterval(function(){animatearrow();},500);
						document.getElementById("arrow1").style="visibility:visible; position:absolute; left:490px; top:430px; height:35px; z-index:10;";
						document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
						document.getElementById("arrow1").style.msTransform="rotate(180deg)";
						document.getElementById("arrow1").style.transform="rotate(180deg)";
						$("#"+tn+"-6").on('click',function()
						{
							myStopFunction();
							document.getElementById(tn+"-6").onclick="";
							$("#"+tn+"-6").css({"visibility":"hidden"});
							$("#"+tn+"-7").css({"visibility":"visible"});
							$("#"+tn+"-7").animate({"position":"absolute","left":"180px","top":"75px"},2000,
							function()
							{
								$("#"+tn+"-7").animate({"position":"absolute","top":"180px"},1000,
								function()
								{
									$("#"+tn+"-7").css({"visibility":"hidden"});
									$("#"+tn+"-8").css({"visibility":"visible"});
									if(tn==8)
									{
										document.getElementById(tn+"-12").innerHTML="0.030";
									}
									if(tn==9)
									{
										document.getElementById(tn+"-12").innerHTML="97.00";
									}
									setTimeout(function()
									{
										myInt=setInterval(function(){animatearrow();},500);
										document.getElementById("arrow1").style="visibility:visible; position:absolute; left:320px; top:465px; height:35px; z-index:10;";
										document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
										document.getElementById("arrow1").style.msTransform="rotate(180deg)";
										document.getElementById("arrow1").style.transform="rotate(180deg)";
										$("#"+tn+"-4").on('click',function()
										{
											myStopFunction();
											document.getElementById(tn+"-4").onclick="";
											$("#"+tn+"-4").css({"visibility":"hidden"});
											$("#"+tn+"-3").css({"visibility":"visible"});
											$("#"+tn+"-3").animate({"position":"absolute","left":"180px","top":"130px"},1500,
												function()
												{
													$("#"+tn+"-3").animate({"position":"absolute","top":"155px"},650,
														function()
														{
															$("#"+tn+"-3").css({"visibility":"hidden"});
															$("#"+tn+"-9").css({"visibility":"visible"});
															if(tn==8)
															{
																setToZero();
															}
															if(tn==9)
															{
																setToHundred();
															}
															if(tn==10)
															{
																document.getElementById(tn+"-12").innerHTML="41.60";
																document.getElementById("p10-1").style.visibility="visible";
																setTimeout(function()
																{
																	removeTubeFromMeter();
																},750);
															}
															if(tn==11)
															{
																document.getElementById("p11-1").style.visibility="visible";
																document.getElementById(tn+"-12").innerHTML="0.020";
																setTimeout(function()
																{
																	removeTubeFromMeter();
																},750);
															}
														}
													);
												}
											);
										});
									},500);
								}
							);
						});
					});
				},500);
			});
		  });
		});
	},500);	
}

function setToZero()
{
	myInt=setInterval(function(){animatearrow();},500);
	document.getElementById("arrow1").style="position:absolute; left:228px; top:422px; height:30px; z-index:10px; visibility:visible;";
	document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
	document.getElementById("arrow1").style.msTransform="rotate(180deg)";
	document.getElementById("arrow1").style.transform="rotate(180deg)";
	$("#8-13").on('click',function()
	{
		myStopFunction();
		document.getElementById("8-13").onclick="";
		$("#8-13").css({"visibility":"hidden"});
		$("#8-14").css({"visibility":"visible"});
		setTimeout(function()
		{
			document.getElementById("8-12").innerHTML="0.000";
			$("#8-14").css({"visibility":"hidden"});
			$("#8-15").css({"visibility":"visible"});
			setTimeout(function()
			{
				$("#8-15").css({"visibility":"hidden"});
				removeTubeFromMeter();
			},750);
		},250);
	});
}

function setToHundred()
{
	myInt=setInterval(function(){animatearrow();},500);
	document.getElementById("arrow1").style="position:absolute; left:225px; top:352px; height:30px; z-index:10px; visibility:visible;";
	document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
	document.getElementById("arrow1").style.msTransform="rotate(180deg)";
	document.getElementById("arrow1").style.transform="rotate(180deg)";
	$("#9-13").on('click',function()
	{
		myStopFunction();
		document.getElementById("9-13").onclick="";
		$("#9-13").css({"visibility":"hidden"});
		$("#9-14").css({"visibility":"visible"});
		setTimeout(function()
		{
			document.getElementById("9-12").innerHTML="100.00";
			$("#9-14").css({"visibility":"hidden"});
			$("#9-15").css({"visibility":"visible"});
			setTimeout(function()
			{
				$("#9-15").css({"visibility":"hidden"});
				removeTubeFromMeter();
			},750);
		},250);
	});
}

function removeTubeFromMeter()
{
	myInt=setInterval(function(){animatearrow();},500);
	document.getElementById("arrow1").style="visibility:visible; position:absolute; left:192px; top:265px; height:35px; z-index:10;";
	document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
	document.getElementById("arrow1").style.msTransform="rotate(180deg)";
	document.getElementById("arrow1").style.transform="rotate(180deg)";
	$("#"+tn+"-9").on('click',function()
	{
		myStopFunction();
		document.getElementById(tn+"-9").onclick="";
		$("#"+tn+"-9").css({"visibility":"hidden"});
		$("#"+tn+"-3").css({"visibility":"visible"});
		$("#"+tn+"-3").animate({"position":"absolute","top":"150px"},250,
		function()
		{
			$("#"+tn+"-3").animate({"position":"absolute","left":"300px","top":"370px"},1500,
			function()
			{
				$("#"+tn+"-3").css({"visibility":"hidden"});
				$("#"+tn+"-17").css({"visibility":"visible"});
				setTimeout(function()
				{
					myInt=setInterval(function(){animatearrow();},500);
					document.getElementById("arrow1").style="visibility:visible; position:absolute; left:245px; top:225px; height:35px; z-index:10;";
					document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
					document.getElementById("arrow1").style.msTransform="rotate(270deg)";
					document.getElementById("arrow1").style.transform="rotate(270deg)";
					$("#"+tn+"-8").on('click',function()
					{
						myStopFunction();
						document.getElementById(tn+"-8").onclick="";
						$("#"+tn+"-8").css({"visibility":"hidden"});
						$("#"+tn+"-7").css({"visibility":"visible"});
						$("#"+tn+"-7").animate({"position":"absolute","top":"80px"},650,
						function()
						{
							$("#"+tn+"-7").animate({"position":"absolute","left":"482.5px","top":"315px"},1500,
							function()
							{
								$("#"+tn+"-7").css({"visibility":"hidden"});
								$("#"+tn+"-18").css({"visibility":"visible"});
								setTimeout(function()
								{
									myInt=setInterval(function(){animatearrow();},500);
									document.getElementById("arrow1").style="visibility:visible; position:absolute; left:320px; top:460px; height:35px; z-index:10;";
									document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
									document.getElementById("arrow1").style.msTransform="rotate(180deg)";
									document.getElementById("arrow1").style.transform="rotate(180deg)";
									$("#"+tn+"-17").click(function()
									{
										myStopFunction();
										$("#"+tn+"-17").click(function(){});
										$("#"+tn+"-17").css({"visibility":"hidden"});
										$("#"+tn+"-3").css({"visibility":"visible"});
										$("#"+tn+"-3").animate({"position":"absolute","left":"180px","top":"130px"},1500,
										function()
										{
											$("#"+tn+"-3").animate({"position":"absolute","top":"155px"},300,
											function()
											{
												$("#"+tn+"-3").css({"visibility":"hidden"});
												$("#"+tn+"-16").css({"visibility":"visible"});
												if(tn==10)
												{
													document.getElementById("p"+tn+"-1").style.visibility="hidden";
													document.getElementById("nextButton").style.visibility="visible";
												}
												if(tn==11)
												{
													document.getElementById("p"+tn+"-1").style.visibility="hidden";
													validateAnswer(0,1,"150px","100px");
												}
												if(tn==8 || tn==9)
												{
													document.getElementById("nextButton").style.visibility="visible";
												}
											});
										});
									});
								},500);
							});
						});
					});
				},500);
			});	
		});
	});
}

function checkInference()
{
	var str;
	document.getElementById("ans").style.visibility="visible";
	if($("input[name='inf']:checked").val()==1)
	{
		document.getElementById("ans").innerHTML="Correct answer!";
	}
	else
	{
		document.getElementById("ans").innerHTML="Wrong! Answer is less than 1NTU";
	}

	setTimeout(function()
	{
		document.getElementById("inference").style.visibility="hidden";
		str1="suitable";
		str1=str1.fontcolor("green");
		str2="not suitable";
		str2=str2.fontcolor("red");
		document.getElementById("infAns").innerHTML="Acceptable limit for turbidity in water is below 1NTU. </br>The water sample 1 taken has turbidity = 41.6NTU which is greater than the acceptable limit, so it is "+str2+" for drinking.</br> The water sample 2 has 0.02NTU which is in the acceptable limit, so it is "+str1+" for drinking.";
		$("#infAns").fadeIn(750);
	},1000);
}
