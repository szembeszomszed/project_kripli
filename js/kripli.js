var main = function() {

    var lives = 3;
    var level = 1;
    
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

    function isFinished() {

        if ($("#player").is(":visible")) {
            
            var playerPosition = getPosition($("#player"));
            var playerX = playerPosition.x;
            var playerY = playerPosition.y;

            var finishPosition = getPosition($("#finish"));
            var finishX = finishPosition.x;
            var finishY = finishPosition.y;        

            for (var i = 0; i < 50; i++) {
                for (var j = 0; j < 50; j++) {
                    for (var k = 0; k < 30; k++) {
                        for (var l = 0; l < 30; l++) {
                            if (playerX + i == finishX + k && playerY + j == finishY + l) {
                                $("#player").hide();
                                return true; 
                            }
                        }
                    }
                }
            } 
        }
    }

    function isCrashed() {

        if ($("#player").is(":visible")) {

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
               //console.log("in position"); 
                for (var i = 0; i < 50; i++) {
                    for (var j = 0; j < 50; j++) {
                        for (var k = 0; k < 30; k++) {
                            for (var l = 0; l < 30; l++) {
                                if (playerX + i == thing1X + k && playerY + j == thing1Y + l) {
                                    $("#player").hide();
                                    return true;
                                    /*
                                    $("#thing1").css("background-color", "black");
                                    setInterval(function() {
                                        $("#thing1").css("background-color", "red");
                                    }, 800);
                                    */
                                }
                            }
                        }
                    }
                }

            } else if (playerY >= 200 && playerY <= 280)  {
                //console.log("in position"); 
                for (var i = 0; i < 50; i++) {
                    for (var j = 0; j < 50; j++) {
                        for (var k = 0; k < 30; k++) {
                            for (var l = 0; l < 30; l++) {
                                if (playerX + i == thing2X + k && playerY + j == thing2Y + l) {
                                    $("#player").hide();
                                    return true;
                                    /*
                                    $("#thing2").css("background-color", "black");
                                    setInterval(function() {
                                        $("#thing2").css("background-color", "yellow");
                                    }, 800);
                                    */
                                }
                            }
                        }
                    }
                }

            } else if (playerY >= 330 && playerY <= 410)  {
                //console.log("in position"); 
                for (var i = 0; i < 50; i++) {
                    for (var j = 0; j < 50; j++) {
                        for (var k = 0; k < 30; k++) {
                            for (var l = 0; l < 30; l++) {
                                if (playerX + i == thing3X + k && playerY + j == thing3Y + l) {
                                    $("#player").hide();
                                    return true;
                                    /*
                                    $("#thing3").css("background-color", "black");
                                    setInterval(function() {
                                        $("#thing3").css("background-color", "brown");
                                    }, 800);
                                    */
                                }
                            }
                        }
                    }
                }

            }  else if (playerY >= 470 && playerY <= 550)  {
                //console.log("in position"); 
                for (var i = 0; i < 50; i++) {
                    for (var j = 0; j < 50; j++) {
                        for (var k = 0; k < 30; k++) {
                            for (var l = 0; l < 30; l++) {
                                if (playerX + i == thing4X + k && playerY + j == thing4Y + l) {
                                    $("#player").hide();
                                    return true;
                                    /*
                                    $("#thing4").css("background-color", "black");
                                    setInterval(function() {
                                        $("#thing4").css("background-color", "green");
                                    }, 800);
                                    */
                                }
                            }
                        }
                    }
                }
                
            } else {
                //console.log("out of position");
            }
        }        
     
    }

    function contactChecks() {

        var finishCheckInterval = setInterval(function() {

            if (!isFinished()) {

                isFinished();

            } else {

                clearInterval(finishCheckInterval);
                console.log("finishCheckInterval cleared");
                clearInterval(crashCheckInterval);
                console.log("crashCheckInterval cleared");
                $("#area").hide();
            
                $("#messagebox").show();
                $("#message").text("Brávó!");
                $("#complevel").text("Teljesített szint: " + level + ".");
                $("#remlives").text("Még " + lives + " életed maradt.");
                level++;
                console.log("level: " + level);

                $("#nextbtn").click(function() {
                    $("#messagebox").hide();
                    levelChoice();
     
                })
            }

        }, 200);

        var crashCheckInterval = setInterval(function() {

            if (!isCrashed()) {

                isCrashed();

            } else {

                clearInterval(finishCheckInterval);
                console.log("finishCheckInterval cleared");
                clearInterval(crashCheckInterval);
                console.log("crashCheckInterval cleared");
                $("#area").hide();

                $("#messagebox").show();
                $("#message").text("Jaj!");
                console.log("level: " + level);
                lives--;
                console.log("lives: " + lives);

                if (lives > 0) {

                    $("#complevel").text("");
                    $("#remlives").text("Még " + lives + " életed maradt.");                   

                    $("#nextbtn").click(function() {
                    $("#messagebox").hide();
                    levelChoice();     
                    });
                
                } else {

                    $("#complevel").text("");
                    $("#remlives").text("Nem maradt több életed, de próbáld meg újra!");

                    $("#nextbtn").click(function() {
                    $("#messagebox").hide();
                    level = 1;
                    lives = 3;
                    console.log("level: " + level);
                    console.log("lives: " + lives);
                    levelChoice(); 
                    });
                }

            }
            
        }, 50);

    }

    function levelChoice() {

        switch(level) {
            case 1:
                console.log("in switch case 1"); 
                $("#area").show();
                $("#player").show();
                $("#player").css({
                    'left' : '0px',
                    'top' : '0px',
                    /*'background-color' : 'red'*/
                });

                $("#finish").show();

                if ($("#thing1").is(':visible')) {
                    $("#thing1").hide();
                }

                if ($("#thing3").is(':visible')) {
                    $("#thing3").hide();
                }

                if ($("#thing4").is(':visible')) {
                    $("#thing4").hide();
                }

                if ($("#thing5").is(':visible')) {
                    $("#thing5").hide();
                }

                if ($("#thing6").is(':visible')) {
                    $("#thing6").hide();
                }


                $("#thing2").show();
                    /*.css({
                    'left' : '0px',
                    'top' : '250px',
                });*/

                if (!$("#thing2").is(':animated')) {
                    animateThis($("#thing2"), 2000);
                }

                contactChecks();

                break;
                
            case 2:
                console.log("in switch case 2"); 
                $("#area").show();
                $("#player").show();
                $("#player").css({
                    'left' : '0px',
                    'top' : '0px',
                    /*'background-color' : 'red'*/
                });
                $("#finish").show();
                $("#thing2").show();
                if (!$("#thing2").is(':animated')) {
                    animateThis($("#thing2"), 2000);
                }

                $("#thing3").show();
                if (!$("#thing3").is(':animated')) {
                    animateThis($("#thing3"), 1500);
                }

                contactChecks();

                break;

            case 3:
                console.log("in switch case 3"); 
                $("#area").show();
                $("#player").show();
                $("#player").css({
                    'left' : '0px',
                    'top' : '0px',
                });
                $("#finish").show();

                $("#thing1").show();
                if (!$("#thing1").is(':animated')) {
                    animateThis($("#thing1"), 2000);
                }

                $("#thing2").show();
                if (!$("#thing2").is(':animated')) {
                    animateThis($("#thing2"), 2000);
                }

                $("#thing3").show();
                if (!$("#thing3").is(':animated')) {
                    animateThis($("#thing3"), 1500);
                }

                contactChecks();

                break;

        }

    }

    $("#startbtn").click(function() {
        $("#welcome").hide();
        levelChoice();

        /*
        $("#area").show();
        $("#player").show();
        $("#finish").show();
        $("#thing2").show();
        animateThis($("#thing2"), 2000);*/
    });







    //animateThis($('#thing1'), 2000);
    //animateThis($('#thing2'), 1800);
    //animateThis($('#thing3'), 1600);
    //animateThis($('#thing4'), 1400);
    /*
    setInterval(function() {
        displayPosition($("#player"), $("#pinfo"));
        displayPosition($("#thing1"), $("#t1info"));
        displayPosition($("#thing2"), $("#t2info"));
        displayPosition($("#thing3"), $("#t3info"));
        displayPosition($("#thing4"), $("#t4info"));
    }, 10);
    */

    // talán lehetne úgy, hogy a nextbtn-re történő klikkeléskor mindig meghívunk egy 
    // switchet, ami a level változó alapján eldönti, hogy melyik pálya következzen
    // LEVEL 1-RE VALÓ VISSZATÉRÉSKOR IS KELL A CHECKPOSITION
    // LEVEL 2 HOZZÁADÁSA A SWITCHHEZ + TEST
    // FÜGGVÉNYEK MEGHÍVÁSÁNAK HARMONIZÁLÁSA

    
   
}

$(document).ready(main);