# Import QRCode from pyqrcode 
import pyqrcode 
import png 
from pyqrcode import QRCode 
  
  
# String which represents the QR code 
t=["txt", "q&a"]
id_lev=["l1", "l2", "l3", "l4"]
player=["p1" , "p2", "p3", "p4"]

s = "https://giuliadelcitto.github.io/prova/?type="+ t[0] +"&id="+ id_lev[2] + "&id_p=" + player[1]
print(s)
# Generate QR code 
url = pyqrcode.create(s) 
  
# Create and save the svg file naming "myqr.svg" 
url.svg("myqr.svg", scale = 8) 
  
# Create and save the png file naming "myqr.png" 
url.png('myqr.png', scale = 8) 
