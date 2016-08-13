var main = function() {
    
    // player's moves
    $(document).keydown(function(event) {
        switch (event.which) {
            // left arrow
            case 37:
                if ($("#player").position().left >= 10) {
                    $("#player").finish().animate({left: "-=10"});
                }
                showPosition($("#player"), $("#pinfo"));
                break;
            // up arrow
            case 38:
                if ($("#player").position().top >= 10) {
                    $("#player").finish().animate({top: "-=10"});
                }
                showPosition($("#player"), $("#pinfo"));
                break;
            // right arrow
            case 39:
                if ($("#player").position().left <= 740) {
                    $("#player").finish().animate({left: "+=10"});
                }
                showPosition($("#player"), $("#pinfo"));
                break;
            // down arrow
            case 40:
                if ($("#player").position().top <= 540) {
                    $("#player").finish().animate({top: "+=10"});
                }
                showPosition($("#player"), $("#pinfo"));
                break;
        }
    });

    function showPosition(element, field) {
        var x = Math.round(element.position().left);
        var y = Math.round(element.position().top);
        $(field).text("x:" + x + " y:" + y);
    }

    // things' moves
    function animateThis(targetElement, time) {

        targetElement.animate({marginLeft: "+=770px"},
        {
            duration: time,
            complete: function() 
            {
                targetElement.animate({marginLeft: "-=770px"},
                {
                    duration: time,
                    complete: function() 
                    {
                        animateThis(targetElement, time);
                        showPosition($("#thing1"), $("#t1info"));
                    }
                });
            }
        });        
    }

    animateThis($('#thing1'), 2000);
    animateThis($('#thing2'), 1800);
    animateThis($('#thing3'), 1600);
    animateThis($('#thing4'), 1400);


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
  



    
}


$(document).ready(main);