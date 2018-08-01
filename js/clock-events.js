var babycry = new Audio('audio/babycry.mp3');
babycry.loop = true;

var audio = new Audio('audio/woohoo.mp3');

function initEvents() {
	const interval = setInterval(() => {
		// Retrieve current time
		var date = new Date();
		var seconds = date.getSeconds();
		var minutes = date.getMinutes();
		var hours = date.getHours();

		var now = new Date().getTime();


		// Crying baby alarm @ 10:27
		if (hours === 10 && minutes === 27 && babycry.paused) {
			babycry.play();
		}

		// Pause baby crying @ 10:28
		if (hours === 10 && minutes === 28 && !babycry.paused) {
			babycry.pause();
			babycry.currentTime = 0;
		}

		// Blinking Latch GO! at @ 10:28
		if (hours === 10 && minutes === 28) {
			document.getElementById("CountdownTimer").innerHTML = "LATCH GO";

			if (seconds % 2 == 0) {
				document.getElementById("CountdownTimer").style.display = "block";
			} else {
				document.getElementById("CountdownTimer").style.display = "none";
			}
		}

		// When timer is at @10:30 hide clock and show countdown timer
		if (hours === 10 && minutes === 30) {
			document.getElementById("Clock").style.display = "none";
			document.getElementById("CountdownTimer").style.display = "block";
			document.getElementById("CountdownTimer").innerHTML = 60 - seconds;
			document.getElementById("CountdownTimer").style.fontSize = '25rem';
		}

		if(hours === 10 && minutes === 31) {
        clearInterval(interval);
				document.getElementById("CountdownTimer").style.fontSize = '12rem';
        var woohoo = " Woohoo! ";
        document.getElementById("CountdownTimer").innerHTML = woohoo;
        document.getElementsByClassName("pp")[0].style.display = "inline";
        document.getElementsByClassName("pp")[1].style.display = "inline";

        var confettiSettings = { target: 'my-canvas', max: 250 };
        var confetti = new window.ConfettiGenerator(confettiSettings);
        confetti.render();

        audio.play();
    	}
    
	}, 1000);
}

initEvents();

