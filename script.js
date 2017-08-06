console.log(localStorage.getItem('setlink'))
var skyValue = localStorage.getItem('setlink')
var sphereColor = localStorage.getItem('color')
var color
if (sphereColor === "lightblue") {
    color = "#5190ad"
}
else if (sphereColor === "pink") {
    color = "#a8527a"
}
else if (sphereColor === "purple") {
    color = "#64447a"
}
document.getElementById("a-home").setAttribute("src", skyValue)
document.getElementById("motivation").setAttribute("src", skyValue)
document.getElementById("breathe").setAttribute("src", skyValue)
document.getElementById("clickme").setAttribute("color", color)
document.getElementById("clickme2").setAttribute("color", color)
document.getElementById("clickme3").setAttribute("color", color)
document.getElementById("breath").setAttribute("color", color)
document.getElementById("breath2").setAttribute("color", color)
document.getElementById("breath3").setAttribute("color", color)
document.getElementById("breath4").setAttribute("color", color)
document.getElementById("q").setAttribute("color", color)
document.getElementById("q2").setAttribute("color", color)

function home(){
    window.location.reload()
}
document.getElementById("clickme").addEventListener('click',function(){
    document.getElementById('scene2').setAttribute('visible', 'false')
    document.getElementById('scene3').setAttribute('visible', 'true')
    console.log("hi")
 })
 document.getElementById("clickme2").addEventListener('click',function(){
    document.getElementById('scene2').setAttribute('visible', 'false')
    document.getElementById('scene4').setAttribute('visible', 'true')
    console.log("hi")
 })
 
 


// Breathe Text Functions

//     var timer = setInterval(changeText,6000);
    // 
//  function changeText(){
//     var breathIn = document.getElementById("in")
//     if(breathIn.getAttribute("value")==="Breathe in."){
//         breathIn.setAttribute("value","Breathe out.")
//     }
//     //  if(breathIn.getAttribute("value")=="Breathe out."){
//     //     breathIn.setAttribute("value","Breathe in.")
//     // }
//     console.log(breathIn.getAttribute("value"))
//     console.log("Breathe In")
// }
// function breatheText(){
//     var timer = setInterval(changeText,6000);
    
// }

// API for Quotes
 var categories=["inspire", "life", "love", "art"]
function quote(){
   
    var rand= Math.floor(Math.random()*categories.length);
    var randCategory = categories[rand];
    console.log(randCategory)
    var quoteEndpoint = `https://quotes.rest/qod.json?category=${randCategory}`;
 console.log(quoteEndpoint)
    var h;
    var quote;
    var quotePath;
    var quoteNumber;
    fetch(quoteEndpoint)
        .then(function(data) {
            return data.json()
        })
        .then(function(json) {
            //  quoteNumber = Math.floor((Math.random() * 800) + 0);
            console.log(json)
                //pull out just the image link that wew want
            quotePath = json.contents.quotes["0"].quote
            console.log(quotePath)
                // make a new image in our html
            // h = document.createElement("h2")
            // quote = document.createTextNode(quotePath)
            console.log(quotePath)
                // set the image's path
            var text = document.getElementById("quoteText");
            console.log(text)
            text.setAttribute("value",quotePath)
            // document.appendChild(text)
            // quoteText.setAttribute("value","quote")
        })
}

function test(){
    console.log("it works!")
    var quote = "marley rox"
}