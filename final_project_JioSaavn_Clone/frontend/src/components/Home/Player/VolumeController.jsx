import React from 'react';

const VolumeController = ({ showVolume, setShowVolume, volume, setVolume,setIsMuted }) => {
    const handleVolumeChange = (e) => {
        setIsMuted(false);
        const newVolume = e.target.value;
        setVolume(newVolume);
    };

    return (
        <div className={`w-[80px] absolute -rotate-90 bottom-20 -right-3 shadow-md px-2 rounded-lg bg-white ${showVolume ? 'block' : 'hidden'}`} onMouseEnter={() => setShowVolume(true)} onMouseLeave={() => setShowVolume(false)}>
            <input
                type="range"
                name="volume"
                min={0}
                max={100}
                step={1}
                value={volume}
                className='h-[5px] text-green-400 range '
                onChange={handleVolumeChange}
                onMouseEnter={() => setShowVolume(true)}
                onMouseLeave={() => setShowVolume(false)}
            />
        </div>
    );
};

export default VolumeController;
