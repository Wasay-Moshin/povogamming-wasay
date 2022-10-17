import React from "react";

function Staking() {
  return (
    <div className="container-fluid stacking">
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-md-6 mt-5 ">
            <div>
              <img className="img-fluid" src="Assests/stake.png" alt="" width={"100%"} />
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="c1">
              <h1>
                Povo
                <span style={{ color: "white" }}> Staking Platform </span>
              </h1>
            </div>
            <div>
              <button type="button" className="btn btn-primary btn-lg">
                Launched, Povo Staking
              </button>
            </div>
            <div className="text-start mt-5">
              <ul>
                <p>
                  <strong> Key Features </strong>
                </p>
                <li>
                  You can stake your POVO at any time you choose. You can stake
                  any amount of POVO you wish.
                </li>
                <li>
                  Once staked, the contract will deliver a reward continuously
                  for as long as tokens remain staked.
                </li>
                <li>
                  You can withdraw any amount of staked POVO tokens without any
                  locking period
                </li>
                <li>You are free to stake additional amounts at any time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staking;
