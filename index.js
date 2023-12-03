// by @zudsniper & @diogotr7
// ------------------------------------------ //
// 1. Get `sp_dc` cookie from web Spotify app
//     via ripping cookie from 'https://open.spotify.com/'
// 2. Get `bearer token` by exchanging `sp_dc` cookie
//     via 'https://open.spotify.com/get_access_token?reason=transport&productType=web_player'
// 3. Get fwiend listen data
//     via 'https://spclient.wg.spotify.com/presence-view/v1/buddylist'
// Allons-y 🚀🚀🚀
// ------------------------------------------ //

// dependencies

// TODO: get web cookie a better way
const cred = require('./credentials/creds.json');

const axios= require("axios");

const log = console.log;

// 1. get the cookies (cookie jar)

async function hacking() {
    const res0 = await axios.get('https://open.spotify.com/get_access_token?reason=transport&productType=web_player', {
        headers: {
            Cookie: `sp_dc=${cred.sp_dc}`
        }
    });

    const token = res0.data.accessToken;

    log(res0.data);
    log(token);

    const res2 = await axios.get('https://guc-spclient.spotify.com/presence-view/v1/buddylist', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    log("EYO THIS THE RAW DATA 🤤🧧🎫🖼🎪🎋🎗")
    //log(res2.data.friends);
    log(JSON.stringify(res2.data.friends, null, 4));

}

hacking().then(() => console.log('done'));
