# EXPLANATION

In the members search page 

We can get all the DB users by searching "1 or 1 = 1"

By using UNION we can try to get more crucial information from **information_schema** which is a DB  used to store details of other databases on the server.

To get all the columns of the users table:
`1 or 1 = 1 UNION SELECT TABLE_NAME,COLUMN_NAME FROM information_schema.columns`
The users table columns are : user_id, first_name, last_name, town, country, planet, Commentaire, countersign

After knowing the users table columns, the most important query is:
`1 or 1 = 1 UNION SELECT Commentaire,countersign FROM users`
It contains an instruction 

We decrypt the countersign and it gives "FortyTwo" after lowering all the chars and then encrypting using SH256 we get the flag:
===> 10a16d834f9b1e4068b25c4c46fe0284e99e44dceaf08098fc83925ba6310ff5

# Utility

Get important infos from the DB.

# HOW TO AVOID ?

**Use prepared statements and parameterized queries** These are SQL statements that are sent to and parsed by the database server separately from any parameters. This way it is impossible for an attacker to inject malicious SQL.
Example using PDO:

    ```PHP
    $stmt = $pdo->prepare('SELECT * FROM users WHERE name = :name');

    $stmt->execute([ 'name' => $name ]);

    foreach ($stmt as $row) {
        // Do something with $row
    }
    ```