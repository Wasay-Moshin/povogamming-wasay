import React from 'react'

function Header() {
  return (
    <div>
             <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="Assests/povologo.png" alt="" width={'40px'}></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active " href="/">
                <b className="c1">Home</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">
                <b className="c1"> Staking</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">
                  <b className="c1">Governance</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">
                 <b className="c1">Tokenomics</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">
                <b className="c1"> Roadmap</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">
                <b className="c1">Rugpul</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">
                <b className="c1">FAQ</b>
                </a>
              </li>
              <button type="button" className="btn btn-danger"><b>Connect Wallet</b></button>
            </ul>
          </div>
        </div> 
      </nav>
    </div>
  )
}

export default Header