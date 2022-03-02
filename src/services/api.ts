import SpotifyWebApi from "spotify-web-api-js";

export const spotify = new SpotifyWebApi();


const CLIENT_ID = '7cfefcdfc70546dd8583763869ce7a78';
//const CLIENT_SECRET = '0b85d1a54afa41dfb086733f7c3e092f';
const REDIRECT_URI = 'http://localhost:3000';
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token'
//const SCOPE = 'user-read-private user-read-email';

export const auth = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}`;
