import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function Feature() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState({
    title: "",
    text: "",
  });
  const carddata = [
    {
      img: "Assests/crd1.svg",
      title: "In game items crafting",
      text: "In-game items crafting is a skill or set of skills option  specifically provides in massively multiplayer online games or role playing games and other game genres. It allows the users to use basic tools within the game to  for the purpose of competitive edge over other participants. Other game genres where crafting tool is available are, FPS team fortress 2, which allows its users to combine different weapons to create a new one. Or, sandbox Minecraft, which allows players to create and repair their weapons.",
    },
    {
      img: "Assests/h2.png",
      title: "Cross-chain interoperability and custom wallets",
      text: ` DeFi has a motive to incorporate traditional financial
              services in the cryptocurrency ecosystem. This can only be
              possible if each blockchain in the ecosystem can
              communicate and transfer information and data to other
              blockchains. A reliable and smooth transaction among these
              blockchain will enable to introduce traditional financial
             services to the digital currency ecosystem. Moreover, some
             platforms offer custom wallets where one can store more
             than one currency and use the interchangeable.`,
    },
    {
      img: "Assests/h3.png",
      title: "Multiverse gaming",
      text: ` The concept of multiverse gaming can be described as a set of parallel world, where theplayers can theoretically travel from one universe to the other with advancements in their levels and gaming tools. Sharded virtual worlds such as Ultima online are similar innature to multiverse games, however transportation and communication in sharderd worlds is not as easy as the traditional multiverse games`,
    },
    {
      img: "Assests/h4.png",
      title: "Tokenize character items",
      text: `Povo is one of those games that have tokenized their characters. Meaning that, you can now advance your levels within the game and monetize your virtual rewards. These virtual rewards can then be converted in tangible assets, traded or swapped with other monetized digital funds. Povo made it possible through the use of Non-fungible tokens (NFTs). It uses NFTs to monetized your virtual rewards.`,
    },
    {
      img: "Assests/h5.svg",
      title: "Gamer/devs can introduce their own token",
      text: `Blockchain has revolutionized the world of gaming. It allows the projection of value in intangible assets. It helps gamers to securely store their in-game assets. These in-gameassets can then be stored in the form of a token. And these token can in turn be monetized or swapped with other digital funds. This facility is provided to both developers and gamers.`,
    },
    {
      img: "Assests/h6.png",
      title: "Dapp Store and game studio integration",
      text: `Decentralized applications are a set of programs that harness excess power from different nodes globally. These are community driven application. One example of theseare bitcoins. The integration of Dapps and gaming can create a brainchild which will allow making features of blockchains in gaming. These features might include, a decentralized gaming structure, secure storage of in-game assets, trading of gaming tokens, and interoperability among different games.`,
    },
  ];

  return (
    <>
      <div className="feature">
        <div className="container text-center mt-4">
          <h1 className="mb-5">POVO Features</h1>
          <div className="row">
            {carddata.map((data, index) => (
              <div className="col-sm-6 col-md-4  mb-3 ">
                <div className={`card card1 ${index%2 === 1 && 'red-bg'}`} style={{width: "18rem" }}>
                  <div className="text-center">
                    <img
                      src={data.img}
                      className="img-fluid card-img-top"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text text-start">
                      {data.text.slice(0, 100)}...
                    </p>
                    <div className="">
                      <Button
                        className="btn btn-primary"
                        onClick={() => {
                          setData({
                            title: "In game items crafting",
                            text: "In-game items crafting is a skill or set of skills option  specifically provides in massively multiplayer online games or role playing games and other game genres. It allows the users to use basic tools within the game to  for the purpose of competitive edge over other participants. Other game genres where crafting tool is available are, FPS team fortress 2, which allows its users to combine different weapons to create a new one. Or, sandbox Minecraft, which allows players to create and repair their weapons.",
                          });
                          handleShow();
                        }}
                      >
                        Read more
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="col-sm-4 mb-3 ">
              <div className="card card2" style={{ width: "18rem" }}>
                <div className="text-center mt-1">
                  <img
                    src="Assests/h2.png"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body mt-2">
                  <h5 className="card-title">
                    Cross chain interpretability & custom wallet
                  </h5>
                  <p className="card-text text-start">
                    DeFi has a motive to incorporate traditional financial
                    services in the cryptocurrency ecosystem. This can only be
                    possible if each blockchain in the
                  </p>
                  <div className="text-end">
                    <Button
                      className="btn btn-primary"
                      variant="primary"
                      onClick={() => {
                        setData({
                          title:
                            "Cross-chain interoperability and custom wallets",
                          text: ` DeFi has a motive to incorporate traditional financial
                        services in the cryptocurrency ecosystem. This can only be
                        possible if each blockchain in the ecosystem can
                        communicate and transfer information and data to other
                        blockchains. A reliable and smooth transaction among these
                        blockchain will enable to introduce traditional financial
                        services to the digital currency ecosystem. Moreover, some
                        platforms offer custom wallets where one can store more
                        than one currency and use the interchangeable.`,
                        });
                        handleShow();
                      }}
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-3 ">
              <div className="card card1" style={{ width: "18rem" }}>
                <div className="text-center mt-1">
                  <img
                    src="Assests/h3.png"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Multiverse
                    <br /> gaming
                  </h5>
                  <p className="card-text text-start">
                    The concept of multiverse gaming can be described as a set
                    of parallel world, where theplayers can theoretically travel
                    from one
                  </p>
                  <div className="text-end">
                    <Button
                      className="btn btn-primary"
                      variant="primary"
                      onClick={() => {
                        setData({
                          title: "Multiverse gaming",
                          text: ` The concept of multiverse gaming can be described as a set of parallel world, where theplayers can theoretically travel from one universe to the other with advancements in their levels and gaming tools. Sharded virtual worlds such as Ultima online are similar innature to multiverse games, however transportation and communication in sharderd worlds is not as easy as the traditional multiverse games`,
                        });
                        handleShow();
                      }}
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          {/* <div className="row mt-5">
            <div className="col-sm-4 mb-3">
              <div className="card card2" style={{ width: "18rem" }}>
                <div className="text-center mt-1">
                  <img
                    src="Assests/h4.png"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body mt-2">
                  <h5 className="card-title">
                    Tokenize character
                    <br /> items
                  </h5>
                  <p className="card-text text-start">
                    Povo is one of those games that have tokenized their
                    characters. Meaning that, you can now advance your levels
                    within the game
                  </p>
                  <div className="text-end">
                    <Button
                      className="btn btn-primary"
                      variant="primary"
                      onClick={() => {
                        setData({
                          title: "Tokenize character items",
                          text: `Povo is one of those games that have tokenized their characters. Meaning that, you can now advance your levels within the game and monetize your virtual rewards. These virtual rewards can then be converted in tangible assets, traded or swapped with other monetized digital funds. Povo made it possible through the use of Non-fungible tokens (NFTs). It uses NFTs to monetized your virtual rewards.`,
                        });
                        handleShow();
                      }}
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-3">
              <div className="card card1" style={{ width: "18rem" }}>
                <div className="text-center mt-1">
                  <img
                    src="Assests/h5.svg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Gamer/devs can introduce their own token
                  </h5>
                  <p className="card-text text-start">
                    Blockchain has revolutionized the world of gaming. It allows
                    the projection of value in intangible assets. It helps
                    gamers to securely
                  </p>
                  <div className="text-end">
                    <Button
                      className="btn btn-primary"
                      variant="primary"
                      onClick={() => {
                        setData({
                          title: "Gamer/devs can introduce their own token",
                          text: `Blockchain has revolutionized the world of gaming. It allows the projection of value in intangible assets. It helps gamers to securely store their in-game assets. These in-gameassets can then be stored in the form of a token. And these token can in turn be monetized or swapped with other digital funds. This facility is provided to both developers and gamers.`,
                        });
                        handleShow();
                      }}
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-3">
              <div className="card card2" style={{ width: "18rem" }}>
                <div className="text-center mt-1">
                  <img
                    src="Assests/h6.png"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body mt-2">
                  <h5 className="card-title">
                    Dapp Store and game studio integration
                  </h5>
                  <br />
                  <p className="card-text text-start">
                    Decentralized applications are a set of programs that
                    harness excess power from different nodes globally.
                  </p>
                  <div className="text-end">
                    <Button
                      className="btn btn-primary"
                      variant="primary"
                      onClick={() => {
                        setData({
                          title: "Dapp Store and game studio integration",
                          text: `Decentralized applications are a set of programs that harness excess power from different nodes globally. These are community driven application. One example of theseare bitcoins. The integration of Dapps and gaming can create a brainchild which will allow making features of blockchains in gaming. These features might include, a decentralized gaming structure, secure storage of in-game assets, trading of gaming tokens, and interoperability among different games.`,
                        });
                        handleShow();
                      }}
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{data.text}</Modal.Body>
      </Modal>
    </>
  );
}

export default Feature;
