import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Slider() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="slider">
      <div className="container text-center">
        <div className="mb-5">
        <h1>
          Povo
          <span style={{ color: "white" }}> Exclusive NFT's </span>
        </h1>
        </div>
        <div>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            arrows={false}
            minimumTouchDrag={20}
          >
            <div>
              <img
                className="img-fluid"
                src="Assests/NFT1.png"
                alt=""
                style={{ width: "300px" }}
              />
              <br />
              <button type="button" className="btn btn-danger mt-3 mb-3">
                BUY
              </button>
            </div>
            <div>
              <img
                className="img-fluid"
                src="Assests/NFT2.png"
                alt=""
                style={{ width: "300px" }}
              />
              <br />
              <button type="button" className="btn btn-danger mt-3 mb-3">
                BUY
              </button>
            </div>
            <div>
              <img
                className="img-fluid"
                src="Assests/NFT3.png"
                alt=""
                style={{ width: "300px" }}
              />
              <br />
              <button type="button" className="btn btn-danger mt-3 mb-3">
                BUY
              </button>
            </div>
            <div>
              <img
                className="img-fluid"
                src="Assests/NFT4.png"
                alt=""
                style={{ width: "300px" }}
              />
              <br />
              <button type="button" className="btn btn-danger mt-3 mb-3">
                BUY
              </button>
            </div>
            <div>
              <img
                className="img-fluid"
                src="Assests/NFT5.png"
                alt=""
                style={{ width: "300px" }}
              />
              <br />
              <button type="button" className="btn btn-danger mt-3 mb-3">
                BUY
              </button>
            </div>
            <div>
              <img
                className="img-fluid"
                src="Assests/NFT6.png"
                alt=""
                style={{ width: "300px" }}
              />
              <br />
              <button type="button" className="btn btn-danger mt-3 mb-3">
                BUY
              </button>
            </div>
            <div>
              <img
                className="img-fluid"
                src="Assests/NFT7.png"
                alt=""
                style={{ width: "300px" }}
              />
              <br />
              <button type="button" className="btn btn-danger mt-3 mb-3">
                BUY
              </button>
            </div>
          </Carousel>
          ;
        </div>
      </div>
    </div>
  );
}

export default Slider;
