import React from "react";

function Benefit() {
  return (
    <div className="benefit">
      <div className="container text-center py-5">
        <h1>Benefit of POVO</h1>
        <div className="row">
          <div className="col-md-6 mt-5">
            <div className="text-start">
                <h5>Anyone Who Owns Gaming Assets</h5>
            </div>
            <div className="text-start">
                <ul>
                    <li>Transfer items to another account</li>
                    <li>Renders the items to mount reserve values</li>
                    <li>Ease of using the items accross other supported games</li>
                </ul>
            </div>
            <div className="text-start">
                <h5>Game tournament and receive winnings in your wallet</h5>
                <h5>Artificial Intelligence improve players expericne</h5>
                <h5>Withdraw funds using PayPal</h5>
            </div>
            </div>
          <div className="col-md-6 mt-5">
            <img className="img-fluid" src="Assests/benefit.png" alt="" width={"80%"}  />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Benefit;
