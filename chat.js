var socket = io('http://793c56ac.ngrok.io/');// 
var user = JSON.parse(localStorage.getItem('userinfo')).name;

$("#submitChatText").click(function(e){
	console.log("=------------------ e",e);
	e.preventDefault();
	// socket.on('news', function (data) {
 	// console.log(data);
 	var text = $("#chatinput").val(); 	
 	if(text){
 		console.log(" --------------------------- socket emit sendInfo -------------------------");
		socket.emit('sendInfo',{sendText:text,name:user});
		$("#chatinput").val("")
	}
  	// });
});	



socket.on('getInfo',function(data){
 	console.log(" --------------------------- socket on getInfo  -------------------------",data);
	var element = document.createElement('div');
	var divContent = data.data.name + " : " + data.data.sendText;

	var newContent = document.createTextNode(divContent); 
 	element.appendChild(newContent);
 	var storeElement = document.getElementById("storeConversation");
 	storeElement.appendChild(element); 
})