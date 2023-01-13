import React from "react";

function Modal({ name, number, endNumber }) {
  return (
    <div className="modal">
      <div className="user">
        <p className="congrats">
          XIN CHÚC MỪNG <br />
          CÁN BỘ NHÂN VIÊN CÓ MÃ: {number}{endNumber}
        </p>
        <span className="highlight">ĐÃ TRÚNG GIẢI LUCKY DRAW !</span>
        <p className="congratss">
          {/* <span className="highlight">
            {number}
            {endNumber}
          </span> */}
        </p>
      </div>
    </div>
  );
}

export default Modal;
