import React from "react";
import { GrMedium } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiFillRedditCircle } from "react-icons/ai";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="p1">
              <div className="p1">
                <img
                  className="img-fluid"
                  src="Assests/povologo.png"
                  alt=""
                  width={"60px"}
                />
              </div>
              <div className="p-3">
                <p>
                  <strong> PLAY TO WIN REWARD ON HOLDING </strong>
                  <br />
                  Frictionless yield & liquidity generation protocol
                  <br />
                  for game lover. Povo is deflationary in it's nature
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-4">
            <div className="ic">
              <GrMedium size={"30px"} />
              &nbsp;&nbsp;
              <AiFillGithub size={"30px"} />
              &nbsp;&nbsp;
              <AiOutlineTwitter size={"30px"} />
              &nbsp;&nbsp;
              <FaFacebookF size={"30px"} />
              &nbsp;&nbsp;
              <BsYoutube size={"30px"} />
              &nbsp;&nbsp;
              <FaTelegram size={"30px"} />
              &nbsp;&nbsp;
              <AiFillRedditCircle size={"30px"} />
            </div>
          </div>
        </div>

        <div className="text-center c1">
          <hr />
          <p>Copyright © 2022 PorkSwap.finance</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
