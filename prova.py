import paho.mqtt.client as mqtt
import json 
import time 

#check the connection 
def on_connect(client, userdata, flags, rc):
	print("in on connect tb")
	if rc==0:
		client.connected_flag=True #set flag
		print("connected OK")
	else:
		print("Bad connection Returned code=",rc)


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
i=0
while 1:
	i +=1
	msg='{"humidity":' + str(i)+'}'
	client.publish(topic, msg ,0)
	print("pub\n")
	time.sleep(3)


