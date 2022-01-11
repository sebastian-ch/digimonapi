var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let db = new sqlite3.Database('db.sqlite3');
let sql = 'SELECT * from myapi_digimon'


var port = 3000;


var router = express.Router();


router.get('/', function (req, res) {
    db.all(sql, [], (err, digimon) => {
        if (err) { throw err }
        res.json({ digimon });
    })

});

app.use('/digimon', router);


app.listen(port);
console.log('Magic happens on port ' + port);

