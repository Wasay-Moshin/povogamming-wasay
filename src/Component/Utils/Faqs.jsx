// import React from 'react'
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Faqs() {
  return (
    <div className="faqs">
      <div className="container">
       <div className="text-center mt-3 mb-5"> <strong>FAQS </strong></div>
        <div className="row ">
          <div className="col-sm-2"></div>
          <div className="col-sm-8 c1">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>HOW TRANSACTIONS CAN BE PERFORMED?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Transactions in Povo can be made with a variety of digital
                  funds. This include your crypto currencies, NFT tokens. You
                  can purchase Povo tokens with fiat currency or swap with other
                  crypto assets, as well.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography style={{ color: "white" }}>
                  HOW CROSS CHAIN FUNCTIONALITIES WORK?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ color: "white" }}>
                  It works by allowing exchange of different cryptocurrencies
                  between different pairs. It basically works as a currency
                  exchange to facilitate your transfer/swap of crypto assets.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography style={{ color: "white" }}>
                  WHAT IS MULTIVERSE USE CASE IN BLOCKCHAIN GAME?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ color: "white" }}>
                  Multiverses can be used in gaming as an advanced feature to
                  enter in parallel universes to explore new area and levels
                  within the game.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography style={{ color: "white" }}>
                  IS THERE ANY LIMIT IN FUND WITHDRAWAL?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ color: "white" }}>
                  Generally, there is not limit implied on withdrawal of your
                  funds with Povo. You can withdrawal at any time and for any
                  amount.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography style={{ color: "white" }}>
                  I HAVE RECEIVED POVO CARD, WHAT TO DO NEXT?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ color: "white" }}>
                  Now that you have your Povo card, you can unlock NFT’s
                  exclusive farms. You can mint NFTs or liquidate your Povo
                  cards at any time or swap them with other crypto assets.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography style={{ color: "white" }}>
                  What do I need to do to join Povo testnet?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ color: "white" }}>
                  <ul>
                    <li>Compatible Wallet</li>
                    <li>Povo extension</li>
                    <li>Required some BNB/Eth or TEX for tranction</li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography style={{ color: "white" }}>
                  NFTs copyrights
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ color: "white" }}>
                  <ul>
                    <li>We have partnered with various artists</li>
                    <li>
                      We are digitalizing gaming assets like hammer, shovel,
                      boxes etc, with unique characteristics
                    </li>
                    <li>
                      These assets are generated by users and licensed under
                      POVO NFTs
                    </li>
                    <li>
                      User can sell these NFTs (gaming assets) in market place.
                    </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
