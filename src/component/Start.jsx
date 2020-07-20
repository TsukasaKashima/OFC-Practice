import React, { useState } from "react";
import "../App.css";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";

export default function Start() {
  const [memberDialog, setMemberDialog] = useState(false);

  return (
    <React.Fragment>
      <div className="title">
        <h1>OFC検証アプリ</h1>
        <Button
          className="start-left"
          variant="contained"
          color="primary"
          onClick={() => {
            setMemberDialog(true);
          }}
        >
          54枚
        </Button>
        <Button
          className="start-right"
          variant="contained"
          color="primary"
          onClick={() => {
            setMemberDialog(true);
          }}
        >
          52枚(ジョーカー抜き)
        </Button>
        <Dialog open={memberDialog}>
          <DialogContent>
            <DialogContentText>何人でプレイしますか？</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setMemberDialog(true);
              }}
            >
              2人
            </Button>
            <Button
              onClick={() => {
                setMemberDialog(true);
              }}
            >
              3人
            </Button>
            <Button
              onClick={() => {
                setMemberDialog(false);
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
