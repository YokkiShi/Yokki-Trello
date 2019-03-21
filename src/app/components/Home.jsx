// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {connect} from "react-redux";


class Home extends Component<{}> {
  render = () => (
    <div>
      <Helmet>
        <title>Home | Trello</title>
      </Helmet>
      {boards.map(board => (
        <Link key={board.id} to={'/b/${board.id}'}>
        {board.title}
        </Link>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  boards: Object.values(state.boards)
});
export default connect(mapStateToProps)(Home);
