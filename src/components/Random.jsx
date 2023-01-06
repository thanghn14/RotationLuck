import React, { useCallback, useEffect, useRef, useState } from "react";
import "../assets/css/random.css";
import FireWork from "./FireWork";

let dummyData = [
  { id: [1, 7, 0, 3, 1, 2, 6], status: 1, name: "Đàm Quỳnh Thơ" },
  { id: [1, 6, 0, 4, 1, 0, 1], status: 0, name: "Nguyễn Thị Thu Hà" },
  { id: [1, 1, 1, 2, 0, 1, 2], status: 2, name: "Tô Thị Kim Hương" },
  { id: [1, 2, 0, 8, 0, 1, 6], status: 3, name: "Vũ Văn Tuân" },
  { id: [2, 1, 1, 2, 3, 9, 8], status: 0, name: "Lê Kim Lộc" },
  { id: [2, 2, 0, 6, 4, 2, 4], status: 1, name: "Hoàng Thị Thùy Trang" },
  { id: [2, 0, 0, 9, 3, 2, 7], status: 3, name: "Đào Duy Quang" },
  { id: [2, 2, 0, 7, 4, 2, 6], status: 2, name: "Cao Việt Đức" },
  { id: [2, 2, 0, 9, 4, 3, 6], status: 3, name: "Đào Thị Hiền" },
  { id: [2, 2, 1, 2, 4, 5, 2], status: 1, name: "Hoàng Thị Linh" },
];

const Random = () => {
  const [play, setPlay] = useState(false);
  const [number, setNumber] = useState([0, 0, 0, 0, 0, 0]);
  const [endNumber, setEndNumber] = useState(0);
  const [status, setStatus] = useState("Giải thưởng");
  const [name, setName] = useState("Người ấy là ai?");
  const [listUser, setListUser] = useState([]);
  const refButton = useRef();
  const refEndNumber = useRef();
  const [showFireWorks, setShowFireWorks] = useState(false);
  const onRandom = (e) => {
    refEndNumber.current.innerHTML = ` 0<br /> 1<br /> 2<br />3<br />4<br />5<br />6<br />7<br />8
    <br />9`;
    e.preventDefault();
    setPlay(true);
  };

  const closeRandom = (e) => {
    e.preventDefault();
    console.log(refEndNumber);
    let currentIndex = Math.floor(Math.random() * dummyData.length);
    const data = dummyData[currentIndex];
    setEndNumber(data.id[data.id.length - 1]);
    data.id.splice(data.id.length - 1);
    setNumber(data.id);
    setName(data.name);
    setStatus(data.status);
    switch (data.status) {
      case 0:
        setStatus("Đặc biệt");
        break;
      case 1:
        setStatus("Giải nhất");
        break;
      case 2:
        setStatus("Giải Nhì");
        break;
      case 3:
        setStatus("Giải ba");
        break;
    }
    setPlay(false);
    setTimeout(() => {
      setShowFireWorks(true);
    }, 7600);
    dummyData.splice(currentIndex, 1);
  };

  useEffect(() => {
    if (status !== "Giải thưởng") {
      setListUser((prev) => [
        ...prev,
        {
          status: status,
          name: name,
          number: [...number, endNumber],
        },
      ]);
    }
  }, [number, status, name]);

  const enterButton = useCallback(() => {
    window.document.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        onRandom(e);
      } else if (e.keyCode === 32) {
        () => closeRandom(e);
      }
    });
  }, [play]);
  enterButton();
  const list = [0, 1, 2, 3, 4, 5];
  useEffect(() => {
    if (!play) {
      setTimeout(() => {
        refEndNumber.current.innerHTML = endNumber;
        refEndNumber.current.classList.add("bg-blue");
      }, 6900);
    }
  }, [play]);
  return (
    <div className="random">
      <span className="logo"></span>
      <h1 className="title">VÒNG QUAY MAY MẮN</h1>
      <span className={`${!play && "name nameAnimations"} name`}>{name}</span>

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
                  key={item.name}
                  className={`boxItem toTop5 ${play ? `rotating${index}` : ""}`}
                >
                  0<br /> 1<br /> 2<br />3<br />4<br />5<br />6<br />7<br />8
                  <br />9
                </span>
              );
            })}

          <span
            ref={refEndNumber}
            className={`boxItem  toTop6 ${play ? "rotating5" : "bg-blue"} `}
          >
            0<br /> 1<br /> 2<br />3<br />4<br />5<br />6<br />7<br />8
            <br />9
          </span>
        </div>
      </div>
      <div className="item">GIẢI NHẤT</div>
      <form onSubmit={onRandom} onReset={closeRandom} class="form">
        {!play && (
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

      <table className="formTable">
        <thead>
          <tr className="thead">
            <th>Giải thưởng</th>
            <th>Tên người chơi</th>
            <th>Mã trúng thưởng</th>
          </tr>
        </thead>
        <tbody>
          {listUser.map((item) => {
            return (
              <tr className="tbody">
                <td>{item.status}</td>
                <td>{item.name}</td>
                <td>{item.number}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <FireWork
        visible={showFireWorks}
        setShowFireWorks={setShowFireWorks}
        name={name}
        award={status}
      />
    </div>
  );
};

export default Random;
