/*function for not allowing unsual paste of characters in display area*/
function noPaste(obj){
	document.getElementById('textarea').addEventListener('paste', handlePaste);
}
/*function for checking content of text to be pasted*/
function handlePaste (e) {
    var clipboardData, pastedData;
    clipboardData = e.clipboardData || window.clipboardData;
    pastedData = clipboardData.getData('Text');
 	pastedData=pastedData.split("");
 	var flag=0;
 	for (var i = 0; i < pastedData.length; i++) {
 		if(check(pastedData[i])== "false"){
 			e.stopPropagation();
    		e.preventDefault();
 			reset('ce');
 			break;
 		}
 	}
 	/*if (flag==0) {

 	}*/
 function check(item){
	var ar2=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
		if ((ar2.includes(item))){
			alert("Alphabets are not allowed!!!!");
			flag=1;
			return("false");
		}
		else{
			return ("true");
		}
    }
}
/*function created to allow only numbers and special characters to be entered thorugh keyboard*/
function num_all(a){
	var evnt = event || a;
	var ar,ar1;
	ar = [48,49,50,51,52,53,54,55,56,57,8,13,46,47,42,40,41,94,45,43,37];//for without numpad 
	ar1 = [48,49,50,51,52,53,54,55,56,57,8,13,110,111,106,219,221,27,96,97,98,99,100,101,102,103,104,105,106,107,109,110,111]; //for with numpad 
	var qw=ar.includes(evnt.keyCode) || ar1.includes(evnt.keycode) ;
	if (evnt.keyCode == 13) {
		solve();
	}
	if (qw!=true) {
		return false;
	}	
}
/*when enter key is pressed while focus is on display area*/
function task(e){
	if(e.keyCode==13){
		solve();}
}
/*function to simply append the numerics*/
function display(e){
		document.getElementById("textarea").value += e;
}
/*if last character is another symbol then is it replaced through this function*/
function cal(o){
	var vari=document.getElementById("textarea").value;
	var y=vari.length;
	var ex=vari[y-1];
	if( ex=='+' || ex=='-' || ex=='*' || ex=='/' || ex=='^' ) {  
		vari=vari.substring(0,vari.length-1);
		document.getElementById("textarea").value =  vari + o;	
	}
	else{
		document.getElementById("textarea").value += o;
	}
}
/*checking the last character if it is a symbol then it is removed and the result is evaluated*/
function solve(){
	vari=document.getElementById("textarea").value;
	lst_ele=vari.substring(vari.length-1);
	if (lst_ele=='+' || lst_ele=='-' || lst_ele=='*' || lst_ele=='/' || lst_ele=='^') {
		let z=vari.substring(0,vari.length-1);	
		let a=eval(z);
		document.getElementById("textarea").value=a;
		history(a);}
	else if(vari==''){
		document.getElementById("textarea").value=0;
	}
	else{
		let x=document.getElementById("textarea").value;  
		let y= eval(x);
		document.getElementById("textarea").value=y;
		history(y);}
}	
/*created to either remove the last character or reset the whole text in display area*/
function reset(e){
	if (e=='ce') {
		document.getElementById("textarea").value="";}
	else if(e=='c'){ 
		let vari = document.getElementById("textarea").value;
		vari = vari.substring(0,vari.length -1);
		document.getElementById("textarea").value=vari;
	}	
}
/*to display the result and previous steps of user*/
var hstry = "";
function history(vari){
	hist=document.getElementById("steps_area").value;
	hist = hist + vari + "\n" ;
	document.getElementById("steps_area").value=hist + "\n";
}
/*to clear the steps area*/ 
function rmv_stps(){
	document.getElementById("steps_area").value = "";
}