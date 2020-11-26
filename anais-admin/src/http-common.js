import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
    'Access-Control-Allow-Origin': '*',
    'Accept' : 'application/json, text/plain, */*',
    'Access-Control-Allow-Methods' : 'GET, PUT, POST, DELETE, OPTIONS',
    'Access-Control-Allow-Credentials' : true
  }
});
