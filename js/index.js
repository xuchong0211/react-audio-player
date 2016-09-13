import React from 'react';
import '../sass/audioPlayer.scss';
import AudioPlayer from './components/AudioPlayer';

export default ({url}) => <AudioPlayer songs={[{url}]} />;


