import React, { useEffect, useState } from "react";
import "../assets/css/random.css";

let dummyData = [
  { id: [6, 1, 2, 3, 4, 5], status: 0, name: "Ariel Tatum" },
  { id: [0, 3, 2, 4, 4, 6], status: 0, name: "Chelsea Islan" },
  { id: [2, 1, 5, 3, 4, 1], status: 0, name: "Iron Man" },
  { id: [0, 5, 8, 3, 3, 5], status: 0, name: "Thanos" },
  { id: [0, 8, 2, 3, 9, 5], status: 0, name: "Thor" },
  { id: [0, 1, 2, 3, 9, 5], status: 0, name: "Thor" },
  { id: [0, 6, 2, 3, 9, 2], status: 0, name: "Thor" },
  { id: [0, 7, 2, 5, 9, 5], status: 0, name: "Thor" },
  { id: [0, 8, 2, 3, 9, 6], status: 0, name: "Thor" },
  { id: [0, 3, 2, 3, 9, 5], status: 0, name: "Thor" },
];

const Random = () => {
  const [play, setPlay] = useState(false);
  const [number, setNumber] = useState([6, 8, 6, 8, 6, 8]);

  const onRandom = () => {
    setPlay(true);
    setTimeout(() => {
      let currentIndex = Math.floor(Math.random() * dummyData.length);
      setNumber(dummyData[currentIndex].id);
      dummyData.splice(currentIndex, 1);
      setPlay(false);
    }, 1000);
  };
  useEffect(() => {}, []);
  const list = [0, 1, 2, 3, 4, 5];
  return (
    <div className="random">
      <h1 className="title">VÒNG QUAY MAY MẮN</h1>
      <span className="name">Nguyen Tran Nhiem</span>

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

      <div className="btn" onClick={onRandom}>
        QUAY SỐ
      </div>

      <table className="formTable">
        <tr className="thead">
          <th>STT</th>
          <th>Tên</th>
          <th>Mã trúng thưởng</th>
        </tr>
        <tr className="tbody">
          <td>1</td>
          <td>Thang</td>
          <td>123456</td>
        </tr>
        <tr className="tbody">
          <td>2</td>
          <td>Duong</td>
          <td>123456</td>
        </tr>
        <tr className="tbody">
          <td>3</td>
          <td>Nhiem</td>
          <td>123456</td>
        </tr>
      </table>
    </div>
  );
};

export default Random;
