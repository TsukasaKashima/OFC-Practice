import React, { useState } from "react";
import "../App.css";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import OppField1 from "./Game";
import OppField2 from "./Game";

export default function Start() {
  const [jokerDialog, setJokerDialog] = useState(false);
  const [nonJokerDialog, setNonJokerDialog] = useState(false);
  const history = useHistory();
  const [oppField, setOppField] = useState([<OppField1 />, <OppField2 />]);

  function removeArea() {
    const getField = oppField.splice(1);
    setOppField(getField);
    /*return oppField.filter(() => {
      return oppField !== oppField[1];
    })*/
  }

  return (
    <React.Fragment>
      <div className="title">
        <h1>OFC検証アプリ</h1>
        <Button
          className="start-left"
          variant="contained"
          color="primary"
          onClick={() => {
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
            setNonJokerDialog(true);
          }}
        >
          52枚(ジョーカー抜き)
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
                removeArea();
              }}
            >
              2人
            </Button>
            <Button
              onClick={() => {
                setJokerDialog(true);
                history.push("game");
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
                //selectOneOpp();
              }}
            >
              2人
            </Button>
            <Button
              onClick={() => {
                setNonJokerDialog(true);
                history.push("game");
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
