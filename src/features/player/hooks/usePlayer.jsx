import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { play, pause, next ,prev} from "../state/playerSlice";


export let usePlayer = () => {


    let [progress, setProgress] = useState(0);
    let [currentTime, setCurrentTime] = useState(0);
    let [duration, setDuration] = useState(0);

    let [songInfo, setSongInfo] = useState({})



    let dispatch = useDispatch()
    let audioRef = useRef(new Audio());
    let { currentPlayingSong, isPlaying } = useSelector((store) => store.player)

    //controls play when card button is click
    useEffect(() => {
        if (!currentPlayingSong) return;
        audioRef.current.src = currentPlayingSong.url;
        audioRef.current.play();
        setSongInfo({ ...currentPlayingSong })
    }, [currentPlayingSong])

    //control play and pause on the basis of isPlaying

    useEffect(() => {
        if (!currentPlayingSong) return;
        if (isPlaying) {
            audioRef.current.play();
        }
        else {
            audioRef.current.pause();
        }
    }, [isPlaying])


    //   call actions play and pause
    let togglePlayAndPause = () => {
        if (isPlaying) {
            dispatch(pause());
        } else {
            dispatch(play());
        }
    };



    //ProgressBar
    useEffect(() => {
        let updatedTime = () => {
            setCurrentTime(audioRef.current.currentTime);
            setDuration(audioRef.current.duration || 0);

            let percentage = (audioRef.current.currentTime / audioRef.current.duration) * 100;
            setProgress(percentage || 0)
        };

        audioRef.current.addEventListener("timeupdate", updatedTime);

        return () => {
            audioRef.current.removeEventListener("timeupdate", updateTime);
        };

    }, []);



    //click on progress bar
    let progressClick = (e) => {
        let rect = e.currentTarget.getBoundingClientRect();
        let clickX = e.clientX - rect.left;
        let width = rect.width;

        let audio = audioRef.current;
        audio.currentTime = (clickX / width) * audio.duration;
    }


    let playNextSong = () => {
        dispatch(next())
    }

    let playPrevSong = () => {
        dispatch(prev())
    }

    return { togglePlayAndPause, progress, currentTime, duration, progressClick, songInfo, playNextSong, playPrevSong };

}