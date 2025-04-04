import React from "react";

const Jumbotron = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container py-5">
        <h1 className="display-5 fw-bold">Bienvenidos a la Comarca</h1>
        <p className="col-md-8 fs-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Ipsa, bepsa, eligendi, in sunt possimus non incidunt 
          dicta vero aliquid similique quamque!
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          Ir a Hobbiton
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
