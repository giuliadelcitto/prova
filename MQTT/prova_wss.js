function prova() {
	var token = "N2AxGgvu8vkscRonykTT";
	var entityId = "da0dfbc0-9142-11ea-a3df-b1bca87d6c8b";
	var webSocket = new WebSocket("wss://demo-thingsboard.io/api/ws/plugins/telemetry?token=" + token);

	if (entityId === "YOUR_DEVICE_ID") {
		alert("Invalid device id!");
		webSocket.close();
	}

	if (token === "YOUR_JWT_TOKEN") {
		alert("Invalid JWT token!");
		webSocket.close();
	}

	webSocket.onopen = function () {
		var object = {
			tsSubCmds: [
				{
					entityType: "DEVICE",
					entityId: entityId,
					scope: "LATEST_TELEMETRY",
					cmdId: 10
				}
			],
			historyCmds: [],
			attrSubCmds: []
		};
		var data = JSON.stringify(object);
		webSocket.send(data);
		alert("Message is sent: " + data);
	};

	webSocket.onmessage = function (event) {
		var received_msg = event.data;
		alert("Message is received: " + received_msg);
	};

	webSocket.onclose = function (event) {
		alert("Connection is closed!");
	};
}
