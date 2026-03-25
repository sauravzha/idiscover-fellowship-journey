import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element programmatically for better control
    const audio = new Audio('/aashayein.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audio.preload = 'auto';

    audio.addEventListener('canplaythrough', () => {
      setIsReady(true);
    });

    audio.addEventListener('play', () => {
      setIsPlaying(true);
    });

    audio.addEventListener('pause', () => {
      setIsPlaying(false);
    });

    audio.addEventListener('error', (e) => {
      console.error('Audio error:', e);
      setIsPlaying(false);
    });

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
      audio.load();
    };
  }, []);

  const togglePlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (error) {
      console.error('Audio playback failed:', error);
      setIsPlaying(false);
    }
  }, []);

  const toggleMute = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 animate-reveal" style={{ animationDelay: '800ms' }}>
      <div className="flex items-center gap-2 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl transition-all duration-300 hover:bg-white/15">
        <button
          onClick={toggleMute}
          className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white feedback-ring"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>

        <button
          onClick={togglePlay}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/80 hover:bg-primary text-white shadow-lg transition-all hover:scale-105 active:scale-95"
          title={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause size={24} fill="currentColor" />
          ) : (
            <Play size={24} className="ml-1" fill="currentColor" />
          )}
        </button>

        {isPlaying && (
          <div className="px-3 py-1 flex gap-1 items-center h-4 animate-in fade-in slide-in-from-left-2 duration-500">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-0.5 bg-primary rounded-full animate-music-bar"
                style={{ 
                  height: '100%',
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '0.8s'
                }}
              />
            ))}
            <span className="text-[10px] font-medium text-white/60 ml-2 whitespace-nowrap uppercase tracking-widest hidden md:block">
              Playing Aashayein
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioPlayer;
