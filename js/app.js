import React from 'react';
import '../sass/audioPlayer.scss';
import AudioPlayer from './components/AudioPlayer';

var songs = [
	{
		url: "assets/stop.mp3"
	}
]

React.render(	<AudioPlayer songs={songs} />, 
							document.getElementById('audio-player1')	);

React.render(	<AudioPlayer dataUrl="./assets/songs.json" />, 
							document.getElementById('audio-player2')	);

