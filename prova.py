import paho.mqtt.client as mqtt
import json 
import time 

#check the connection 
def tb_on_connect(client, userdata, flags, rc):
	print("in on connect tb")
	if rc==0:
		client.connected_flag=True #set flag
		print("connected OK")
	else:
		print("Bad connection Returned code=",rc)

def tb_con_pub(){
	#One connecttion per message
	#Broker value 127.0.0.1 if in local, demo.thingsboard.io in livedemo version. Port 1883 for the MQTT connection
	broker="demo.thingsboard.io"
	port=1883
	#topic of the publish is the telemetry of the device (Environment_station1). The id is the device access token
	topic="v1/devices/me/telemetry"

	id_client="z5hKTq8bjwvBqGIr5bw3"
		
	passwrd=""
		
	mqtt.Client.connected_flag=False

	if id_client !="" :
		client = mqtt.Client()
		client.username_pw_set(id_client, passwrd)

	print("id_client OK\n")

	#connection and check
	client.connect(broker, port)
	print("post client.connect")
	client.on_connect=on_connect

	while not client.connected_flag :
		client.loop()
		time.sleep(2)
		
	topic="v1/devices/me/telemetry"

	msg='{"humidity":' + str(i)+'}'
	client.publish(topic, msg ,0)
	print("pub\n")
	time.sleep(3)

}


#Note demo scripts have limited or no error detection and use
#timers to wait for events. They assume everything works ok
#www.steves-internet-guide.com
#contact steve@steves-internet-guide.com
##Free to use for any purpose
##If you like and use this code you can
##buy me a drink here https://www.paypal.me/StepenCope
##Grateful for any feedback
#uses websockets publish-subscribe and receive message
import paho.mqtt.client as paho
import time
broker="broker.mqttdashboard.com"
broker="iot.eclipse.org"
broker="192.168.1.206"
#port= 80
#port=1883
port= 9001
sub_topic="house/#"
def on_subscribe(client, userdata, mid, granted_qos):   #create function for callback
   print("subscribed with qos",granted_qos, "\n")
   pass
def on_message(client, userdata, message):
    print("message received  "  ,str(message.payload.decode("utf-8")))
def on_publish(client,userdata,mid):   #create function for callback
   print("data published mid=",mid, "\n")
   pass
def on_disconnect(client, userdata, rc):
   print("client disconnected ok") 
client= paho.Client("client-socks",transport='websockets')       #create client object
#client= paho.Client("control1")
client.on_subscribe = on_subscribe       #assign function to callback
client.on_publish = on_publish        #assign function to callback
client.on_message = on_message        #assign function to callback
client.on_disconnect = on_disconnect
print("connecting to broker ",broker,"on port ",port)
client.connect(broker,port)           #establish connection
client.loop_start()
print("subscribing to ",sub_topic)
client.subscribe(sub_topic)
time.sleep(3)
client.publish("house/bulb1","on")    #publish
time.sleep(4)

client.disconnect()
