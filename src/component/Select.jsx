import React from "react";
import "../App.css";
import Card from "./Card";
import { JOKER, SPADE, CLOVER, HEART, DIAMOND } from "../common/constant";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Select() {
  const history = useHistory();

  return (
    <div className="select-cards">
      <div className="box-row">
        <Card type={SPADE} number={1} />
        <Card type={SPADE} number={2} />
        <Card type={SPADE} number={3} />
        <Card type={SPADE} number={4} />
        <Card type={SPADE} number={5} />
        <Card type={SPADE} number={6} />
        <Card type={SPADE} number={7} />
        <Card type={SPADE} number={8} />
        <Card type={SPADE} number={9} />
        <Card type={SPADE} number={10} />
        <Card type={SPADE} number={11} />
        <Card type={SPADE} number={12} />
        <Card type={SPADE} number={13} />
      </div>
      <div className="box-row">
        <Card type={CLOVER} number={1} />
        <Card type={CLOVER} number={2} />
        <Card type={CLOVER} number={3} />
        <Card type={CLOVER} number={4} />
        <Card type={CLOVER} number={5} />
        <Card type={CLOVER} number={6} />
        <Card type={CLOVER} number={7} />
        <Card type={CLOVER} number={8} />
        <Card type={CLOVER} number={9} />
        <Card type={CLOVER} number={10} />
        <Card type={CLOVER} number={11} />
        <Card type={CLOVER} number={12} />
        <Card type={CLOVER} number={13} />
      </div>
      <div className="box-row">
        <Card type={HEART} number={1} />
        <Card type={HEART} number={2} />
        <Card type={HEART} number={3} />
        <Card type={HEART} number={4} />
        <Card type={HEART} number={5} />
        <Card type={HEART} number={6} />
        <Card type={HEART} number={7} />
        <Card type={HEART} number={8} />
        <Card type={HEART} number={9} />
        <Card type={HEART} number={10} />
        <Card type={HEART} number={11} />
        <Card type={HEART} number={12} />
        <Card type={HEART} number={13} />
      </div>
      <div className="box-row">
        <Card type={DIAMOND} number={1} />
        <Card type={DIAMOND} number={2} />
        <Card type={DIAMOND} number={3} />
        <Card type={DIAMOND} number={4} />
        <Card type={DIAMOND} number={5} />
        <Card type={DIAMOND} number={6} />
        <Card type={DIAMOND} number={7} />
        <Card type={DIAMOND} number={8} />
        <Card type={DIAMOND} number={9} />
        <Card type={DIAMOND} number={10} />
        <Card type={DIAMOND} number={11} />
        <Card type={DIAMOND} number={12} />
        <Card type={DIAMOND} number={13} />
      </div>
      <div className="box-row select-card-joker">
        <Card type={JOKER} />
        <Card type={JOKER} />
      </div>
      <div className="select-boxes">
        <div className="box-row">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="box-row">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Button
          className="select-btn"
          variant="contained"
          color="primary"
          onClick={() => {
            history.push("/game");
          }}
        >
          SET
        </Button>
      </div>
    </div>
  );
}
