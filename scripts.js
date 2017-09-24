
window.addEventListener("keydown", function(e){

	// selects the audio element with corresponding event keycode
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

	// selects the key class element from the divs
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

	// makes sure there is an actual audio element
	if (!audio) {
		return;
	};

	// rewinds elements to start
	audio.currentTime = 0;

	// element doesnt replay from start if already playing
	audio.play();

	// adds class to the key element
	key.classList.add("playing");

	// selects all the key elements
	const keys = document.querySelectorAll(".key");

	function removeTransition(e) {
		// exit if element property transform doesent exists
		if(e.propertyName !== "transform") {
			return;
		}
		// removes the class
		this.classList.remove("playing");
	};

	// adds the eventlistener to eachkey (need to loop through them individually cant attach eventlistener to the key array)
	keys.forEach(function(key){
		key.addEventListener("transitionend", removeTransition);
	});
});