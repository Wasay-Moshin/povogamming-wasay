import React from "react";
import Faq from "react-faq-component";
const data = {
  rows: [
    {
      title: <b> HOW TRANSACTIONS CAN BE PERFORMED? </b>,
      content: <div className="text-start p-2">
       Transactions in Povo can be made with a variety of digital funds. This include your crypto currencies, NFT tokens. You can purchase Povo tokens with fiat currency or swap with other crypto assets, as well.
      </div>
    }]
}
const data1 = {
    rows: [
    {
      title: <b>HOW CROSS CHAIN FUNCTIONALITIES WORK? </b>,
      content: <div className="text-start p-2">
        It works by allowing exchange of different cryptocurrencies between different pairs. It basically works as a currency exchange to facilitate your transfer/swap of crypto assets.</div>
    }]
}
const data2 = {
        rows: [
    {
      title: <b> WHAT IS MULTIVERSE USE CASE IN BLOCKCHAIN GAME?</b>,
      content: <div className="text-start p-2">
       Multiverses can be used in gaming as an advanced feature to enter in parallel universes to explore new area and levels within the game.</div>
    }]
}
const data3 = {
        rows: [
    {
      title: <b> IS THERE ANY LIMIT IN FUND WITHDRAWAL? </b>,
      content: <div className="text-start p-2">Generally, there is not limit implied on withdrawal of your funds with Povo. You can withdrawal at any time and for any amount.</div>
    }]
}
const data4 = {
        rows: [
    {
      title: <b> I HAVE RECEIVED POVO CARD, WHAT TO DO NEXT? </b>,
      content: <div className="text-start p-2">Now that you have your Povo card, you can unlock NFT’s exclusive farms. You can mint NFTs or liquidate your Povo cards at any time or swap them with other crypto assets.</div>
    }]
}
const data5 = {
    rows: [
{
  title: <b> What do I need to do to join Povo testnet? </b>,
  content:
  <ul className="text-start">
        <li> Compatible Wallet</li>
        <li>Povo extension </li>
        <li>Required some BNB/Eth or TEX for tranction</li>
  </ul>
  ,
},
],
}
const data6 = {
        rows: [
    {
      title: <b> NFTs copyrights </b>,
      content: <ul className="text-start">
      <li> We have partnered with various artists</li>
      <li>We are digitalizing gaming assets like hammer, shovel, boxes etc, with unique characteristics</li>
      <li>These assets are generated by users and licensed under POVO NFTs</li>
      <li>User can sell these NFTs (gaming assets) in market place.</li>
</ul>,
    },
  ],
};
const styles = {
  bgColor: "black",
  titleTextColor: "white",
  rowTitleColor: "white",
  rowContentColor: "white",
  arrowColor: "white",
};
const config = {
  //   animate: true,
  // arrowIcon:V,
  //   tabFocus: true
};
function Faqs() {
  return (
    <div className="faqs">
      <div className="container text-center py-5">
        <div className="row">
            <h1>FAQ</h1>
        </div>
        <div className="row pt-5">
          <div className="col-md-8 m-auto">
            <div>
              <Faq config={config} data={data} styles={styles} />
              <Faq config={config} data={data1} styles={styles} />
              <Faq config={config} data={data2} styles={styles} />
              <Faq config={config} data={data3} styles={styles} />
              <Faq config={config} data={data4} styles={styles} />
              <Faq config={config} data={data5} styles={styles} />
              <Faq config={config} data={data6} styles={styles} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Faqs;