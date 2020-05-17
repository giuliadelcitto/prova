function onConnect(){
	alert("connected");
	//msg=new Paho.MQTT.Message("prova");
	//msg.destinationName = "v1/devices/me/telemetry";
	//mqtt.send(msg);
}

function onFailure(e){
	alert("connection to host fail " + e.errorMessage);
	//setTimeout(prova, 2000);
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    alert("onConnectionLost:"+responseObject.errorMessage);
  }
}

function prova(){
	var mqtt;
	var reconnectTimeout = 2000;
	var connected = false;
	var host ="192.168.1.139";
	//var host ="tequila";
	//var host = "127.0.0.1"
	var client = "N2AxGgvu8vkscRonykTT";
	var topic="v1/devices/me/telemetry";
	alert("connection to "+host);
	
	try{
		mqtt = new Paho.MQTT.Client(host, Number(9000), "/wss", "client");
		mqtt.onConnectionLost = onConnectionLost;
	
		alert("connecting to " + host);
		var options = {
			timeout: 10,
			onSuccess: onConnect,
			onFailure: onFailure,
		};
		
		mqtt.connect(options);
	}
	catch(e){
		alert("catch Error" + e.name);
		alert("catch Error" +  e.message);
	}
	
	
}
