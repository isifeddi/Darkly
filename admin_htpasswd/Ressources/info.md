# EXPLANATION

We check the robots.txt file which is a file that tells search engine crawlers which pages or files the crawler can or can't request from a website.

Two routes are found : /whatever and /.hidden.

When accessing /whatever we find an htpasswd file that contains **root:8621ffdbc5698829397d97767ac13db3** which clearly indicates a "username:password".

After decrypting the password using md5 we have : root:dragon.

Now we need to find a page where we can use these credentials: 

    These are some most used route names for admin access
    www.website.com/administrator
    www.website.com/user
    www.website.com/admin
    www.website.com/login

The "/admin" route  worked , we find the flag after logging in.

# UTILITY

    The .htpasswd wasn't protected by an htaccess. So it was easily accessed :)

# HOW TO AVOID ?

    Protect the directory using an htaccess.
    Be carefull some robots and penetration test robots specifically look for robots.txt files for the very purpose of visiting the disallowed site sections.
