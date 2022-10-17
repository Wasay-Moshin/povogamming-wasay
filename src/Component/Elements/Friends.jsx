import React from "react";

function Friends() {
  return (
    <div className="friends">
      <div className="container text-center">
        <h1>
          Friends of <span style={{ color: " #8b0000" }}>POVO</span>
        </h1>
        <div className="row mt-5">
          <div className="col-sm-3">
            <img
              className="img-fluid"
              src="Assests/coinmarket.png"
              alt=""
              width={"60%"}
            />
          </div>
          <div className="col-sm-3">
            <img
              className="img-fluid"
              src="Assests/f2.svg"
              alt=""
              width={"60%"}
            />
          </div>
          <div className="col-sm-3">
            <img
              className="img-fluid"
              src="Assests/f3.png"
              alt=""
              width={"60%"}
            />
          </div>
          <div className="col-sm-3">
            <img
              className="img-fluid"
              src="Assests/f4.png"
              alt=""
              width={"60%"}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div>
              <img
                className="img-fluid"
                src="Assests/f5.png"
                alt=""
                width={"60%"}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <img
                className="img-fluid"
                src="Assests/f6.png"
                alt=""
                width={"60%"}
              />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-4">
            <img
              className="img-fluid"
              src=" Assests/f7.png"
              alt=""
              width={"60%"}
            />
          </div>
          <div className="col-sm-4">
            <img
              className="img-fluid"
              src=" Assests/f8.png"
              alt=""
              width={"60%"}
            />
          </div>
          <div className="col-sm-4">
            <img
              className="img-fluid"
              src=" Assests/f9.png"
              alt=""
              width={"60%"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Friends;
