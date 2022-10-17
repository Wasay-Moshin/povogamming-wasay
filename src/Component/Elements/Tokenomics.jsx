import React from "react";

function Tokenomics() {
  return (
    <div className="tokenomics">
      <div className="container text-center">
        <h1>
          POVO <span style={{ color: " #8b0000" }}>Tokenomics</span>
        </h1>
        <div className="row">
          <div className="col-md-6 mt-3">
            <div className="text-start">
            <h5>
              <strong>TOTAL SUPPLY: </strong>10,000,000
            </h5>
            </div>
            <div className="text-start" >
                <h2>Token <strong style={{color:" #26a0d3"}}>Distribution </strong>(Gamenomics)</h2>
            </div>
            <div className="text-start">
                <ul className="mt-4">
                  <li><span className="l1">Presale</span> 50%</li><br/>
                  <li><span className="l2">Staking pool</span> 23%</li><br/>
                  <li><span className="l3">Liquidity Pool</span> 20%</li><br/>
                  <li><span className="l4">Advisors</span> 10%</li><br/>
                  <li><span className="l5">Airdop</span> 7%</li><br/>
                  <li><span className="l6">Gamming</span> 7%</li><br/>
                  <li><span className="l7">Team</span> 3%</li>
                </ul>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div>
                <img className="img-fluid" src="Assests/chart.png" alt="" width={"100%"} />
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
