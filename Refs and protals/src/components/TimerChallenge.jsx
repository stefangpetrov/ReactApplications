import {React, useState, useRef} from 'react'
import ResultModal from './ResultModal';

export default function TimerChallenge({title, targetTime}) {
    const timer = useRef();
    const dialog = useRef();

    const [timerExpired, setTimerExpired] = useState(false);
    const [timerStarted,setTimerStarted] = useState(false);
    
    function handleStart(){
        timer.current = setTimeout(() =>{ 
            setTimerExpired(true);
            dialog.current.showModal();
         }, targetTime * 1000);
        setTimerStarted(true);
    }

    function handleStop(){
        clearTimeout(timer);
    }
  return (
    <>
    <ResultModal ref={dialog} targetTime={targetTime} result={"lost"}/>
    <section className="challenge">
        <h2>{title}</h2>
        <p className='challenge-time'>
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={!timerStarted ? handleStart : handleStop}>
                {!timerStarted ? "Start" : "Stop"} Challenge
            </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
            {timerStarted ? "Timer is running..." : "Timer inactive"} 
        </p>
    </section>
    </>
    
  )
}
