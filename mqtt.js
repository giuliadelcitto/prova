function MQTT(){
	var host = "demo.thingsboard.io"
	var token = "N2AxGgvu8vkscRonykTT"
	var client_id = "da0dfbc0-9142-11ea-a3df-b1bca87d6c8b"
	// Create a client instance
	var mqtt    = require('mqtt');
	var count =0;
	var client  = mqtt.connect(host ,{clientId: client_id});
	console.log("connected flag  " + client.connected);

	//handle incoming messages
	client.on('message',function(topic, message, packet){
		console.log("message is "+ message);
		console.log("topic is "+ topic);
	});


	client.on("connect",function(){	
	console.log("connected  "+ client.connected);

	})
	//handle errors
	client.on("error",function(error){
	console.log("Can't connect" + error);
	process.exit(1)});
}
	//publish
	
function publish(topic,msg,options){
	console.log("publishing",msg);

	if (client.connected == true){
		
	client.publish(topic,msg,options);

	}
	count+=1;
	if (count==2) //ens script
		clearTimeout(timer_id); //stop timer
		client.end();	
}


