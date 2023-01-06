import React from "react";

function Modal({ name, number }) {
  return (
    <div className="modal">
      <div className="modal ">
        <div className="user">
          <p className="congrats">Chúc mừng</p>
          <span className="highlight">{name}</span>
        </div>
        <div className="user2">
          <p className="congrats">
            Mã nhân viên: <span className="highlight">{number}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
