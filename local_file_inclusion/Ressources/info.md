# EXPLANATION

When navigating through the website, we can notice the "page" variable in GET method.
We try to display the content of /etc/passwd which is a very critical file . It is the user database, with fields giving the username, real name, home directory, and other information about each user.
we get the flag by going to this route /?page=../../../../../../../etc/passwd

# UTILITY

Local File Inclusion (LFI) allows an attacker to include files on a server through the web browser. This vulnerability exists when a web application includes a file without correctly sanitising the input, allowing and attacker to manipulate the input and inject path traversal characters and include other files from the web server.

The following is an example of PHP code vulnerable to local file inclusion.
```PHP
<?php
   $file = $_GET['file'];
   if(isset($file))
   {
       include("pages/$file");
   }
   else
   {
       include("index.php");
   }
```

# HOW TO AVOID ?

To safely parse user-supplied filenames it’s much better to maintain a whitelist of acceptable filenames and use a corresponding identifier (not the actual name) to access the file. Any request containing an invalid identifier can then simply be rejected. This is the approach that OWASP recommends.