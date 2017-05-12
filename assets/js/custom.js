(function(){ /* start iife */

/* accordion start */
    $(".accordion").on("click",function(event){
        /* prevent form submission */
        event.preventDefault();
        /* toggle class */
        $(this).toggleClass("active");
        var panel = this.nextElementSibling;
        /* get this.next.next element */
        panel = panel.nextElementSibling;
        var arrow = $(this).find("i");
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
            arrow.toggleClass("glyphicon-menu-down").removeClass("glyphicon-menu-up");
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            arrow.toggleClass("glyphicon-menu-up").removeClass("glyphicon-menu-down");

        }
    });
    /* accordion end */

    /* date picker */
    $( "#datepicker" ).datepicker();

    /* handle date picker arrow */
    $("#datepicker").on("focus",function (){$(".date-arrow").addClass("glyphicon-menu-up").removeClass("glyphicon-menu-down");})
                    .on(" focusout",function(){$(".date-arrow").addClass("glyphicon-menu-down").removeClass("glyphicon-menu-up");
    });



})(); /* end iife */