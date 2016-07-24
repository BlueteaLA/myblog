$(function(){
	/* 小屏头部动画 */
	var $menu=$(".header .min-nav .nav .menu");
	var $navList=$(".header .min-nav .nav-list");
	var ch=document.documentElement.clientHeight;;
	
	$menu.click(function(){
		$(window).resize(function(){
			ch=document.documentElement.clientHeight;
		})
		var ids=$(this).attr("id");
		if(ids=="active"){
			$(this).removeAttr("id");
			$navList.height(0)
		}else{
			$(this).attr("id","active");
			$navList.height(ch-48)
		}
	})
	
	/* 小屏链接动画 */
	var $cols=$(".link .cols");
	var $uls=$(".link ul");
	var $h3s=$(".link h3");
	$h3s.click(function(){
		var idss=$(this).attr("id");
		var index=$(this).index(".link h3");
		if(idss=="active"){
			$(this).removeAttr("id");
			$uls.eq(index).removeAttr("id");
		}else{
			$(this).attr("id","active");
			$uls.eq(index).attr("id","active");
		}
	})


	// 轮播图
	var $ban=$(".banner");
	var $banImg=$(".banner .items");
	var $banLis=$(".banner .banner-lis li");
	var $banBtn=$(".banner .banner-btn div");
	var now=0;
	var next=0;

	var flag=true;
	$banImg.css({left:"100%"}).eq(now).css({left:0});
	$banLis.eq(now).attr("id","hot");
	var banT=setInterval(moveLeft,2000);
	$ban.mouseover(function(){
		clearInterval(banT);
	});
	$ban.mouseout(function(){
		banT=setInterval(moveLeft,2000);
	})

	$banLis.click(clickFn);

	$banBtn.eq(0).click(function(){
		if(flag){
			flag=false;
			moveRight();
		}
	})

	$banBtn.eq(1).click(function(){
		if(flag){
			flag=false;
			moveLeft();
		}
	})

	function moveLeft(){
		next++;
		if(next==$banImg.length){
			next=0;
		}
		$banLis.removeAttr("id");
		$banLis.eq(next).attr("id","hot");
		$banImg.eq(next).css({left:"100%"});
		$banImg.eq(now).animate({left:"-100%"});
		$banImg.eq(next).animate({left:0},function(){
			flag=true;
		});
		now=next;
	}

	function moveRight(){
		next--;
		if(next<0){
			next=$banImg.length-1;
		}
		$banLis.removeAttr("id");
		$banLis.eq(next).attr("id","hot");
		$banImg.eq(next).css({left:"-100%"});
		$banImg.eq(now).animate({left:"100%"});
		$banImg.eq(next).animate({left:0},function(){
			flag=true;
		});
		now=next;
	}

	function clickFn(){
		var $index=$(this).index();
		console.log($index)
		$banLis.removeAttr("id");
		$banLis.eq($index).attr("id","hot");
		if($index>now){
			$banImg.eq($index).css({left:"100%"});
			$banImg.eq(now).animate({left:"-100%"});
			$banImg.eq($index).animate({left:0});
		}
		if($index<now){
			$banImg.eq($index).css({left:"-100%"});
			$banImg.eq(now).animate({left:"100%"});
			$banImg.eq($index).animate({left:0});
		}
		now=next=$index;
	}
	console.log($ban)
})