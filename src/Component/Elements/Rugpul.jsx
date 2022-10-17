import React from "react";

function Rugpul() {
  return (
    <div className="rugpul">
      <div className="container text-center mt-4">
        <h1>
          How <span style={{ color: " #8b0000" }}>POVO</span> is Rugpul
          Protected
        </h1>
        <div className="row">
          <div className="col-md-6 mt-5">
            <div className="text-start mt-5">
              <ul>
                <li>
                  Povo Presale is going held on UniCrypt which prevents rug-pull
                  by offering auto liquidity lock functionality
                </li>
                <li>
                  60% of raised funds in presale is locked into liquidity by
                  UniCrypt for 266 years
                </li>
                <li>Transaction fee is never above 7% max.</li>
                <li>
                  Newly created LP tokens are locked in order to ensure
                  transparency.
                </li>
                <li>Smart Contract is audited by CertTik.</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <img
              className="img-fluid"
              src="Assests/why.png"
              alt=""
              width={"70%"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rugpul;
