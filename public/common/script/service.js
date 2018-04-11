
import React from 'react';


var conatinerFile ={


registerApi:(value)=>{
	console.log("in register")
	var pattern = /(([a-zA-Z0-9\-?\.?]+)@(([a-zA-Z0-9\-_]+\.)+)([a-z]{2,3}))+$/;
   			 return new RegExp(pattern).test(value);
		}	,

		signupApi: (prop)=>{
			delete prop.confirm;
	console.log(prop)
	$.post('http://localhost:4009/chat_bot/api/v1/user/register',prop).then((result)=>{
		console.log(result)
	})
},
	login:(prop)=>{
		console.log(prop)
		$.post('http://localhost:4009/chat_bot/api/v1/user/login',prop).then((result)=>{
		console.log(result)
	})
	}
}





export default conatinerFile;