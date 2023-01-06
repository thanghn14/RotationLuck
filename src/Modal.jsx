import React from "react";

function Modal({ name, number }) {
  return (
    <div className="modal">
      <div className="modal ">
        <div className="user">
          <p className="congrats">Chúc mừng</p>
          <span className="highlight">{name}</span>
          <p className="congratss">
            Mã nhân viên: <span className="highlightt">{number}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
