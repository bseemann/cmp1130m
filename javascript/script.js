$(document).ready(function(){

var counter=0, $items = $('.slideshow figure'), numItems = $items.length-1;
var showCurrent = function(){
	$items.removeClass('show');
	$items.eq(counter).addClass('show');
};
$('.next').click(function(){
	(counter<numItems)?counter++:counter=0;
   	showCurrent();
});
$('.prev').click(function(){
	(counter)?counter--:counter=numItems;
   	showCurrent();
});
$('scrolltop').click(function(){
	$('html,body').animate({scrollTop:0},600);
	return false;
});

});
