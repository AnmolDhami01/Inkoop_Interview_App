import React from "react";

export default function Sidebar_lg() {
  return (
    <>
      <div className="display2">
        <input type="checkbox" id="check" />
        <label htmlFor="check">
          <i
            className="fas fa-bars"
            style={{
              backgroundColor: "white",
              border: "none",
              color: "rgba(255, 78, 78, 255)",
              position: "relative",
              top: "6px",
              left: "-13px",
              width: "47px",
              height: "35px",
            }}
            id="btn"
          ></i>
          <i
            className="fas fa-times fa-lg"
            style={{
              backgroundColor: "white",
              border: "none",
              color: "rgba(255, 78, 78, 255)",
              position: "absolute",
              top: "6px",
              left: "50px",
              width: "47px",
              height: "35px",
            }}
            id="cancel"
          ></i>
        </label>

        <div className="sidebar">
          <header>Lorem Ipsum</header>
          <a href="#" className="active">
            <span>About</span>
          </a>
          <a href="#">
            <span>Services</span>
          </a>
          <a href="#">
            <span>Cuisine</span>
          </a>
          <a href="#">
            <span>Gallery</span>
          </a>
          <a href="#">
            <span>Contact</span>
          </a>
          <a href="#">
            <span>Book</span>
          </a>
          <a href="#">
            <span>Contact</span>
          </a>
        </div>
      </div>
      {/* <div className="h1Main">
        <h1
          style={{
            paddingTop: "155px",

            fontWeight: "bolder",
            fontsize: "69px",
            fontSize: "79px",
            width: "637px",
            paddingBottom: "50px",
          }}
        >
          What are you having for Lunch?
        </h1>
      </div> */}
    </>
  );
}
