# EXPLANATION

    In the page "/index.php?page=feedback"
    Our goal is to inject a script in the form. Exp:  **<script>alert("salam")</script>**
    In the name field if we insert just "script" we get the flag. And that's not even an XSS injection.

# Utility

    XSS attacks occur when an attacker uses a web application to send malicious script, generally in the form of a browser side script. The malicious script can access any cookies, session tokens, or other sensitive information retained by the browser and used with that site.

# How to protect?

    At the point where user input is received, filter as strictly as possible based on what is expected or valid input.