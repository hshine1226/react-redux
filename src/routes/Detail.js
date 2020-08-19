import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Detail({ toDo, onClick }) {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {Date(toDo?.id)}</h5>
      <button onClick={onClick}>DELETE</button>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id }
    }
  } = ownProps;

  const toDo = state.find((toDo) => toDo.id === parseInt(id, 10));

  return { toDo };
}

function mapDispatchToProps(dispatch, ownProps) {
  const {
    match: {
      params: { id }
    },
    history: { push }
  } = ownProps;

  return {
    onClick: () => {
      dispatch(actionCreators.deleteToDo(id));
      push("/");
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
