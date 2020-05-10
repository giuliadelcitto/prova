/*
	* MQTT-WebClient example for Web-IO 4.0
*/
var hostname = "demo.thingsboard.io";
var port = 1883;
var clientId = "N2AxGgvu8vkscRonykTT";
var username = "";
var password = "";
var topic = "v1/devices/me/telemetry";

mqttClient = new Paho.MQTT.Client(hostname, port, clientId);
mqttClient.onConnectionLost = ConnectionLost;

Connect();

/*Initiates a connection to the MQTT broker*/
function Connect(){
	mqttClient.connect({
	onSuccess: Connected,
	onFailure: ConnectionFailed,
	keepAliveInterval: 10,
	userName: username,
	useSSL: true,
	password: password});
}

/*Callback for successful MQTT connection */
function Connected() {
	document.getElementById("con_status").innerHTML = "Connected" ;
	mqttClient.subscribe(topic);
	document.getElementById("sub_status").innerHTML = "Subscribe" ;
}

/*Callback for failed connection*/
function ConnectionFailed(res) {
	document.getElementById("con_status").innerHTML = "Connect failed: " + res.errorMessage;
}

/*Callback for lost connection*/
function ConnectionLost(res) {
	if (res.errorCode !== 0) {
		document.getElementById("con_status").innerHTML = "Connection lost: " + res.errorMessage;
		Connect();
	}
}

