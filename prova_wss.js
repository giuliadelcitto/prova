function prova() {
	var token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWxjaXR0by4xNzU0NDk3QHN0dWRlbnRpLnVuaXJvbWExLml0Iiwic2NvcGVzIjpbIlRFTkFOVF9BRE1JTiJdLCJ1c2VySWQiOiIxZjgxYjc1MC02OWM1LTExZWEtOGUwYS03ZDBlZjJhNjgyZDMiLCJmaXJzdE5hbWUiOiJHaXVsaWEiLCJsYXN0TmFtZSI6IkRlbCBDaXR0byIsImVuYWJsZWQiOnRydWUsInByaXZhY3lQb2xpY3lBY2NlcHRlZCI6dHJ1ZSwiaXNQdWJsaWMiOmZhbHNlLCJ0ZW5hbnRJZCI6IjFmNmFkM2YwLTY5YzUtMTFlYS04ZTBhLTdkMGVmMmE2ODJkMyIsImN1c3RvbWVySWQiOiIxMzgxNDAwMC0xZGQyLTExYjItODA4MC04MDgwODA4MDgwODAiLCJpc3MiOiJ0aGluZ3Nib2FyZC5pbyIsImlhdCI6MTU4OTcwODkzNywiZXhwIjoxNTkxNTA4OTM3fQ._Ift8n05fx6Sba5ZecKpYWdNSj06GZYFP8RbDGlg_mcfO0cS3QfnK8gvCdhBpx0BNYmsq35EbkCn6dLRz6MI9w";
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
