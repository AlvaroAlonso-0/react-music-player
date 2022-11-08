import React from 'react'
import './audioPlayer.css'
import Controls from './controls';
import ProgressCircle from './progressCircle';
import WaveAnimation from './waveAnimation';

export default function AudioPlayer({ currentTrack, isPlaying }) {
    const artists = [];
    currentTrack.album?.artists?.forEach((artist) => {
        artists.push(artist.name);
    });

    return (
        <div className='player-body flex'>
            <div className='player-left-body'>
                <ProgressCircle
                    percentage={70}
                    isPlaying={true}
                    image={currentTrack.album?.images[0].url}
                    size={300}
                    color='#c96850'
                />
            </div>
            <div className='player-right-body flex'>
                <p className='song-title'>{currentTrack?.name}</p>
                <p className='song-artist'>{artists.join(' | ')}</p>
                <div className='player-right-bottom flex'>
                    <div className='song-duration flex'>
                        <p className='duration'>0:00</p>
                        <WaveAnimation isPlaying={isPlaying}/>
                        <p className='duration'>0:30</p>
                    </div>
                    <Controls 
                        /* isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                        total={total} */
                    />
                </div>

            </div>
        </div>
    );
}
