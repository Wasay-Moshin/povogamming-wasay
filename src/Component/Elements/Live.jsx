import React from "react";

function Live() {
  return (
    <div className="live">
      <div className="container text-center">
        <h1>
          Platforms going <span style={{ color: " #8b0000" }}>Live</span> after
          PreSale
        </h1>
        <div className="row mt-5">
          <div className="col-sm-4">
            <div>
              <h2>Frictionless yield</h2>
            </div>
            <div className="mt-3">
              <button className="btn1">Read More</button>
            </div>
          </div>
          <div className="col-sm-4">
            <div>
              <h2>Governance in gaming</h2>
            </div>
            <div className="mt-3">
              <button className="btn1">Read More</button>
            </div>
          </div>
          <div className="col-sm-4">
            <div>
              <h2>Staking in gaming</h2>
            </div>
            <div className="mt-3">
              <button className="btn1">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Live;
