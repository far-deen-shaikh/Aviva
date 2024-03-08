const { default: axios } = require("axios");

require('dotenv').config();

exports.getAccessToken = async() => {
    const baseURL = "https://accounts.zoho.com";

    try{

        const response = await axios.post(`${baseURL}/oauth/v2/token?refresh_token=${process.env.ZOHO_REFRESH_TOKEN}&client_id=${process.env.ZOHO_CLIENT_ID}&client_secret=${process.env.ZOHO_CLIENT_SECRET}&redirect_uri=${process.env.ZOHO_REDIRECT_URI}&grant_type=refresh_token`);
        return response.data.access_token

    }catch(err){
        console.log(err);
        throw err;
    }
}