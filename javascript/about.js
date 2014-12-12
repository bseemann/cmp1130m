$(document).ready(function(){
	document.getElementById('content').innerHTML='<object type="text/html" data="about/index.html"></object>';

});

function load_text(obj){
		document.getElementById('content').innerHTML='<object type="text/html" data="about/'+obj+'.html"></object>';
	};


