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

// Connexion à la base de données
// client.connect(err => {
//     console.log("Connected to database");
//     if (err) throw err;
//     const collection = client.db("maps").collection("commerce");
    
//     // Récupération des données de la collection "commerce"
//     collection.find({}).toArray((err, result) => {
//         if (err) throw err;
//         if (result.length > 0) {
//             console.log("Data retrieved successfully:");
//             console.log(result);
//             DataCommerce = result;
//         } else {
//             console.log("The collection is empty.");
//         }
//         client.close();
//     });
// });


async function zad() {
    try {
        await client.connect();
      // database and collection code goes here
        const db = client.db("maps");
        const coll = db.collection("commerce");
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
    // app.post('/mail', (req, res) => {
    //     console.log(req.body);
    //     res.send({"message":"ok"});

    //     var nodemailer = require('nodemailer');

    //     var transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: 'bap.chaville@gmail.com',
    //         pass: 'Password01$'
    //     }
    //     });

    //     var mailOptions = {
    //     from: 'bap.chaville@gmail.com',
    //     to: req.body.email,
    //     subject: 'Promotion',
    //     text: 'That was easy!'
    //     };

    //     transporter.sendMail(mailOptions, function(error, info){
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log('Email sent: ' + info.response);
    //     }
    //     });
    // });



httpServer.listen(port, () => {
    console.log(`On écoute le port n°${port}`)
});


