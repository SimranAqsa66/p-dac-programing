import React from "react";
import "./Placement.css";
import { Card } from "react-bootstrap";

export const Placementchild = ({ item }) => {
  return (
    <div>
      <Card className="content-card-main">
        <Card.Img
          variant="top"
          style={{
            width: "200px",
            marginLeft: "30px",
            marginTop: "20px",
            borderRadius: "50%",
          }}
          src={item.img}
        />
        <Card.Body>
          <Card.Title>{item.Name}</Card.Title>
          <Card.Text>{item.Passoutyear}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
