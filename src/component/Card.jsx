import React from "react";

const Card = (props) => {
  const { title, text, buttonLabel, buttonUrl, imgUrl } = props;

  return (
    <div className="card h-100">
      <img src={imgUrl} className="card-img-top" alt="Card image" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
      <div className="card-footer">
        <a href={buttonUrl} className="btn btn-primary">
        Find out More!
        </a>
      </div>
    </div>
  );
};

export default Card;
