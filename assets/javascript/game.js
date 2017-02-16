  
    $(document).ready(function() {

// create variables needed.
// var blue = Math.floor((Math.random() * 12) + 1);
// var purple = Math.floor((Math.random() * 12) + 1);
// var green = Math.floor((Math.random() * 12) + 1);
// var rainbow = Math.floor((Math.random() * 12) + 1);
// var wins =0;
// var loses = 0;
// // create randon number for target
// var targetNumber = Math.floor((Math.random() * 101) + 19);

	
	// Create necessary variables.
	var targetNumber = Math.floor((Math.random() * 101) + 19);
	// Generates the values for each crystal.
	var blue = Math.floor((Math.random() * 12) + 1);
	var purple = Math.floor((Math.random() * 12) + 1);
	var green = Math.floor((Math.random() * 12) + 1);
	var rainbow = Math.floor((Math.random() * 12) + 1);
	// Setting initial values to 0.
	var crystalCount = 0;
	var wins = 0;
	var losses = 0;
	  //  Display wins and losses
	$('.windisplay').html(wins);

	$('.losedisplay').html(losses);
	// Displays the number you need to target on the page.
	$(".targetdisplay").html(targetNumber);

	// Displays the count of crystals added.

	$(".crystaldisplay").html(crystalCount);

	// On click events for each crystal.
	$('#bluecrystal').on('click', function(){
    crystalCount = crystalCount + blue;
    console.log("New userTotal= " + crystalCount);
    $('.crystaldisplay').html(crystalCount);
    });

    $('#purplecrystal').on('click', function(){
    crystalCount = crystalCount + purple;
    console.log("New userTotal= " + crystalCount);
    $('.crystaldisplay').html(crystalCount);

	});
	$('#greencrystal').on ('click', function(){
    crystalCount = crystalCount + green;
    console.log("New userTotal= " + crystalCount);
    $('.crystaldisplay').html(crystalCount);

	});
	$('#rainbowcrystal').on ('click', function(){
    crystalCount = crystalCount + rainbow;
    console.log("New userTotal= " + crystalCount);
    $('.crystaldisplay').html(crystalCount);

	});
	
	// The reset function is called when you win or lose a game.
	function reset() {
		// Generates a new number to guess.
		targetNumber = Math.floor((Math.random() * 102) + 19);
		// Displays that number on the page.
		$(".targetdisplay").html(targetNumber);
		// Generates new values for the crystals.
		blue = Math.floor((Math.random() * 12) + 1);
		red = Math.floor((Math.random() * 12) + 1);
		yellow = Math.floor((Math.random() * 12) + 1);
		green = Math.floor((Math.random() * 12) + 1);
		
	};
		function winner(){
		alert("You won!");
		  wins++; 
		  $('.windisplay').html(wins);
		  reset();
		}
		//addes the losses to the userTotal
		function loser(){
		alert ("You lose!");
		  losses++;
		  $('#losedisplay').html(losses);
		  reset()
}
	//Logic for win loss conditions.

	if (crystalCount == targetNumber){
		wins++;
		winner();
          reset();

        }
        else ( crystalCount > targetNumber)
        losses++;
        loser();
          reset();
        }
});



