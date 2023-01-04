import React from "react";
import "../assets/css/random.css";

const Random = () => {
  const onRandom = () => {};

  return (
    <div className="random">
      <h1 className="title">VÒNG QUAY MAY MẮN</h1>
      <span className="name">Nguyen Tran Nhiem</span>

      <div className="box">
        <div className="randomBox">
          <span className="boxItem">1</span>
          <span className="boxItem">2</span>
          <span className="boxItem">3</span>
          <span className="boxItem">4</span>
          <span className="boxItem">5</span>
          <span className="boxItem">6</span>
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
