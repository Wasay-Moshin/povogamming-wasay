import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { GrMedium } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiFillRedditCircle } from "react-icons/ai";
function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <div>
              <h1>
                PLAY TO WIN
                <br />
                REWARD ON HOLDING
              </h1>
            </div>
            <div className="mt-3">
              <h3>
                Frictionless yield & liquidity generation protocol for game
                lover. Povo is deflationary in it's nature
              </h3>
            </div>
            <div className="row">
              <div className="col-md-6">
                <button className="btn1">
                  <img
                    src="https://cryptologos.cc/logos/pancakeswap-cake-logo.png"
                    alt=""
                    width={"10%"}
                  />{" "}
                  Trade on PancakeSwap
                </button>
              </div>
              <div className="col-md-6">
                <button className="btn2">whitepaper</button>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <GrMedium size={"25px"} />
                &nbsp;&nbsp;
                <AiFillGithub size={"25px"} />
                &nbsp;&nbsp;
                <AiOutlineTwitter size={"25px"} />
                &nbsp;&nbsp;
                <FaFacebookF size={"25px"} />
                &nbsp;&nbsp;
                <BsYoutube size={"25px"} />
                &nbsp;&nbsp;
                <FaTelegram size={"25px"} />
                &nbsp;&nbsp;
                <AiFillRedditCircle size={"25px"} />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-6">
                <div>
                  <h5>
                    {" "}
                    <strong>Buying FEE is 5%</strong>
                  </h5>
                  <ul>
                    <li>3% to buy back funds</li>
                    <li>1% Marketing and Development</li>
                    <li>1% Reflection to holders</li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <h5>
                  {" "}
                  <strong>Selling FEE is 7%</strong>
                </h5>
                <ul>
                  <li>4% to buy back funds</li>
                  <li>1% Marketing and Development</li>
                  <li>2% Reflection to holders</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <div>
              <Carousel showThumbs={false} autoPlay={true} showArrows={false} showStatus={false} infiniteLoop={true}>
                <div>
                  <img src="Assests/NFT1.png" alt="" style={{width:"250px"}}/>
                </div>
                <div>
                  <img src="Assests/NFT2.png" alt="" style={{width:"250px"}} />
                </div>
                <div>
                  <img src="Assests/NFT3.png" alt="" style={{width:"250px"}}/>
                </div>
              </Carousel>
            </div>
            <div className="row mt-3">
              <div className="col-md-9 col-xs-12 m-auto">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"> Token Address</span>
                  </div>
                  <input
                    type="text"
                    disable
                    className="form-control"
                    value="0x2a2d03a47ae6220312337d1f094badcd1ee948cc"
                  />
                </div>
              </div>
            </div>
            <div className="row text-center mt-4">
              <div className="col">
                <div>
                  <img src="Assests/certik.png" alt="" width={"70%"} />
                </div>
              </div>
              <div className="col">
                <div>
                  <img src="Assests/pcs .png" alt="" width={"70%"} />
                </div>
              </div>
              <div className="col">
                <div>
                  <img src="Assests/xt.png" alt="" width={"70%"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
