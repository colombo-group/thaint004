// JavaScript Document
	var x=0;
	var y=0;
	function number1(){
		document.getElementById("result").value += "1";
	}
	
	function number2(){
		document.getElementById("result").value += "2";
	}
	
	function number3(){
		document.getElementById("result").value += "3";
	}
	
	function number4(){
		document.getElementById("result").value += "4";
	}
	
	function number5(){
		document.getElementById("result").value += "5";
	}
	
	function number6(){
		document.getElementById("result").value += "6";
	}
	
	function number7(){
		document.getElementById("result").value += "7";
	}
	
	function number8(){
		document.getElementById("result").value += "8";
	}
	
	function number9(){
		document.getElementById("result").value += "9";
	}

	function number0(){
		document.getElementById("result").value += "0";
	}
	
	function number00(){
		document.getElementById("result").value += "00";
	}
	
	function cong(){
		document.getElementById("result").value += "+";
	}
	
	function tru(){
		document.getElementById("result").value += "-";
	}
	
	function nhan(){
		document.getElementById("result").value += "*";
	}
	
	function chia(){
		document.getElementById("result").value += "/";
	}
	
	function cham(){
		document.getElementById("result").value += ".";
	}
	
	function dau(){
		document.getElementById("result").value += "-";
	}
	
	function phan_tram(){
		document.getElementById("result").value += "%";
	}
	
	function xoa(){
		document.getElementById("result").value = document.getElementById("result").value.substr(0, document.getElementById("result").value.length-1);
	}
	
	function reset(){
		document.getElementById("result").value ='';
	}
	
	function kq(){
		document.getElementById("result").value = eval(document.getElementById("result").value);
	}

