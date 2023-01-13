import React, { useCallback, useEffect, useRef, useState } from "react";
import "../assets/css/random.css";
import FireWork from "./FireWork";
import { dummyData } from "./_mock";
import musicSuccess from "../assets/mp3/congrats.mp3";
import musicPlay from "../assets/mp3/musicPlay.mp3";
import Audio from "./Audio";

const Random = () => {
  const [play, setPlay] = useState(false);
  const [number, setNumber] = useState([0, 0]);
  const [endNumber, setEndNumber] = useState(0);
  const [displayEndNumber, setDisplayEndNumber] = useState(0);
  const [status, setStatus] = useState("Giải thưởng");
  const [name, setName] = useState("");
  const [uid, setUid] = useState("");
  const [listUser, setListUser] = useState([]);
  const refButton = useRef();
  const refAudio = useRef();
  const refAudio2 = useRef();
  const [reset, setReset] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [fireWorks, setireWorks] = useState(false);
  const [showEndNumber, setShowEndNumber] = useState(false);

  // QUAY SỐ
  const onRandom = (e) => {
    e.preventDefault();
    setDisplayEndNumber(
      <>
        0<br /> 1<br /> 2<br />3<br />4<br />5<br />6<br />7<br />8 <br />9
      </>
    );
    setPlay(true);
    setShowReset(false);
    // setShowName(false);
    refAudio2.current.play();
  };

  // CHỐT SỐ
  const closeRandom = (event) => {
    event.preventDefault();
    // refAudio.current.pause();
    let currentIndex = Math.floor(Math.random() * dummyData.length);
    const data = dummyData[currentIndex];
    const [a, b, end] = data.id;
    setEndNumber(end);
    setNumber([a, b]);
    setStatus(data.status);
    setUid(data.uid);
    // setShowName(false);
    setShowEndNumber(true);
    setName(data.name);
    switch (data.status) {
      case 0:
        setStatus("Không trúng");
        break;
      case 1:
        setStatus("Trúng giải");
        break;
    }
    setPlay(false);
    setReset(true);

    setTimeout(() => {
      setDisplayEndNumber(end);
      setShowEndNumber(false);
      setReset(true);
      // setShowName(true);
    }, 7500);
    setTimeout(() => {
      setireWorks(true);
      setShowReset(true);
      refAudio2.current.pause();
      refAudio2.current.currentTime = null;
      refAudio.current.loop = true;
      refAudio.current.play();
    }, 13000);
    dummyData.splice(currentIndex, 1);
  };

  useEffect(() => {
    if (status === "Trúng giải") {
      setTimeout(() => {
        setListUser((prev) => [
          ...prev,
          {
            status: status,
            name: name,
            number: [...number, endNumber],
          },
        ]);
      }, 14000);
    }
  }, [uid]);

  useEffect(() => {
    if (fireWorks === false) {
      refAudio.current.pause();
    }
  }, [!fireWorks]);

  // TIẾP TỤC QUAY
  const resetRandom = () => {
    setDisplayEndNumber(0);
    setName("");
    setNumber([0, 0]);
    setStatus("");
    setReset(!reset);
  };

  // const enterButton = () => {
  //   window.document.addEventListener("keydown", (e) => {
  //     if (!play && e.keyCode === 13) {
  //       setTimeout(() => {
  //         onRandom(e);
  //         console.log("onRandom");
  //       }, 100);
  //     } else if (play && e.keyCode === 13) {
  //       setTimeout(() => {
  //         closeRandom(e);
  //         console.log("closeRandom");
  //       }, 100);
  //     } else if (reset && e.keyCode === 13 && play) {
  //       setTimeout(() => {
  //         resetRandom(e);
  //         console.log("resetRandom");
  //       }, 100);
  //     }
  //   });
  // };
  // enterButton();
  
  const list = [0, 1];

  return (
    <div className="random">
      <span className="logo"></span> 
      <h1 className="title">VÒNG QUAY MAY MẮN</h1>
      {/* {showName && <span className={`nameAnimations name`}>{name}</span>}
      {!showName && <span className={`nameAnimations name`}></span>} */}
      <div className="box">
        <div
          className="randomBox"
          style={play ? { filter: "blur(0.05rem)" } : {}}
        >
          {!play &&
            number.map((item, index) => {
              return (
                <span key={index} className={`boxItem bg-blue toTop${index}`}>
                  {item}
                </span>
              );
            })}
          {play &&
            list.map((item, index) => {
              return (
                <span
                  key={index}
                  className={`boxItem toTop5 ${play ? `rotating${index}` : ""}`}
                >
                  0<br /> 1<br /> 2<br />3<br />4<br />5<br />6<br />7<br />8
                  <br />9
                </span>
              );
            })}

          <span
            className={`boxItem toTop6  ${play ? "rotating5" : ""} ${
              showEndNumber ? "rotating6" : ""
            }
            ${!play && !showEndNumber && "bg-blue"}
            `}
          >
            {displayEndNumber}
          </span>
        </div>
      </div>
      <div className="item">{status}</div>
      <form onSubmit={onRandom} onReset={closeRandom} className="form">
        {!reset && !play && (
          <button ref={refButton} type="submit" className="btn">
            QUAY SỐ
          </button>
        )}
        {play && (
          <button ref={refButton} type="reset" className="btn">
            CHỐT SỐ
          </button>
        )}
      </form>

      {reset && showReset && (
        <button className="btn" onClick={resetRandom}>
          Tiếp tục quay
        </button>
      )}

      <table className="formTable">
        <thead>
          <tr className="thead">
            <th>Giải thưởng</th>
            <th>Mã nhân viên</th>
          </tr>
        </thead>
        <tbody>
          {/* MAP LIST USER*/}
          {listUser.map((item) => {
            return (
              <tr key={item.id} className="tbody">
                <td>{item.status}</td>
                <td>{item.number}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <FireWork
        visible={fireWorks}
        setShowFireWorks={setireWorks}
        number={number}
        endNumber={endNumber}
        setShowReset={setShowReset}
      />
      <Audio music={musicSuccess} refAudio={refAudio} />
      <Audio music={musicPlay} refAudio={refAudio2} />
    </div>
  );
};

export default Random;
