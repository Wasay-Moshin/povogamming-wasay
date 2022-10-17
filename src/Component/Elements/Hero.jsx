import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Carousel } from "react-responsive-carousel";
import { GrMedium } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiFillRedditCircle } from "react-icons/ai";
function Hero() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  return (
<div className="hero">

      <div className="container">
      <div className="par">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: {
              enable: false,
              zIndex: 0.5,
            },
            particles: {
              number: {
                value: 10,
                density: {
                  enable: false,
                  value_area: 800,
                },
              },
              color: {
                value: "#db9d31",
              },
              shape: {
                type: "circle",
                options: {
                  sides: 5,
                },
              },
              opacity: {
                value: 0.4,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 6,
                random: false,
                anim: {
                  enable: false,
                  speed: 20,
                  size_min: 0.1,
                  sync: false,
                },
              },
              rotate: {
                value: 0,
                random: true,
                direction: "clockwise",
                animation: {
                  enable: true,
                  speed: 5,
                  sync: false,
                },
              },
              // line_linked: {
              //   enable: true,
              //   distance: 600,
              //   color: "#FFFFFF",
              //   opacity: 0.4,
              //   width: 2,
              // },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: false,
                  mode: ["grab"],
                },
                onclick: {
                  enable: false,
                  mode: "bubble",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
            background: {
              color: "",
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "contain",
            },
          }}
        />
      </div>
      
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
              <Carousel
                showThumbs={false}
                autoPlay={true}
                showArrows={false}
                showStatus={false}
                infiniteLoop={true}
                interval={2000}
              >
                <div>
                  <img
                    src="Assests/NFT1.png"
                    alt=""
                    style={{ width: "250px" }}
                  />
                </div>
                <div>
                  <img
                    src="Assests/NFT2.png"
                    alt=""
                    style={{ width: "250px" }}
                  />
                </div>
                <div>
                  <img
                    src="Assests/NFT3.png"
                    alt=""
                    style={{ width: "250px" }}
                  />
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
