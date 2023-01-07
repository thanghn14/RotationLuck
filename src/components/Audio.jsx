import React, { useEffect, useRef } from "react";
import music from "../assets/music.mp3";
function Audio() {
  const refAudio = useRef();
  const handleClick=()=>{
    refAudio.current.play()
  }
  useEffect(() => {
    console.log(refAudio);
  }, []);
  return (
   <>
        <audio ref={refAudio} controls autoPlay>
          <source src={music} type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>
        <button onClick={handleClick}>Click</button>
   </>
  );
}

export default Audio;
