function getdata(){
	var prec=0;
	var act=0;
	var l=[];
	var i=0;
	var d =0;
	var r=0;
	let sensor = new Accelerometer({frequency: 1});
	sensor.start();
	sensor.onreading = () => {
		l[0]= sensor.x.toFixed(2) ;
		l[1]= sensor.y.toFixed(2) ;
		l[2]= sensor.z.toFixed(2) ;
		document.getElementById('status').innerHTML = "Acceleration: \tx: " + l[0] +"\ty: " + l[1] + "\tz: " + l[2];
		act=Math.sqrt(l[0]^2 + l[1]^2 + l[2]^2 ).toFixed(2);
		
		d = Math.abs(act - prec).toFixed(2);
		if ( d > 9){
			i = i+1;
			document.getElementById('status_act').innerHTML = "Activity: RUNNING w:  " + i  + " r: " + r ;
		}else if (d > 5){
			r=r+1;
			document.getElementById('status_act').innerHTML = "Activity: WALKING w:  " + i + " r: " + r ;
		}else{
			document.getElementById('status_act').innerHTML = "Activity: STANDING w:  " + i  + " r: " + r ;
		}
		prec = act;
	};
	sensor.onerror = event => {
		document.getElementById('status').innerHTML = "Error Name" + event.error.name + "Error Message " + event.error.message;
	};

}
