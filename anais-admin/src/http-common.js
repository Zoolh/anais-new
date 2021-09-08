import axios from "axios";

export default axios.create({
  // TODO : ajouter un .env
  baseURL: "https://anaisl-conseil.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
    'Access-Control-Allow-Origin': '*',
    'Accept' : 'application/json, text/plain, */*',
    'Access-Control-Allow-Methods' : 'GET, PUT, POST, DELETE, OPTIONS',
    'Access-Control-Allow-Credentials' : true
  }
});
