import React, { useEffect } from "react";
const Audio = React.forwardRef(({ refAudio, music }) => {
  const handleClick = () => {
    refAudio.current.play();
  };
  useEffect(() => {
    console.log(refAudio);
  }, []);
  return (
    <div className="wrapAudio">
      <audio ref={refAudio}>
        <source src={music} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={handleClick}>Click</button>
    </div>
  );
});

export default Audio;
