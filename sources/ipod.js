// Create your global variables below:
var tracklist = ["All We Got", "No Problem", "Summer Friends", "D.R.A.M. Sings Special", "Blessings", "Same Drugs", "Mixtape", "Angels", "Juke Jame", "All Night"];
const volLevels = ["vl0", "vl1", "vl2", "vl3", "vl4", "vl5"];
const volMax = 5
const volMin = 0
currVol = 0
currTime = 0
currSong = 0
timeSlider = document.getElementById('player-time')
startTime = new Date()
var playing = true;
function init() {
	timeSlider.value = 0
	for (lel in volLevels) {
		volLevels[lel] = document.getElementById(volLevels[lel])
		volLevels[lel].style.backgroundColor = "white"
	}
	for (i = 0; i < 3; i++) {
		volUp()
	}


};

setInterval(() => {
	if (playing) {
		timeSlider.value++
		currTime = timeSlider.value
		if (currTime >= 180) {
			nextSong()
		}
		document.getElementById('time-elapsed').innerHTML = secondsToMs(currTime)
	}
}, 1000);

function volUp() {
	if (currVol === volMin) {
		volLevels[currVol].style.backgroundColor = "purple"
		currVol++
	} else if (volLevels[currVol].style.backgroundColor === "white") {
		volLevels[currVol].style.backgroundColor = "purple"
	} else if (volLevels[currVol].style.backgroundColor === "purple") {
		currVol++
		volLevels[currVol].style.backgroundColor = "purple"
	} else if (currVol === volMax) {
	}


}

function volDown() {
	if (currVol === volMax) {
		volLevels[currVol].style.backgroundColor = "white"
		currVol--
	} else if (volLevels[currVol].style.backgroundColor === "purple") {
		volLevels[currVol].style.backgroundColor = "white"
	} else if (volLevels[currVol].style.backgroundColor === "white") {
		currVol--
		volLevels[currVol].style.backgroundColor = "white"
	} else if (currVol === volMin) {
	}
}

function switchPlay() {

	if (playing) {
		document.getElementById('play').innerHTML = '<i class="material-icons">play_arrow</i>'
		playing = false
	}
	else {
		document.getElementById('play').innerHTML = '<i class="material-icons">pause</i>'
		playing = true
	}

}


function nextSong() {
	if (currSong === tracklist.length - 1) {
		currSong = 0
		document.getElementById("player-song-name").innerHTML = tracklist[currSong]
	}
	else {
		currSong++
		document.getElementById("player-song-name").innerHTML = tracklist[currSong]
	}
	resetTime()
}

function prevSong() {
	if (currSong === 0) {
		currSong = tracklist.length - 1
		document.getElementById("player-song-name").innerHTML = tracklist[currSong]
	}
	else {
		currSong--
		document.getElementById("player-song-name").innerHTML = tracklist[currSong]
	}
	resetTime()
}

function secondsToMs(d) {
	d = Number(d);

	var min = Math.floor(d / 60);
	var sec = Math.floor(d % 60);

	return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}
const resetTime = () => {
	currTime = 0
	timeSlider.value = 0
	document.getElementById('time-elapsed').innerHTML = secondsToMs(0)
}
init();