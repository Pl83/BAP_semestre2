const express = require('express');
const cors = require('cors');
const http = require('http');
const app = express();
const {Server} = require("socket.io");

const httpServer = http.createServer(app);

const port = 3000;

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:cViz2xBYEcCRvsfN@chaville.z1utclu.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });




const io = new Server(httpServer, {
    cors : {
        origin : '*'
    }
});


console.log("Server is running on port " + port);

var cursor = null;
var DataCommerce = [];

function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

async function zad() {
    try {
        await client.connect();
      // database and collection code goes here
        const db = client.db("maps");
        const coll = db.collection("commerces");
        console.log("Connected to database");
      // find code goes here
      // iterate code goes here
        // await cursor.forEach(console.log);
        // DataCommerce = 2;
        // convertire le curseur en tableau
        console.log("to array");
        let result = await coll.find({}).toArray();
        // console.log("result", result);

        return result;
        
    } finally {
      // Ensures that the client will close when you finish/error
        console.log("end");
    }
}


// middelware
app.use(express.json());
app.use(cors());

// routes
app.get('/', (req, res) => {
    res.send({"message":"hello world"});
    console.log("send");
});
app.get('/data', async (req, res) => {
    let data = await zad();
    console.log('coucou', data)
    res.send(data);
    console.dir("intel ====================");
});
app.post('/mail', (req, res) => {
    console.log(req.body);
    

    const qrcode = require('qrcode');

    const options = {
        width: 300,
        height: 300,
        margin: 1,
        color: {
            dark: '#000000',
            light: '#ffffff'
        }
    };

    let textu = 'Code promo de 5 % sur la prochaine commande de ' + req.body.usermail + '. Id:' + generateRandomString(8)
    console.log(textu);
    
    qrcode.toDataURL(textu, options, function (err, url) {
        console.log(url);
        res.send({"message":url});
    });
    

    

    //res.send({"message":textu});

    // var nodemailer = require('nodemailer');

    // var transporter = nodemailer.createTransport({
    // service: 'gmail',
    // auth: {
    //     user: 'bot.coding.456@gmail.com',
    //     pass: 'botcoding456!'
    // }
    // });

    // var mailOptions = {
    // from: 'bot.coding.456@gmail.com',
    // to: req.body,
    // subject: 'Promotion',
    // text: 'That was easy!'
    // };

    // transporter.sendMail(mailOptions, function(error, info){
    // if (error) {
    //     console.log(error);
    // } else {
    //     console.log('Email sent: ' + info.response);
    // }
    // });
});



httpServer.listen(port, () => {
    console.log(`On écoute le port n°${port}`)
});

