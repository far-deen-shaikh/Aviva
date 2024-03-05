const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.set('trust proxy', true);
app.use(express.json());

app.get('/',(req, res) => {

    res.send("Hi Fardeen");
});

const port = 3000;

app.listen(port, () =>{

    console.log(`server is up and running on : ${port}`);
})
