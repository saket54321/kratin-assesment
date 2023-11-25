import React from "react";
import "./LocalCard.css";

const Card = (props) => {
  return (
    <div>
      {props.data.map((data) => {
        return (
          <div className="cardsDetails" key={data.id}>
            <div className="cards">
              <div className="picture">
                <img src={data.imgdata} alt="" />
              </div>
              <div className="details">
                <div className="title">
                  {" "}
                  <h3>{data.title}</h3>
                </div>
                <div className="name">
                  {" "}
                  <strong>Name :</strong>
                  {data.name}
                </div>
                <div className="contact">
                  {" "}
                  <strong>Contact :</strong>
                  {data.contact}
                </div>
                <div className="charges">
                  <strong>Charges :</strong> ₹{data.charges}
                </div>
                <div className="add">
                  {" "}
                  <strong>Address :</strong> {data.address}
                </div>
                <div className="exp">
                  {" "}
                  <strong>Exp :</strong> {data.exp}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card