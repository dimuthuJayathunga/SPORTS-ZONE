function RequiredN() {
//var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
		alert("First Name must be filled");
		return false;
  }
  let z = document.forms["myForm"]["Lname"].value;
  if (z == ""){
		alert("Last Name not filled");
		return false;
  }
  let y = document.forms["myForm"]["email"].value;
  if (y == "" ){
		alert("Email not filled");
		return false;
 } //else if (!filter.test(email.value)) {
	   // alert("Please provide a valid email address");
		//email.focus;
		//return false;
 // }
  
  let q = document.forms["myForm"]["Details"].value;
	if (q == ""  ){
		alert("Details not filled");
		return false;
  }
	let radios = document.getElementsByName("yesno");
		var formValid = false;{

		var i = 0;
   while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }

		if (!formValid) alert("Must check some option!");
		return formValid;
	}
 }
 
  function showInput() {
		var e =document.getElementById("user_input5");
		var f =document.getElementById("user_input6");
		var g =document.getElementById("user_input7");
		
		//if (e.checked == true){
		//var subject = "Delivery";
		//}
		//if (f.checked == true){
		//var subject = "Return Products";
		//}
		//if (g.checked == true){
		//var subject = "Other";
		//}

        document.getElementById('display').innerHTML = ("Name:"+ document.getElementById("user_input").value);
		document.getElementById('display3').innerHTML = ("Last Name:"+ document.getElementById("user_input3").value);			
        document.getElementById('display2').innerHTML = ("Email:"+ document.getElementById("user_input2").value);	
		document.getElementById('display4').innerHTML = ("Details:"+ document.getElementById("user_input4").value);
		//document.getElementById('display5').innerHTML = ("Subject:"+ document.getElementById("user_input5").value);
					
		
		
}