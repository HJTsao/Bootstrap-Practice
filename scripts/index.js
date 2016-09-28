$(document).ready(function(){
	$('#fullpage').fullpage({
		slideSelector:'slidejs',
		onLeave: function(index,nextIndex,direction){
			navbarTransform(nextIndex);
			return true;
		}
	});
	topButtonClick();
	menuButtonClick();
	escapeMenuAreaClick();
	menuPanelClick();
	nextSection();
	menuPanel();

	console.log('ready.');
})

var topButtonClick = function(){
	$('#top').click(function(){
		$.fn.fullpage.moveTo(1);
	});
}

var menuOpen = false;

var menuButtonClick = function(){
	$('#menuButton').click(function(){
		if(menuOpen == false){
			console.log("ayy");
			$('#menu').animate({left:'0'},{duration:200,queue:false});
			$('#escapeMenuArea').fadeIn(200);
			menuOpen = true;
			console.log(menuOpen);
		}
		else{
			$('#menu').animate({left:'-200px'},{duration:200,queue:false});
			$('#escapeMenuArea').fadeOut(200);
			menuOpen = false;
		}
	})
	
}


var escapeMenuAreaClick = function(){
	$('#escapeMenuArea').click(function(){
		console.log("ayyy");
		$('#menu').animate({left:'-200px'},{duration:200,queue:false});
		$('#escapeMenuArea').fadeOut(200);
		menuOpen = false;
	})
}

var menuPanelClick = function(){
	var panelBody = (document).getElementsByClassName('menu-panel');
	console.log(panelBody);
	$(panelBody).click(function(){
		var page = (this).innerHTML
		switch(page){
			case 'Main page':
				$.fn.fullpage.moveTo(1);
				break;
			case 'Grid':
				$.fn.fullpage.moveTo(2);
				break;
			case 'UI':
				$.fn.fullpage.moveTo(3);
				break;
			case 'Carousel':
				$.fn.fullpage.moveTo(4);
				break;
			case 'Start Bootstrap':
				$.fn.fullpage.moveTo(5);
				break;
		}
		$('#menu').animate({left:'-200px'},{duration:200,queue:false});
		$('#escapeMenuArea').fadeOut(200);
		menuOpen = false;
	})
}

var navbarTransform = function(nextIndex){
	if(nextIndex == 1){
		$('#nav').animate({top:"0",color:"white"},{duration:500,queue:false});
		//$('#nav .container').animate({"background-color":"transparent"},{duration:500,queue:false});
	}

	else {
		$('#nav').animate({top:"-8px",color:"black"},{duration:500,queue:false});
		//$('#nav .container').animate({"background-color":"rgba(0,60,120,0.5)"},{duration:500,queue:false});
	}
	return;
}

var menuPanel = function(){
	$('#menuPanel .panel-body').mouseenter(function(){
		$(this).animate({color:"rgb(200,150,0)"},{duration:100,queue:false});
	})
	$('#menuPanel .panel-body').mouseleave(function(){
		$(this).animate({color:"rgb(255,255,255)"},{duration:100,queue:false});
	})
}

var nextSection = function(){
	$('.nextSection').click(function(){
		$.fn.fullpage.moveSectionDown();
	})
}