var main = function() {
    
    // player's moves
    $(document).keydown(function(event) {
        switch (event.which) {
            // left arrow
            case 37:
                if ($("#player").position().left >= 10) {
                    $("#player").finish().animate({left: "-=10"});
                }
                break;
            // up arrow
            case 38:
                if ($("#player").position().top >= 10) {
                    $("#player").finish().animate({top: "-=10"});
                }
                break;
            // right arrow
            case 39:
                if ($("#player").position().left <= 740) {
                    $("#player").finish().animate({left: "+=10"});
                }
                break;
            // down arrow
            case 40:
                if ($("#player").position().top <= 540) {
                    $("#player").finish().animate({top: "+=10"});
                }
                break;
        }
    });

    // get elements' position
    function getPosition(element) {
        var x = Math.round(element.position().left);
        var y = Math.round(element.position().top);

        return {
            x: x,
            y: y
        }
    }

    // display elements' position
    function displayPosition(element, field) {
        var x = Math.round(element.position().left);
        var y = Math.round(element.position().top);
        $(field).text("x:" + x + " y:" + y);
    }

    // things' moves
    function animateThis(targetElement, time) {

        targetElement.animate({left: "+=770px"},
        {
            duration: time,
            complete: function() 
            {
                targetElement.animate({left: "-=770px"},
                {
                    duration: time,
                    complete: function() 
                    {
                        animateThis(targetElement, time);
                        
                    }
                });
            }
        });        
    }

    //animateThis($('#thing1'), 2000);
    //animateThis($('#thing2'), 1800);
    //animateThis($('#thing3'), 1600);
    //animateThis($('#thing4'), 1400);

    setInterval(function(){
        displayPosition($("#player"), $("#pinfo"));
        displayPosition($("#thing1"), $("#t1info"));
        displayPosition($("#thing2"), $("#t2info"));
        displayPosition($("#thing3"), $("#t3info"));
        displayPosition($("#thing4"), $("#t4info"));
    }, 10);

    setInterval(function() {
        var playerPosition = getPosition($("#player"));
        var playerX = playerPosition.x;
        var playerY = playerPosition.y;
        
        var thing1Position = getPosition($("#thing1"));
        var thing1X = thing1Position.x;
        var thing1Y = thing1Position.y;

        var thing2Position = getPosition($("#thing2"));
        var thing2X = thing2Position.x;
        var thing2Y = thing2Position.y;

        var thing3Position = getPosition($("#thing3"));
        var thing3X = thing3Position.x;
        var thing3Y = thing3Position.y;
        
        var thing4Position = getPosition($("#thing4"));
        var thing4X = thing4Position.x;
        var thing4Y = thing4Position.y;

        if (playerY >= 50 && playerY <= 130) {
           console.log("in position"); 
            for (var i = 0; i < 50; i++) {
                for (var j = 0; j < 50; j++) {
                    for (var k = 0; k < 30; k++) {
                        for (var l = 0; l < 30; l++) {
                            if (playerX + i == thing1X + k && playerY + j == thing1Y + l) {
                                $("#thing1").css("background-color", "black");
                                setInterval(function() {
                                    $("#thing1").css("background-color", "red");
                                }, 800);
                            }
                        }
                    }
                }
            }

        } else if (playerY >= 200 && playerY <= 280)  {
            console.log("in position"); 
            for (var i = 0; i < 50; i++) {
                for (var j = 0; j < 50; j++) {
                    for (var k = 0; k < 30; k++) {
                        for (var l = 0; l < 30; l++) {
                            if (playerX + i == thing2X + k && playerY + j == thing2Y + l) {
                                $("#thing2").css("background-color", "black");
                                setInterval(function() {
                                    $("#thing2").css("background-color", "yellow");
                                }, 800);
                            }
                        }
                    }
                }
            }

        } else if (playerY >= 330 && playerY <= 410)  {
            console.log("in position"); 
            for (var i = 0; i < 50; i++) {
                for (var j = 0; j < 50; j++) {
                    for (var k = 0; k < 30; k++) {
                        for (var l = 0; l < 30; l++) {
                            if (playerX + i == thing3X + k && playerY + j == thing3Y + l) {
                                $("#thing3").css("background-color", "black");
                                setInterval(function() {
                                    $("#thing3").css("background-color", "brown");
                                }, 800);
                            }
                        }
                    }
                }
            }

        }  else if (playerY >= 470 && playerY <= 550)  {
            console.log("in position"); 
            for (var i = 0; i < 50; i++) {
                for (var j = 0; j < 50; j++) {
                    for (var k = 0; k < 30; k++) {
                        for (var l = 0; l < 30; l++) {
                            if (playerX + i == thing4X + k && playerY + j == thing4Y + l) {
                                $("#thing4").css("background-color", "black");
                                setInterval(function() {
                                    $("#thing4").css("background-color", "purple");
                                }, 800);
                            }
                        }
                    }
                }
            }
            
        } else {
            console.log("out of position");
        }   
        
    }, 200);


    /*
    function calcDistance (obj1, obj2) {
        var x = $(obj1).offset().left - $(obj2).offset().left;
        var y = $(obj1).offset().top - $(obj2).offset().top;
        console.log(x);
        console.log(y);
        if (x == 0 && y == 0) {
            alert("Ooops!");
        }
    }

    while ($("#player").position().top > 50 && $("#player").position().top < 150) {
        calcDistance($("#player"), $("#thing1"));
    } 
    */   
}

$(document).ready(main);