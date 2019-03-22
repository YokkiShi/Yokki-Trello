import React, { Component } from "react";
import { Helmet } from "react-helmet";
import List from "./List";
import "./Board.scss";
import{ connect } from "react-redux";

class Board extends Component {
  render = () => {
    const{ lists, boardName } = this.props;
    return (
      <div className="board">
        <Helmet>
          <title> {boardName} </title>
        </Helmet>
        <div className = "board-header">
          <h1 className = "board-title"> {boardName} </h1>
        </div>
        <div className = "lists">
          {lists.map(list => 
            <List key = {list.id} list={list} />)}
            </div>
      </div>
    );
  };
}

const mapStateToProps = (state, selfProps) =>{
  const{boardId} = selfProps.match.params;
  const board = state.boards[boardId];
  return{
    lists: board.lists.map(listId => state.lists[listId]),
    boardName: board.title
  };
};

export default connect(mapStateToProps)(Board);