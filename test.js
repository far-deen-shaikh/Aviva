const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.set('trust proxy', true);
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello There From Zoho.");
});

app.post('/api/zoho/aviva', (req, res) => {
    console.log(req.body);

    res.status(200).send({
        payload: req.body,
        message: "Successful"
    });
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server up and running on port: ${port}`);
})