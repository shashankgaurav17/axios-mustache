import 'babel-polyfill';
import world from './world';
const axios = require('axios');
const Mustache = require('mustache');

function makeGetRequest() {

  axios.get('http://webcode.me').then(res => {
    // console.log(res.data.login);
    console.log(res);
    var view = {
      name: "Joe",
      occupation: "Web Developer"
    };
    var output = Mustache.render("<div></div>", view);
    document.getElementById('output').innerHTML = output;
    var template = document.querySelector("#template").innerHTML;
    Mustache.parse(template); // optional, speeds up future uses
    var rendered = Mustache.render(template, {
      attr: "data-test",
      attrVal: "test"
    });
    document.querySelector("#target").innerHTML = rendered;
  });
}

makeGetRequest();

document.getElementById('output').innerHTML = `Hello ${world}!`;