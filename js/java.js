
function sum()
{
	var a=document.getElementById("text1").value;
	var b=document.getElementById("text2").value;
	var rd1=document.getElementById("rd1");
	var rd2=document.getElementById("rd2");
	if(rd1.checked==true || rd2.checked==true)
	{
	    if(a=="Prasant" && b=="123")
		{
			document.getElementById("one").innerHTML="Loging in with selected language "+rd1.value;
        }
        else
        document.getElementById("one").innerHTML="Failed due to invalid user id or password";
     } 
     else
     	document.getElementById("one").innerHTML="check for language";

}