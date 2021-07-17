function randomInt(min, max) {
  	return Math.floor(Math.random() * (max - min + 1) + min)
}

function chooseItem(arr, location) {
    // for (var i = 0; i < arguments.length; i++){
    //     console.log(arguments[i]);
    // }
    // data.array.forEach(element => {
    //     location.push(element);
	// });
	var ind = randomInt(0, arr.length-1);
	location.push(arr[ind]);
}


$(function() {
	var newHeight = "8em";

    // setup arrays of data
    const array1 = [
        "Midtempo",     "Slow",
        "Fast",         "Very Fast",
        "Very Slow",    "Rubato",
        "Atempo",		"Rising & Falling"
    ];

    const array2 = [
        "Upbeat",       "Melancholy",
        "Heroic",       "Villainous",
        "Romantic",     "Inspirational",
        "Pensive",      "Ambient",
        "Horror",       "Ambiguous",
        "Mysterious",   "Lonely",
        "Nostalgic",    "Fanfare",
        "Main theme",   "Redemptive",
        "Failure",      "Victorious",
        "Quirky",       "Goofy",
        "Fighting",     "Regret",
        "Wishful",      "Hopeful",
    ];

    const array3 = [
        "Orchestral",   "Electronic",
        "Hybrid",		"Impressionist",
        "Piano",        "Band",
    ];

    const array4 = [
        "Big film score",		"Modern VG",
        "16-bit VG",			"8-bit VG",
        "Indie film score",
	];
	
	var values = [];

    // init arrays for possible items

    // init "other array" to hold the values we randomly choose

    //  add items to arrays

    $("#generator").click(function() {
        // for 0.5-1s:
            // change grow spinner to spinny spinner


        // shrink button
        //$("#generator").removeClass("zoom");
        $("#buttonBox").css('transform', 'scale(' + 0 + ')');
        $("#generator").animate({opacity: "0%"}, 200);

        
        setTimeout(() => { 
            // hide button section and space
            $("#space1").animate({ height: newHeight }, 50);
			$("#buttonBox").collapse("dispose")
        }, 210);

        // show the new stuff
        setTimeout(() => {
            $("#newContent").collapse("show");
        }, 300);

		// randomly choose an item from each array
		chooseItem(array1, values);
		chooseItem(array2, values);
		chooseItem(array3, values);
		chooseItem(array4, values);

		// output values
		for (var i=0; i<values.length; i++) {
			var id = "#item" + i;
			$(id).text(values[i]);
		}
		//$("#prompt").text(str);
		//alert(str);

        // include button for generating new prompt
	});
	
	$("#reload").click(function() {
		$("#main").animate({opacity: "0%"}, 300, function() {
			location.reload();
		});

	});


});