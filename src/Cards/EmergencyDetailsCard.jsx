import React from "react";
import "./EmergencyDetailsCard.css";

const EmergencyDetailsCard = (props) => {
  return (
    <div>
      <div className="detailsContact">
        <table className="table">
          <thead className="thead">
            <tr className="row">
              <th className="col">Sr.No</th>
              <th className="col">Name</th>
              <th className="col">Email</th>
              <th className="col">PhoneNo</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((data) => {
              return (
                <tr key={data.id} className="row">
                  <td className="column">{data.id}</td>
                  <td className="column">{data.name}</td>
                  <td className="column">{data.email}</td>
                  <td className="column">{data.contact}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmergencyDetailsCard;
