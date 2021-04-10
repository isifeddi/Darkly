# EXPLANATION

In http://10.12.100.44/?page=media&src=nsa

We notice an html object tag that takes in the data attribute the content of the  src query param in the url. 
I encrypted <script>alert("salam")</script> to base64 and injected it the url

Also it's needed to add the header **data:text/html;base64** at the beginning so the url would look like this 

http://10.12.100.44/?page=media&src=data:text/html;base64,PHNjcmlwdD5hbGVydCgic2FsYW0iKTwvc2NyaXB0Pg==

# UTILITY

XSS attacks occur when an attacker uses a web application to send malicious script, generally in the form of a browser side script. The malicious script can access any cookies, session tokens, or other sensitive information retained by the browser and used with that site.

# HOW TO AVOID ?

In this case avoid inserting url params values directly into object data attribute.
Save references to the pictures positions in a DB table. And then link from there.