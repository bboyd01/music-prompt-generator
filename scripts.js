$(function() {

    // init arrays for possible items

    // init "other array" to hold the values we randomly choose

    //  add items to arrays

    $("#generator").click(function() {
        // for 0.5-1s:
            // change grow spinner to spinny spinner


        // shrink button
        //$("#generator").removeClass("zoom");
        $("#buttonBox").css('transform', 'scale(' + 0 + ')');
        $("#generator").animate({opacity: "0%"}, 600);

        
        setTimeout(() => { 
            // hide button section and space
            $("#space1").animate({ height: "14em" }, 500);
            $("#buttonBox").collapse("hide");
            $("#buttonBox").collapse("dispose")
        }, 500);

        // show the new stuff
        setTimeout(() => {
            $("#newContent").collapse("show");
        }, 1000);
        

        // show new content section

        // randomly choose an item from each array
            // add each of these items to the "other array"
        
        // load prompt page, passing in the values from the "other array"

        // include button for generating new prompt
    });


});