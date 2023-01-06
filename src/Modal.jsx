import React from "react";

function Modal({ name, award }) {
  return (
    <div className="modalOverlay">
      <div className="modal ">
        <img
          src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/partying-face_1f973.png"
          alt=""
          className="iconModal"
        />
        <div>
          <p>
            Chúc mừng <span className="highlight">{name}</span>
          </p>
          <p>
            Đã trúng <span className="highlight">{award}</span>
          </p>
        </div>
        <img
          src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/partying-face_1f973.png"
          alt=""
          className="iconModal"
        />
      </div>
    </div>
  );
}

export default Modal;
