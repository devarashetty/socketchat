var socket = io('http://793c56ac.ngrok.io/');

$("#loginForm").submit(function(event) {
	event.preventDefault();
	var text = $("#username").val();
	console.log("000000000000000000000 text",text);
	if(text){
		window.location.href= "/chat";
	}
	
	let obj = {
		name:text,
		sendText:""
	};

	localStorage.setItem("userinfo",JSON.stringify(obj));

	socket.emit('addUser', { name:text })
})	