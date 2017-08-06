var backgrounds = 0
var color = localStorage.getItem('color')
var background1 = localStorage.getItem('background1')
var background2 = localStorage.getItem('background2')
var background3 = localStorage.getItem('background3')
var wor = localStorage.getItem('wor')
document.getElementById("wor").innerHTML = wor
var sett = localStorage.getItem('sett')
document.getElementById("set").innerHTML = sett

function userBubble() {
var x = document.getElementById("userInput").value;
    document.getElementById("userText").innerHTML = x
    
}

function userGO() {
  if (document.getElementById("userInput").value != "" && document.getElementById("userInput").value != " ") {
  document.getElementById("userInput").value = ""
    document.getElementById("userText").innerHTML = "POOF!"
    
}
}

// var setlink = localStorage.getItem('setlink')
// document.getElementById("a-home").setAttribute("src", "sky-beach")

document.getElementById("col").innerHTML = color
var mus = localStorage.getItem('mus')
document.getElementById("mus").innerHTML = mus
document.getElementById("setting").style.backgroundImage = background1
document.getElementById("music").style.backgroundImage = background2
document.getElementById("worry").style.backgroundImage = background3
document.getElementById("colors").style.background = color
var slideIndex = 1
var slideIndex2 = 1
var slideIndex3 = 1
var slideIndex4 = 1



$(window).scroll(function(e){
  parallax();
});
function parallax(){
  var scrolled = $(window).scrollTop();
  $('#begin').css('top',-(scrolled*0.2) +'px');
  

 
}

function popUp() {
    var popup = document.getElementById("button2");
    popup.style.display = "inline-block"
    popup.innerHTML = " BEGIN NOW"
    var popup2 = document.getElementById("button");
    popup2.innerHTML = "CUSTOMIZE"
    popup2.setAttribute("onclick", "window.location.href='#customize'")
    document.getElementById("or").style.display = "inline-block"
}



function showSlides(n) {  
  slideIndex += n
  if (slideIndex > 3) {
    slideIndex = 1
  }
  if (slideIndex < 1) {
    slideIndex = 3
  }
  if (slideIndex == 1) {
    var color = "pink"
  }
  else if (slideIndex == 2){
     var color = "lightblue"
  }
  else if (slideIndex == 3){
    var color = "purple"
  }
  
 localStorage.setItem("color", color);
  console.log(localStorage.getItem('color'))
  document.getElementById("col").innerHTML= color
   document.getElementById("colors").style.background = color
  
}

function showSlides2(n) {  
  slideIndex2 += n
  if (slideIndex2 > 3) {
    slideIndex2 = 1
  }
  if (slideIndex2 < 1) {
    slideIndex2 = 3
  }
  if (slideIndex2 == 1) {
    var background1 =  "url(images/mountains)"
     sett = "MOUNTAINS"
     setlink = "#sky-mountain"
  }
  else if (slideIndex2 == 2){
      var background1 = "url(images/ocean.jpg)"
       sett = "OCEAN"
        setlink = "#sky-beach"
  }
  else if (slideIndex2 == 3){
    var background1 = "url(images/space.jpeg)"
     sett = "SPACE"
     setlink = "#sky-stars"
  }
  
 localStorage.setItem("background1", background1);
 localStorage.setItem("sett", sett);
localStorage.setItem("setlink", setlink);
 document.getElementById("set").innerHTML = sett
// document.getElementById("a-home").setAttribute("src", "#sky-beach")
  console.log(localStorage.getItem('setlink'))
   document.getElementById("setting").style.backgroundImage = background1
  
}

function showSlides3(n) {  
  slideIndex3 += n
  if (slideIndex3 > 3) {
    slideIndex3 = 1
  }
  if (slideIndex3 < 1) {
    slideIndex3 = 3
  }
  if (slideIndex3 == 1) {
    var background2 =  "url(images/wave.jpg)"
    mus = "WAVES"
  }
  else if (slideIndex3 == 2){
      var background2 = "url(images/tranquil.jpg)"
      mus = "TRANQUIL"
  }
  else if (slideIndex3 == 3){
    var background2 = "url(images/calm.jpeg)"
    mus = "INSPIRATIONAL"
  }
  
 localStorage.setItem("background2", background2);
 localStorage.setItem("mus", mus);
  console.log(localStorage.getItem('background2'))
   document.getElementById("music").style.backgroundImage = background2
   document.getElementById("mus").innerHTML = mus
  
}


function showSlides4(n) {  
  slideIndex4 += n
  if (slideIndex4 > 3) {
    slideIndex4 = 1
  }
  if (slideIndex4 < 1) {
    slideIndex4 = 3
  }
  if (slideIndex4 == 1) {
    var background3 =  "url(images/work.jpg)"
    wor = "WORK"
  }
  else if (slideIndex4 == 2){
      var background3 = "url(images/school.jpg)"
       wor = "SCHOOL"
  }
  else if (slideIndex4 == 3){
    var background3 = "url(images/people.jpg)"
     wor = "PEOPLE"
  }
  
 localStorage.setItem("background3", background3);
 localStorage.setItem("wor", wor);
 
  console.log(localStorage.getItem('background3'))
  document.getElementById("wor").innerHTML = wor
   document.getElementById("worry").style.backgroundImage = background3
  
}


function openNav() {
 document.body.style['overflow-y'] = 'hidden';
  document.getElementById("mySidebar").style.width = "100%";
  document.getElementById("mySidebar").style.display = "block";
 
  document.getElementById("navButton").style.display = "none";
   document.getElementById("closeButton").style.display = "block";
}
function closeNav() {
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("navButton").style.display = "block";
   document.getElementById("closeButton").style.display = "none";
 document.body.style['overflow-y'] = 'scroll';
}