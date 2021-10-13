import React from "react";
import Burger from "../Photos/Burger.png";
import Noddles from "../Photos/Noddles.png";
import Nachos from "../Photos/Nachos.png";
import Pizza from "../Photos/Pizza.png";
import Taco from "../Photos/Taco.png";

export default function Main1() {
  return (
    <div>
      <div className="main">
        <div className="h1Div">
          <h1 className="loremMedia">Lorem</h1>
        </div>
        <div className="iShop">
          <i
            className="fas fa-shopping-cart fa-2x"
            style={{
              backgroundColor: "white",
              color: "rgba(255, 78, 78, 255)",
            }}
          ></i>
        </div>
        <div className="h1Main">
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
        </div>

        <div className="h1MainMedia">
          <h1
            style={{
              paddingTop: "15px",
              fontWeight: "bolder",

              width: "212px",
              paddingBottom: "50px",
              position: "absolute",
              left: "36px",
              top: "78px",
              fontSize: "25px",
            }}
          >
            What are you having for Lunch?
          </h1>
        </div>
        <div className="h3Main">
          <h3
            style={{
              position: "absolute",
              left: "1068px",
              top: "134px",
              color: "#818181",
              width: "227px",
              fontWeight: "normal",
            }}
          >
            Lorem ipsum dolor, sit amet, consectetur adipisicing elit, sed do{" "}
            eiusmod tempor incididunt ut labore et.{" "}
          </h3>
        </div>

        <div className="h3MainMedia">
          <h3
            style={{
              position: "absolute",
              left: "34px",
              top: "519px",
              color: "rgb(129, 129, 129)",
              width: "269px",
              fontWeight: "normal",
              fontSize: "14px",
            }}
          >
            Lorem ipsum dolor, sit amet, consectetur adipisicing elit, sed do{" "}
            eiusmod tempor incididunt ut labore et.{" "}
          </h3>
        </div>

        <div
          style={{
            border: "1px solid red",
            width: "64px",
            height: "1px",
            backgroundColor: "red",
            position: "relative",
            left: "738px",
            top: "-143px",
          }}
        ></div>
        <div style={{ display: "flex" }} className="itemsMain">
          <div
            className="itemsMain"
            style={{
              width: "165px",
              //   border: "1px solid black",
              height: "205px",
              borderRadius: "20px",
              marginRight: "30px",
              backgroundColor: "white",
              boxShadow: "rgb(224 224 224) 0px 12px 9px 1px",
            }}
          >
            <div
              style={{ position: "relative", left: "24px", bottom: " -26px" }}
            >
              <img
                style={{ borderRadius: "65px", width: "115px" }}
                src={Taco}
                alt=""
                srcSet=""
              />
            </div>
            <div
              style={{
                position: "relative",
                bottom: "-25px",
                left: "35px",
                fontSize: "11px",
              }}
            >
              <h2 style={{ fontWeight: "bolder" }}>Mexican Taco</h2>
            </div>
          </div>

          <div
            className="itemsMain"
            style={{
              width: "165px",
              //   border: "1px solid black",
              height: "205px",
              borderRadius: "20px",
              marginRight: "30px",
              backgroundColor: "white",
              boxShadow: "rgb(224 224 224) 0px 12px 9px 1px",
            }}
          >
            <div
              style={{ position: "relative", left: "24px", bottom: " -26px" }}
            >
              <img
                style={{ borderRadius: "65px", width: "115px" }}
                src={Pizza}
                alt=""
                srcSet=""
              />
            </div>
            <div
              style={{
                position: "relative",
                bottom: "-25px",
                left: "25px",
                fontSize: "11px",
              }}
            >
              <h2 style={{ fontWeight: "bolder" }}>Farmhouse Pizza</h2>
            </div>
          </div>

          <div
            className="itemsMain"
            style={{
              width: "165px",
              //   border: "1px solid black",
              height: "205px",
              borderRadius: "20px",
              marginRight: "30px",
              backgroundColor: "white",
              boxShadow: "rgb(224 224 224) 0px 12px 9px 1px",
            }}
          >
            <div
              style={{ position: "relative", left: "24px", bottom: " -26px" }}
            >
              <img
                style={{ borderRadius: "65px", width: "115px" }}
                src={Burger}
                alt=""
                srcSet=""
              />
            </div>
            <div
              style={{
                position: "relative",
                bottom: "-25px",
                left: "27px",
                fontSize: "11px",
              }}
            >
              <h2 style={{ fontWeight: "bolder" }}>Chicken Burger</h2>
            </div>
          </div>

          <div
            className="itemsMain"
            style={{
              width: "165px",
              //   border: "1px solid black",
              height: "205px",
              borderRadius: "20px",
              marginRight: "30px",
              backgroundColor: "white",
              boxShadow: "rgb(224 224 224) 0px 12px 9px 1px",
            }}
          >
            <div
              style={{ position: "relative", left: "24px", bottom: " -26px" }}
            >
              <img
                style={{ borderRadius: "65px", width: "115px" }}
                src={Nachos}
                alt=""
                srcSet=""
              />
            </div>
            <div
              style={{
                position: "relative",
                bottom: "-25px",
                left: "29px",
                fontSize: "11px",
              }}
            >
              <h2 style={{ fontWeight: "bolder" }}>Loaded Nachos</h2>
            </div>
          </div>

          <div
            className="itemsMain"
            style={{
              width: "165px",
              //   border: "1px solid black",
              height: "205px",
              borderRadius: "20px",
              marginRight: "30px",
              backgroundColor: "white",
              boxShadow: "rgb(224 224 224) 0px 12px 9px 1px",
            }}
          >
            <div
              style={{ position: "relative", left: "24px", bottom: " -26px" }}
            >
              <img
                style={{ borderRadius: "65px", width: "115px" }}
                src={Noddles}
                alt=""
                srcSet=""
              />
            </div>
            <div
              style={{
                position: "relative",
                bottom: "-25px",
                left: "30px",
                fontSize: "11px",
              }}
            >
              <h2 style={{ fontWeight: "bolder" }}>Hakka Noddles</h2>
            </div>
          </div>
        </div>

        <div className="divMedia">
          <div
            // className="itemsMain"
            style={{
              width: "120px",
              height: "155px",
              borderRadius: "20px",
              marginRight: "30px",
              position: "absolute",
              left: "30px",
              top: "180px",
              backgroundColor: "white",
              boxShadow: "rgb(224 224 224) 0px 12px 9px 1px",
            }}
          >
            <div
              style={{ position: "relative", left: "13px", bottom: " -16px" }}
            >
              <img
                style={{ borderRadius: "65px", width: "95px" }}
                src={Taco}
                alt=""
                srcSet=""
              />
            </div>
            <div
              style={{
                position: "relative",
                bottom: "-25px",
                left: "35px",
                fontSize: "11px",
              }}
            >
              <h2
                style={{
                  fontWeight: "bolder",
                  fontSize: "12px",
                  position: "absolute",
                  left: "-10px",
                }}
              >
                Mexican Taco
              </h2>
            </div>
          </div>

          <div
            // className="itemsMain"

            style={{
              width: "120px",
              height: "155px",
              borderRadius: "20px",
              marginRight: "30px",
              position: "absolute",
              left: "167px",
              top: "180px",
              backgroundColor: "white",
              boxShadow: "rgb(224 224 224) 0px 12px 9px 1px",
            }}
          >
            <div
              style={{ position: "relative", left: "13px", bottom: " -16px" }}
            >
              <img
                style={{ borderRadius: "65px", width: "95px" }}
                src={Pizza}
                alt=""
                srcSet=""
              />
            </div>
            <div
              style={{
                position: "relative",
                bottom: "-25px",
                left: "25px",
                fontSize: "11px",
              }}
            >
              <h2
                style={{
                  fontWeight: "bolder",
                  fontSize: "12px",
                  position: "absolute",
                  left: "-10px",
                }}
              >
                Farmhouse Pizza
              </h2>
            </div>
          </div>

          <div
            // className="itemsMain"
            style={{
              width: "120px",
              height: "155px",
              borderRadius: "20px",
              marginRight: "30px",
              position: "absolute",
              left: "27px",
              top: "345px",
              backgroundColor: "white",
              boxShadow: "rgb(224 224 224) 0px 12px 9px 1px",
            }}
          >
            <div
              style={{ position: "relative", left: "13px", bottom: " -16px" }}
            >
              <img
                style={{ borderRadius: "65px", width: "95px" }}
                src={Taco}
                alt=""
                srcSet=""
              />
            </div>
            <div
              style={{
                position: "relative",
                bottom: "-25px",
                left: "35px",
                fontSize: "11px",
              }}
            >
              <h2
                style={{
                  fontWeight: "bolder",
                  fontSize: "12px",
                  position: "absolute",
                  left: "-15px",
                }}
              >
                Chicken Burger
              </h2>
            </div>
          </div>

          <div
            // className="itemsMain"
            style={{
              width: "120px",
              height: "155px",
              borderRadius: "20px",
              marginRight: "30px",
              position: "absolute",
              left: "166px",
              top: "345px",
              backgroundColor: "white",
              boxShadow: "rgb(224 224 224) 0px 12px 9px 1px",
            }}
          >
            <div
              style={{ position: "relative", left: "13px", bottom: " -16px" }}
            >
              <img
                style={{ borderRadius: "65px", width: "95px" }}
                src={Nachos}
                alt=""
                srcSet=""
              />
            </div>
            <div
              style={{
                position: "relative",
                bottom: "-25px",
                left: "25px",
                fontSize: "11px",
              }}
            >
              <h2
                style={{
                  fontWeight: "bolder",
                  fontSize: "12px",
                  position: "absolute",
                  left: "-5px",
                }}
              >
                Loaded Nachos
              </h2>
            </div>
          </div>
          <div
            style={{
              width: "58px",
              height: "3px",
              position: "absolute",
              left: "33px",
              top: "590px",
              backgroundColor: "red",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
