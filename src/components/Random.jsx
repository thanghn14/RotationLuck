import React, { useEffect, useState } from "react";
import "../assets/css/random.css";

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
  const [number, setNumber] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [status, setStatus] = useState("Giải thưởng");
  const [name, setName] = useState("Người ấy là ai?");
  const [animation, setAnimation] = useState(false);
  const [listUser, setListUser] = useState([]);

  const onRandom = () => {
    setPlay(true);
    setAnimation(false);
  };

  const closeRandom = () => {
    let currentIndex = Math.floor(Math.random() * dummyData.length);
    setNumber(dummyData[currentIndex].id);
    setName(dummyData[currentIndex].name);
    setStatus(dummyData[currentIndex].status);
    switch (dummyData[currentIndex].status) {
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

    dummyData.splice(currentIndex, 1);
    setPlay(false);
    setAnimation(true);
  };

  useEffect(() => {
    if (status !== "Giải thưởng") {
      setListUser((prev) => [
        ...prev,
        {
          status: status,
          name: name,
          number: number,
        },
      ]);
    }
  }, [number, status, name]);

  useEffect(() => {}, []);
  const list = [0, 1, 2, 3, 4, 5];

  return (
    <div className="random">
      <span className="logo"></span>
      <h1 className="title">VÒNG QUAY MAY MẮN</h1>
      <span className={`${animation && "name nameAnimations"} name`}>
        {name}
      </span>

      <div className="box">
        <div className="randomBox ">
          {play &&
            list.map((item, index) => {
              return (
                <span
                  key={index}
                  className={`boxItem ${play ? `rotating${index}` : ""}`}
                >
                  0<br /> 1<br /> 2<br />3<br />4<br />5<br />6<br />7<br />8
                  <br />9
                </span>
              );
            })}
          {!play &&
            number.map((item, index) => {
              return (
                <span key={index} className={`boxItem bg-blue`}>
                  {item}
                </span>
              );
            })}
        </div>
      </div>

      <div className="item">GIẢI NHẤT</div>

      {!play ? (
        <a
          className="btn"
          onClick={onRandom}
          onKeyDown={(e) => {
            if (e === "Enter") {
              onRandom();
            }
          }}
          onFocus
        >
          QUAY SỐ
        </a>
      ) : (
        <a className="btn" onClick={closeRandom}>
          CHỐT
        </a>
      )}

      <table className="formTable">
        <tr className="thead">
          <th>Giải thưởng</th>
          <th>Tên người chơi</th>
          <th>Mã trúng thưởng</th>
        </tr>
        {listUser.map((item) => {
          return (
            <tr className="tbody">
              <td>{item.status}</td>
              <td>{item.name}</td>
              <td>{item.number}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Random;
