var players = ["starterAI", "leftAI", "rightAI", "user"]
var currentPlayer = "starterAI"
var mob
var i
var y 
var k
var j

function beginGame() {
    $('#begin').remove();
    $('#instruct').remove();
    

    if (currentPlayer === "starterAI") {
        
        

        var starterAI = document.getElementById("starterAI")

        var animation = document.createElement("a-animation")

        animation.setAttribute("attribute", "position")
        animation.setAttribute("dur", "250")
        animation.setAttribute("easing", "linear")
            // animation.setAttribute("from", "0 1.6 -4")
        animation.setAttribute("to", "0 1.7 -.7")
            // animation.setAttribute("repeat", "1")

        starterAI.appendChild(animation)


        var posObject = document.getElementById("starterAI").getAttribute("position")
        
       

        setTimeout(colorChanger, 250)
        
        
    }


    if (currentPlayer === "user") {
        
       

        i = setTimeout(youLose,1500)
        
        console.log("user: " + currentPlayer)
        

   
document.getElementById("starterAI").addEventListener("click", function(e) {
    console.log(y)
      e.target.removeEventListener(e.type, arguments.callee);
        currentPlayer = "starterAI"
        console.log("current player: " + currentPlayer)
        clearTimeout(i)
       
        beginGame()
    }) 
    
    document.getElementById("rightAI").addEventListener("click", function(e) {
    console.log(y)
      e.target.removeEventListener(e.type, arguments.callee);
        currentPlayer = "rightAI"
        console.log("current player: " + currentPlayer)
        clearTimeout(i)
       
        beginGame()
    }) 
    
    document.getElementById("leftAI").addEventListener("click", function(e) {
    console.log(y)
      e.target.removeEventListener(e.type, arguments.callee);
        currentPlayer = "leftAI"
        console.log("current player: " + currentPlayer)
        clearTimeout(i)
       
        beginGame()
    }) 
        // var starterAI = document.getElementById("starterAI")

        // var animation = document.createElement("a-animation")

        //       animation.setAttribute("attribute", "position")
        //     animation.setAttribute("dur", "200")
        //     animation.setAttribute("easing", "linear")
        //     // animation.setAttribute("from", "0 1.6 -4")
        //     animation.setAttribute("to", "0 2.6 -4")
        //     // animation.setAttribute("repeat", "1")

        //     starterAI.appendChild(animation)


        //   var posObject = document.getElementById("starterAI").getAttribute("position")
        //   console.log(posObject.y)

        //     setTimeout(colorChanger, 500)
       
    }


    if (currentPlayer === "leftAI") {

        var leftAI = document.getElementById("leftAI")

        var animation = document.createElement("a-animation")

        animation.setAttribute("attribute", "position")
        animation.setAttribute("dur", "250")
        animation.setAttribute("easing", "linear")
            // animation.setAttribute("from", "0 1.6 -4")
        animation.setAttribute("to", "-.5 1.7 -.35")
            // animation.setAttribute("repeat", "1")

        leftAI.appendChild(animation)


        var posObject = document.getElementById("leftAI").getAttribute("position")
       

        setTimeout(colorChanger, 250)
    }



    if (currentPlayer === "rightAI") {

        var rightAI = document.getElementById("rightAI")

        var animation = document.createElement("a-animation")

        animation.setAttribute("attribute", "position")
        animation.setAttribute("dur", "250")
        animation.setAttribute("easing", "linear")
            // animation.setAttribute("from", "0 1.6 -4")
        animation.setAttribute("to", ".5 1.7 -.35")
            // animation.setAttribute("repeat", "1")

        rightAI.appendChild(animation)


        var posObject = document.getElementById("rightAI").getAttribute("position")
        
        setTimeout(colorChanger, 250)
    }




}




function colorChanger() {

    var rand = Math.floor(Math.random() * players.length);
    var randplay = players[rand]
    if (randplay === "user") {
        var color = "pink"
    }
    else if (randplay === "starterAI" && currentPlayer != "starterAI") {
        var color = "blue"

    }
    else if (randplay === "starterAI" && currentPlayer === "starterAI") {
        var color = false
    }
    else if (randplay === "leftAI" && currentPlayer != "leftAI") {
        var color = "purple"
    }

    else if (randplay === "leftAI" && currentPlayer === "leftAI") {
        var color = false
    }

    else if (randplay === "rightAI" && currentPlayer != "rightAI") {
        var color = "green"
    }

    else if (randplay === "rightAI" && currentPlayer === "rightAI") {
        var color = false
    }

    if (!color) {
        colorChanger()
    }
    else {
        
     if (currentPlayer === "leftAI" && color != "pink") {
        
          j = setTimeout(youLose, 1500)
          
       
document.getElementById("leftAI").addEventListener("click", function(e) {
        e.target.removeEventListener(e.type, arguments.callee);
        console.log("xxx: " + currentPlayer)
         
        clearTimeout(j)
        
    }) 
    }
    
     if (currentPlayer === "rightAI" && color != "pink") {
        
          k = setTimeout(youLose, 1500)
          
       
document.getElementById("rightAI").addEventListener("click", function(e) {
        e.target.removeEventListener(e.type, arguments.callee);
        console.log("xxx: " + currentPlayer)
         
        clearTimeout(k)
        
    }) 
    }
        

        document.getElementById(currentPlayer).setAttribute("color", color)


        mob = document.getElementById(currentPlayer).getAttribute("color")

        setTimeout(things, 1500)
    }
    
    
}

function things() {
    if (document.getElementById(currentPlayer).getAttribute("color") === "pink") {
        document.getElementById(currentPlayer).setAttribute("color", "#597baf")
        
        currentPlayer = "user"
        console.log("new player: " + currentPlayer)
        
           
        beginGame()
        
    }


    if (document.getElementById(currentPlayer).getAttribute("color") === "blue") {

        document.getElementById(currentPlayer).setAttribute("color", "#597baf")
        
        currentPlayer = "starterAI"
        console.log("new player: " + currentPlayer)
        
           
       
        beginGame()
        
    }


    if (document.getElementById(currentPlayer).getAttribute("color") === "purple") {
        document.getElementById(currentPlayer).setAttribute("color", "#597baf")
        currentPlayer = "leftAI"
        console.log("new player: " + currentPlayer)
           
      
       beginGame()
        
    }

    if (document.getElementById(currentPlayer).getAttribute("color") === "green") {
        document.getElementById(currentPlayer).setAttribute("color", "#597baf")
        currentPlayer = "rightAI"
        console.log("new player: " + currentPlayer)
       
        beginGame()
       
    }


}

function youLose() {
    console.log("you lose")
    window.location.reload();
}


function endGame() {
    players = ["user"]
}



function home() {
    window.location.href = "test.html";
}


function rmw() {
     $('#instruct').remove();
}
// var players = ["starterAI", "leftAI", "rightAI", "user"]
// var currentPlayer = "starterAI"
// var mob
// var i

// function beginGame() {
//     $('#begin').remove();

//     if (currentPlayer === "starterAI") {

//         var starterAI = document.getElementById("starterAI")

//         var animation = document.createElement("a-animation")

//         animation.setAttribute("attribute", "position")
//         animation.setAttribute("dur", "250")
//         animation.setAttribute("easing", "linear")
//             // animation.setAttribute("from", "0 1.6 -4")
//         animation.setAttribute("to", "0 1.7 -.75")
//             // animation.setAttribute("repeat", "1")

//         starterAI.appendChild(animation)


//         var posObject = document.getElementById("starterAI").getAttribute("position")
//         console.log(posObject.y)

//         setTimeout(colorChanger, 250)
        
        
//     }


//     if (currentPlayer === "user") {

//         i = setTimeout(youLose, 2000)
        
       
// document.getElementById("starterAI").addEventListener("click", function() {
//         clicked = "starterAI"
//         console.log(clicked)
//         clearTimeout(i)
//         currentPlayer = "starterAI"
//         beginGame()
//     }) 
    
//     document.getElementById("rightAI").addEventListener("click", function() {
//         clicked = "rightAI"
//         console.log(clicked)
//         clearTimeout(i)
//         currentPlayer = "rightAI"
//         beginGame()
//     })
    
//     document.getElementById("leftAI").addEventListener("click", function() {
//         clicked = "leftAI"
//         console.log(clicked)
//         clearTimeout(i)
//         currentPlayer = "leftAI"
//         beginGame()
//     })
//         // var starterAI = document.getElementById("starterAI")

//         // var animation = document.createElement("a-animation")

//         //       animation.setAttribute("attribute", "position")
//         //     animation.setAttribute("dur", "200")
//         //     animation.setAttribute("easing", "linear")
//         //     // animation.setAttribute("from", "0 1.6 -4")
//         //     animation.setAttribute("to", "0 2.6 -4")
//         //     // animation.setAttribute("repeat", "1")

//         //     starterAI.appendChild(animation)


//         //   var posObject = document.getElementById("starterAI").getAttribute("position")
//         //   console.log(posObject.y)

//         //     setTimeout(colorChanger, 500)
       
//     }


//     if (currentPlayer === "leftAI") {

//         var leftAI = document.getElementById("leftAI")

//         var animation = document.createElement("a-animation")

//         animation.setAttribute("attribute", "position")
//         animation.setAttribute("dur", "250")
//         animation.setAttribute("easing", "linear")
//             // animation.setAttribute("from", "0 1.6 -4")
//         animation.setAttribute("to", "-.85 1.7 0")
//             // animation.setAttribute("repeat", "1")

//         leftAI.appendChild(animation)


//         var posObject = document.getElementById("leftAI").getAttribute("position")
//         console.log(posObject.y)

//         setTimeout(colorChanger, 250)
//     }



//     if (currentPlayer === "rightAI") {

//         var rightAI = document.getElementById("rightAI")

//         var animation = document.createElement("a-animation")

//         animation.setAttribute("attribute", "position")
//         animation.setAttribute("dur", "250")
//         animation.setAttribute("easing", "linear")
//             // animation.setAttribute("from", "0 1.6 -4")
//         animation.setAttribute("to", ".85 1.7 0")
//             // animation.setAttribute("repeat", "1")

//         rightAI.appendChild(animation)


//         var posObject = document.getElementById("rightAI").getAttribute("position")
//         console.log(posObject.y)

//         setTimeout(colorChanger, 250)
//     }




// }




// function colorChanger() {

//     var rand = Math.floor(Math.random() * players.length);
//     var randplay = players[rand]
//     if (randplay === "user") {
//         var color = "pink"
//     }
//     else if (randplay === "starterAI" && currentPlayer != "starterAI") {
//         var color = "blue"

//     }
//     else if (randplay === "starterAI" && currentPlayer === "starterAI") {
//         var color = false
//     }
//     else if (randplay === "leftAI" && currentPlayer != "leftAI") {
//         var color = "purple"
//     }

//     else if (randplay === "leftAI" && currentPlayer === "leftAI") {
//         var color = false
//     }

//     else if (randplay === "rightAI" && currentPlayer != "rightAI") {
//         var color = "green"
//     }

//     else if (randplay === "rightAI" && currentPlayer === "rightAI") {
//         var color = false
//     }

//     if (!color) {
//         colorChanger()
//     }
//     else {

//         document.getElementById(currentPlayer).setAttribute("color", color)


//         mob = document.getElementById(currentPlayer).getAttribute("color")

//         setTimeout(things, 2000)
        
        
         
        
//         if (color != "pink") {
//             i = setTimeout(youLose, 2000)
       
// document.getElementById("starterAI").addEventListener("click", function() {
//         clicked = "starterAI"
//         console.log(clicked)
//         clearTimeout(i)
        
//     }) 
//         }
//     }
// }

// function things() {
//     console.log(mob)
//     console.log(currentPlayer)
//     if (document.getElementById(currentPlayer).getAttribute("color") === "pink") {
//         console.log("hi")
//         document.getElementById(currentPlayer).setAttribute("color", "#597baf")
//         currentPlayer = "user"
//         console.log("new player: " + currentPlayer)
//         beginGame()
//     }


//     if (document.getElementById(currentPlayer).getAttribute("color") === "blue") {

//         console.log("blue")
//         document.getElementById(currentPlayer).setAttribute("color", "#597baf")
        
//         currentPlayer = "starterAI"
//         console.log("new player: " + currentPlayer)
//         beginGame()
//     }


//     if (document.getElementById(currentPlayer).getAttribute("color") === "purple") {
//         console.log("purple")
//         document.getElementById(currentPlayer).setAttribute("color", "#597baf")
//         currentPlayer = "leftAI"
//         console.log("new player: " + currentPlayer)
//         beginGame()
//     }

//     if (document.getElementById(currentPlayer).getAttribute("color") === "green") {
//         console.log("green")
//         document.getElementById(currentPlayer).setAttribute("color", "#597baf")
//         currentPlayer = "rightAI"
//         console.log("new player: " + currentPlayer)
//         beginGame()
//     }


// }

// function youLose() {
//     console.log("you lose")
//     window.location.reload();
// }


// function endGame() {
//     players = ["user"]
// }

// var clicked
// function userGrab() {
    
    
//     if (currentPlayer === "user") {
//     clearInterval(i)
    
//     var j = setTimeout(youLose, 1000)
    
//     document.getElementById("starterAI").addEventListener("click", function() {
//         clicked = "starterAI"
//         console.log(clicked)
        
//     }) 
    
//     document.getElementById("leftAI").addEventListener("click", function() {
//         clicked = "leftAI"
//     }) 
    
//     document.getElementById("rightAI").addEventListener("click", function() {
//         clicked = "rightAI"
//     }) 
//     }
    
    
    
    
    
//     // var j = setTimeout(youLose, 3000)
// }

