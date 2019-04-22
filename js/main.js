import 'babel-polyfill';
import world from './world';
const axios = require('axios');
const Mustache = require('mustache');

function makeGetRequest() {

  console.log(window.location);

  axios.get('http://webcode.me').then(res => {
    // Render HTML coming from backend
    console.log(res);
    document.getElementById('output').innerHTML = res.data;

    // Mushtache Example
    var view = {
      name: "Joe",
      occupation: "Web Developer"
    };
    var output = Mustache.render("{{name}} is a  {{occupation}}", view);
    document.getElementById('test').innerHTML = output;
  });
}

makeGetRequest();

document.getElementById('output').innerHTML = `Hello ${world}!`;