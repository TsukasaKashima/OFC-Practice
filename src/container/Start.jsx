import React, { useState } from "react";
import "../App.css";
import { connect } from "react-redux";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { oneOpp, twoOpp, selectJoker, nonJoker } from "../action";

const Start = (props) => {
  const [jokerDialog, setJokerDialog] = useState(false);
  const [nonJokerDialog, setNonJokerDialog] = useState(false);
  const history = useHistory();

  function selectOneOpp(member) {
    props.oneOpp(member);
  }

  function selectTwoOpp(member) {
    props.twoOpp(member);
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
                selectOneOpp();
              }}
            >
              2人
            </Button>
            <Button
              onClick={() => {
                setJokerDialog(true);
                history.push("game");
                selectTwoOpp();
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
                selectOneOpp();
              }}
            >
              2人
            </Button>
            <Button
              onClick={() => {
                setNonJokerDialog(true);
                history.push("game");
                selectTwoOpp();
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
};

const mapStateToProps = ({ members, jokers }) => {
  return { members: members, jokers: jokers };
};

const mapDispatchToProps = (dispatch) => ({
  oneOpp: (member) => dispatch(oneOpp(member)),
  twoOpp: (member) => dispatch(twoOpp(member)),
  selectJoker: (joker) => dispatch(selectJoker(joker)),
  nonJoker: (joker) => dispatch(nonJoker(joker)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Start);
