import React, { useState, useContext } from "react";
import "../App.css";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { AppContext } from "../context/AppContext";

export default function Start(props) {
  const [jokerDialog, setJokerDialog] = useState(false);
  const [nonJokerDialog, setNonJokerDialog] = useState(false);
  const history = useHistory();
  const { setSelectedCards } = useContext(AppContext);
  const { setExistJoker } = useContext(AppContext);

  return (
    <React.Fragment>
      <div className="title">
        <h1>OFC-Practice</h1>
        <Button
          className="start-left"
          variant="contained"
          color="primary"
          onClick={() => {
            setExistJoker(true);
            setJokerDialog(true);
          }}
        >
          54枚
        </Button>
        <Button
          className="start-right"
          variant="contained"
          color="primary"
          onClick={() => {
            setExistJoker(false);
            setNonJokerDialog(true);
          }}
        >
          52枚
        </Button>

        <Dialog open={jokerDialog}>
          <DialogContent>
            <DialogContentText>何人でプレイしますか？</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setJokerDialog(true);
                history.push("game");
                props.setMemberCount(2);
                setSelectedCards([]);
              }}
            >
              2人
            </Button>
            <Button
              onClick={() => {
                setJokerDialog(true);
                history.push("game");
                props.setMemberCount(3);
                setSelectedCards([]);
              }}
            >
              3人
            </Button>
            <Button
              onClick={() => {
                setJokerDialog(false);
              }}
            >
              キャンセル
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog open={nonJokerDialog}>
          <DialogContent>
            <DialogContentText>何人でプレイしますか？</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setNonJokerDialog(true);
                history.push("game");
                props.setMemberCount(2);
                setSelectedCards([]);
              }}
            >
              2人
            </Button>
            <Button
              onClick={() => {
                setNonJokerDialog(true);
                history.push("game");
                props.setMemberCount(3);
                setSelectedCards([]);
              }}
            >
              3人
            </Button>
            <Button
              onClick={() => {
                setNonJokerDialog(false);
              }}
            >
              キャンセル
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </React.Fragment>
  );
}
