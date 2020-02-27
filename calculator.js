
/*document.getElementById("textarea").addEventListener("keyup", function(display(e));*/
/*{
  event.preventDefault();
  alert("Was preventDefault() called: " + event.defaultPrevented);
});*/
function num_all(a){
	var evnt = event || a;
	console.log(evnt);
	var ar,ar1;
	ar = [48,49,50,51,52,53,54,55,56,57,8,13,46,47,42,40,41,94,45,43,37];//for without numpad 
	ar1 = [48,49,50,51,52,53,54,55,56,57,8,13,110,111,106,219,221,27,96,97,98,99,100,101,102,103,104,105,106,107,109,110,111]; //for with numpad 
	console.log(evnt.keyCode);
	/*console.log(ar);*/
	var qw=ar.includes(evnt.keyCode) || ar1.includes(evnt.keycode) ;
	console.log(qw);
	if (qw!=true) {
	/*console.log('qw');*/
		return false;
	}
/*	ar.forEach(dontwrite);
	
	let f = e.keycode;
	if (!(for f in ar)) {
		this.preventDefault();
		alert("action was prevented");
	}
	function dontwrite(value){
		/*alert("h");
		if ( value == a.keycode ) {
			this.preventDefault();
			alert("prevented");
		}
	}*/
	
}
function display(e){
		document.getElementById("textarea").value += e;
}
function cal(o){
	//var arr = ['/','*','+','-'];
	var vari=document.getElementById("textarea").value;
	var y=vari.length;
	var ex=vari[y-1];
	//var ex=ex-1;
	if( ex=='+' || ex=='-' || ex=='*' || ex=='/' || ex=='^' ) {  
		vari=vari.substring(0,vari.length-1);
		//document.getElementById("textarea").innerHTML=vari;	
		document.getElementById("textarea").value =  vari + o;	
	}
	else{
		document.getElementById("textarea").value += o;
	}
}
function solve(){
	vari=document.getElementById("textarea").value;
	lst_ele=vari.substring(vari.length-1);
	if (lst_ele=='+' || lst_ele=='-' || lst_ele=='*' || lst_ele=='/' || lst_ele=='^') {
		let z=vari.substring(0,vari.length-1);	
		let a=eval(z);
		document.getElementById("textarea").value=a;}
	else{
		let x=document.getElementById("textarea").value;  
		let y= eval(x);
		document.getElementById("textarea").value=y;}
}	
function reset(e){
	if (e=='ce') {
		document.getElementById("textarea").value="";}
	else if(e=='c'){ 
		let vari = document.getElementById("textarea").value;
		vari = vari.substring(0,vari.length -1);
		document.getElementById("textarea").value=vari;
		/*document.getElementById("textarea").value += "";*/
	}	
}
/*function blinking(){
	setInterval(blinktext, 500);
        var txt = "";
        var count = 0;
        function blinktext() {
            var cntrl = document.getElementById("txtblinkingtext");
            if (count == 0)
                txt = cntrl.value;
            if (count % 2 == 0)
                cntrl.value = "";
            else
                cntrl.value = txt;
            count++;
        }
        let i= setInterval(pointer_blink, 2000);
        let count=1;
        function pointer_blink(){
           	if(!count%2){document.getElementById("textarea").value += '|'; }
           	else{let vari =document.getElementById("textarea").value;
        	document.getElementById("textarea").value = vari.substring(0,vari.length-1); 
        }
        	count++;
		    /*let vari =document.getElementById("textarea").value ;
			let cur=vari.substring(vari.length-1);
			document.getElementById("textarea").value += vari;
		    vari="" ;
			document.getElementById("textarea").value += vari;
			if(count>100){
				clearInterval(i);
			}
		}
}*/
/*ar = [48(0),49(1),50(2),51(3),52(4),53(5),54(6),55(7),56(8),57(9),8(backspace),13(enter),(46.),47/,42*,40(,41),94^,45-,43+,37%];//for without numpad 
	ar = [48(0),49(1),50(2),51(3),52(4),53(5),54(6),55(7),56(8),57(9),8(backspace),13(enter),(110.),(111/),(106*),219(,221),27esc] //for with numpad /*96,97,98,99,100,101,102,103,104,105,106,107,109,110,111*/
////add blinking pointer------>>>>>done
////after solving begin with zero value
////if pressed C delete the last value------->>>>done
////if last char is point, and next char is operator then add 2 zeroes at the end 