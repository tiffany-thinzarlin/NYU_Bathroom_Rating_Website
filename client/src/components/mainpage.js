import React from "react";
import nyuPic from "./nyuPic.png";
//https://meet.nyu.edu/advice/transferring-to-nyu/

function MainPage() {
  return (
    <div>
      <header>
        <h1>Welcome to the NYU Bathroom Rating Website</h1>
      </header>
      <img
        src={nyuPic}
        alt="NYU Building"
        style={{
          width: "300px",
          height: "200px",
          position: "relative",
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
}

export default MainPage;
