// src/views/Home.jsx
import React from "react";
import Navbar from "../component/Navbar.jsx";
import Jumbotron from "../component/Jumbotron.jsx";
import Card from "../component/Card.jsx";
import Footer from "../component/Footer.jsx";

export function Home() {

  const cardsData = [
    {
      title: "Card title 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttonLabel: "Find Out More!",
      buttonUrl: "#",
      imgUrl: "https://via.placeholder.com/500x325"
    },
    {
      title: "Card title 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttonLabel: "Find Out More!",
      buttonUrl: "#",
      imgUrl: "https://via.placeholder.com/500x325"
    },
    {
      title: "Card title 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttonLabel: "Find Out More!",
      buttonUrl: "#",
      imgUrl: "https://via.placeholder.com/500x325"
    },
    {
      title: "Card title 4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttonLabel: "Find Out More!",
      buttonUrl: "#",
      imgUrl: "https://via.placeholder.com/500x325"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Jumbotron />

        <div className="row">
          {cardsData.map((card, index) => {
            return (
              <div className="col-md-3 mb-4" key={index}>
                <Card
                  title={card.title}
                  text={card.text}
                  buttonLabel={card.buttonLabel}
                  buttonUrl={card.buttonUrl}
                  imgUrl={card.imgUrl}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
