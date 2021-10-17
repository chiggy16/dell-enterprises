// var attempt = 3;
const express = require("express");
const app = express();

function validate(){
    var username=document.getElementById("Username").value;
    var password=document.getElementById("Password").value;
    // app.get('http://localhost:3000/account.html', (req, res) =>{
    if ( username == "admin" && password == "#123"){
        alert ("Login successful");
        window.open( "a.html"); // Redirecting to other page.
        //res.status(200).send("/a.html");

        // api url
const api_url =
"https://us-central1-virtual-assistance-1.cloudfunctions.net/app/a.html";

// Defining async function
async function getapi(url) {

// Storing response
const response = await fetch(url);

// Storing data in form of JSON
var data = await response.json();
console.log(data);

}
// Calling that async function
getapi(api_url);



        return false;
        }
        else{
            alert("Username or Password incorrect");
            return false;

        }
        // })
}
        
        
