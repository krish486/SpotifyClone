import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { play, pause, next, prev } from "../state/playerSlice";

export let usePlayer = () => {

    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [songInfo, setSongInfo] = useState({});

    const dispatch = useDispatch();
    const audioRef = useRef(new Audio());

    const { currentPlayingSong, isPlaying } = useSelector((store) => store.player);


    useEffect(() => {
        if (!currentPlayingSong) return;

        const audio = audioRef.current;

        audio.src = currentPlayingSong.url;
        audio.play();

        setSongInfo({ ...currentPlayingSong });
    }, [currentPlayingSong]);


    useEffect(() => {
        if (!currentPlayingSong) return;

        const audio = audioRef.current;

        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [isPlaying]);

    // ⏱ Progress + Auto Next
    useEffect(() => {
        const audio = audioRef.current;

        const updatedTime = () => {
            const curr = audio.currentTime;
            const dur = audio.duration || 0;

            setCurrentTime(curr);
            setDuration(dur);

            const percentage = dur ? (curr / dur) * 100 : 0;
            setProgress(percentage);
        };

        const handleEnded = () => {
            dispatch(next());
        };

        audio.addEventListener("timeupdate", updatedTime);
        audio.addEventListener("ended", handleEnded);

        return () => {
            audio.removeEventListener("timeupdate", updatedTime);
            audio.removeEventListener("ended", handleEnded);
        };
    }, [dispatch]);

    const progressClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;

        const audio = audioRef.current;

        if (!audio.duration) return;

        audio.currentTime = (clickX / width) * audio.duration;
    };

    const togglePlayAndPause = () => {
        if (isPlaying) {
            dispatch(pause());
        } else {
            dispatch(play());
        }
    };

    const playNextSong = () => dispatch(next());
    const playPrevSong = () => dispatch(prev());

    return {
        togglePlayAndPause,
        progress,
        currentTime,
        duration,
        progressClick,
        songInfo,
        playNextSong,
        playPrevSong,
    };
};