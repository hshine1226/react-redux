import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, ownBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={ownBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    ownBtnClick: () => {
      dispatch(actionCreators.deleteToDo(ownProps.id));
    }
  };
}
export default connect(null, mapDispatchToProps)(ToDo);
