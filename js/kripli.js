var main = function() {

    

    $(document).keydown(function(event) {
        switch (event.which) {
            // left arrow
            case 37:
                $("#player").finish().animate({left: "-=10"});
                break;
            // up arrow
            case 38:
                $("#player").finish().animate({top: "-=10"});
                break;
            // right arrow
            case 39:
                $("#player").finish().animate({left: "+=10"});
                break;
            // down arrow
            case 40:
                $("#player").finish().animate({top: "+=10"});
                break;
        }
    });

}

$(document).ready(main);