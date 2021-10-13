import React from "react";

export default function Sidebar() {
  return (
    <div>
      <div className="sidenav display1">
        {/* <input type="checkbox" id="check" />
        <label htmlFor="check">
          <i className="fas fa-bars" id="btn"></i>
          <i className="fas fa-times" id="cancel"></i>
        </label> */}
        <h1
          className="h1Style"
          style={{
            marginLeft: "15px",
            paddingBottom: "55px",
            fontSize: "38px",
            fontWeight: "bolder",
            paddingTop: "35px",
            fontWeight: "bolder",
          }}
        >
          Lorem Ipsum
        </h1>
        <a
          className="aStyle"
          style={{ textDecoration: "line-through", textDecorationColor: "red" }}
          href="#"
        >
          About
        </a>
        <a href="#">Services</a>
        <a href="#">Cuisine</a>
        <a href="#">Gallery</a>

        <a href="#">Contact</a>
        <a href="#">Book</a>
        <button
          className="btn"
          // style={{
          //   backgroundColor: "rgba(255,78,78,255)",
          //   width: "125px",
          //   height: "52px",
          //   borderRadius: "23px",
          //   border: 0,
          //   color: "white",
          //   marginLeft: "14px",
          //   marginTop: "30px",
          // }}
        >
          Cart
        </button>
      </div>
    </div>
  );
}
