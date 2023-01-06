import React from "react";

function Modal({ name, award }) {
  return (
    <div className="modal">
      <div className="modal ">
        {/* <img
          src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/partying-face_1f973.png"
          alt=""
          className="iconModal"
        /> */}
        <div>
          <p className="congrats">
            Chúc mừng <span className="highlight">{name}</span>
          </p>
          <p className="congrats">
            Đã trúng <span className="highlight">{award}</span>
          </p>
        </div>
        {/* <img
          src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/partying-face_1f973.png"
          alt=""
          className="iconModal"
        /> */}
      </div>
    </div>
  );
}

export default Modal;
