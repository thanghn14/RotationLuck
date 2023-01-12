import React from "react";

function Modal({ name, number, endNumber }) {
  return (
    <div className="modal">
      <div className="user">
        <p className="congrats">Chúc mừng</p>
        <span className="highlight">Bạn đã trúng giải</span>
        <p className="congratss">
          <span className="highlight">
            {number}
            {endNumber}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Modal;
