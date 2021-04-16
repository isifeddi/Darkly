# EXPLANATION

In the members sql injection we got to know all the DB tables. Among them there was db_default table in Member_Brute_Force DB wich contains some usernames and passwords

`1 or 1 = 1 UNION SELECT username,password FROM Member_Brute_Force.db_default`

root:3bf1114a986ba87ed28fc1b5884fc2f8      
admin:3bf1114a986ba87ed28fc1b5884fc2f8

But our goal here is to get the password for admin using bruteforce by testing random passwords for admin username, I used a list of 1000 most common passwords , and made a script.

https://github.com/DavidWittman/wpxmlrpcbrute/blob/master/wordlists/1000-most-common-passwords.txt

# UTILITY

A brute force attack can be time consuming, difficult to perform and at impossible. However, if the password is weak it could merely take seconds with hardly any effort. Weak passwords are like shooting fish in a barrel for attackers.

# HOW TO AVOID ?

By not using weak passwords.
Limiting failed login attempts.
Using Captcha.
Unique login URLs can also be used.