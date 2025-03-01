function validate_form()
{
	var validatePwd;
	if(document.Myform.psw1.value != document.Myform.psw2.value)
	{
		alert("Password not Matching");
		document.Myform.psw2.focus();
		document.Myform.psw2.select();
		return validatePwd=false;
	}
	else
	{
		swal({
		icon: "success",
		title: "SUCCESS",
		text: "Congratulations your account has been successfully created.",
		type: "success"
		}).then(function() 
		{
			window.location="index.html";
		});
		return validatePwd=false;
	}
}
function checkform()
{
		var name1=document.Myform.fname.value;
		var name2=document.Myform.lname.value;
		var numb=document.Myform.pnumber.value;
		var mail=document.Myform.email.value;
		var birth=document.Myform.bdate.value;
		var user=document.Myform.uname.value;
		var p1=document.Myform.psw1.value;
		var p2=document.Myform.psw2.value;
		if(name1 == "")
		{
			alert("One feild are missing")
		}
		else if(name2 == "")
		{
			alert("One feild are missing")
		}
		else if(numb == "")
		{
			alert("One feild are missing")
		}
		else if(mail == "")
		{
			alert("One feild are missing")
		}
		else if(birth == "")
		{
			alert("One feild are missing")
		}
		else if(user == "")
		{
			alert("One feild are missing")
		}
		else if(p1 == "" || p2 == "")
		{
			alert("Please Crate Password");
		}
}
function login()
{
	var logname=document.loginform.logname.value;
	var logpwd=document.loginform.logpwd.value;
	if(logname != "" && logpwd != "")
	{
		$(document).ready(function()
		{
			$(".div3").hide();
		});
	}
}

