$(document).ready(function() {
	document.getElementById('select-order1').onchange=function(){
		var sw = document.getElementById('select-order1').value;
		document.getElementById('quantity1').value = 1;
		if(sw=="salami")
			document.getElementById('price1').value = 2.00;
		else if(sw=="grandma")
			document.getElementById('price1').value = 2.00;
		else if(sw=="salmon")
			document.getElementById('price1').value = 3.00;
		else if(sw=="royal")
				document.getElementById('price1').value = 2.00;
		else if(sw=="meaty")
				document.getElementById('price1').value = 3.50;
		else if(sw=="surprise")
				document.getElementById('price1').value = 3.00;
		else if(sw=="bronze")
				document.getElementById('price1').value = 12.00;
		else if(sw=="silver")
				document.getElementById('price1').value = 17.00;
		else if(sw=="gold")
				document.getElementById('price1').value = 25.00;
		document.getElementById('total-price1').value = document.getElementById('price1').value;
	};

	document.getElementById('quantity1').onchange=function(){
		var qt = document.getElementById('quantity1').value;
		var pr = document.getElementById('price1').value;
		document.getElementById('total-price1').value = qt*pr;
	};

});
