import React from "react";
import "../App.css";
import Card from "./Card";
export default function SelfField(props) {
  return (
    <React.Fragment>
      <div className="box-row">
        {props.fieldCard[0] !== undefined ? (
          <Card
            number={props.fieldCard[0].number}
            type={props.fieldCard[0].type}
          />
        ) : (
          <Card />
        )}
        {props.fieldCard[1] !== undefined ? (
          <Card
            number={props.fieldCard[1].number}
            type={props.fieldCard[1].type}
          />
        ) : (
          <Card />
        )}
        {props.fieldCard[2] !== undefined ? (
          <Card
            number={props.fieldCard[2].number}
            type={props.fieldCard[2].type}
          />
        ) : (
          <Card />
        )}
      </div>
      <div className="box-row">
        {props.fieldCard[3] !== undefined ? (
          <Card
            number={props.fieldCard[3].number}
            type={props.fieldCard[3].type}
          />
        ) : (
          <Card />
        )}
        {props.fieldCard[4] !== undefined ? (
          <Card
            number={props.fieldCard[4].number}
            type={props.fieldCard[4].type}
          />
        ) : (
          <Card />
        )}
        {props.fieldCard[5] !== undefined ? (
          <Card
            number={props.fieldCard[5].number}
            type={props.fieldCard[5].type}
          />
        ) : (
          <Card />
        )}
        {props.fieldCard[6] !== undefined ? (
          <Card
            number={props.fieldCard[6].number}
            type={props.fieldCard[6].type}
          />
        ) : (
          <Card />
        )}
        {props.fieldCard[7] !== undefined ? (
          <Card
            number={props.fieldCard[7].number}
            type={props.fieldCard[7].type}
          />
        ) : (
          <Card />
        )}
      </div>
      <div className="box-row">
        {props.fieldCard[8] !== undefined ? (
          <Card
            number={props.fieldCard[8].number}
            type={props.fieldCard[8].type}
          />
        ) : (
          <Card />
        )}
        {props.fieldCard[9] !== undefined ? (
          <Card
            number={props.fieldCard[9].number}
            type={props.fieldCard[9].type}
          />
        ) : (
          <Card />
        )}
        {props.fieldCard[10] !== undefined ? (
          <Card
            number={props.fieldCard[10].number}
            type={props.fieldCard[10].type}
          />
        ) : (
          <Card />
        )}
        {props.fieldCard[11] !== undefined ? (
          <Card
            number={props.fieldCard[11].number}
            type={props.fieldCard[11].type}
          />
        ) : (
          <Card />
        )}
        {props.fieldCard[12] !== undefined ? (
          <Card
            number={props.fieldCard[12].number}
            type={props.fieldCard[12].type}
          />
        ) : (
          <Card />
        )}
      </div>
    </React.Fragment>
  );
}
