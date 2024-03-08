const express = require('express');
const dotenv = require('dotenv');
const { getAccessToken } = require('./utils/apiSettings');
const { default: axios } = require('axios');

dotenv.config();

const app = express();

app.set('trust proxy', true);
app.use(express.json());

const zohoURL = "https://www.zohoapis.com";

app.get('/',(req, res) => {

    res.send("Hi Fardeen");
});

app.post('/api/zoho/aviva', (req, res) => {
    console.log(req.body);

    res.status(200).send({
        payload: req.body,
        message: "Data Transfer Successful"
    });
});

app.get('/api/zoho/aviva/createupdate', async(req, res) => {


    const accessToken = await getAccessToken();

    const payload = {data: [{
        Name: "TestingNew Test",
        Email: "email@randomdomain.ae",
        Mobile_Number: "+971544712370"
    }]};

    const url = `${zohoURL}/crm/v2/Aviva`;

    let headConfig = {
        headers: {
            'Authorization': `Zoho-oauthtoken ${accessToken}`,
            'content-type': 'application/json'
        }
    };

    try{

        const response = await axios.post(url, payload, headConfig);
        res.status(200).send(response.data);

    }catch(err){
        throw err;
    }

})


const port = 3000;

app.listen(port, () =>{

    console.log(`server is up and running on : ${port}`);
})
