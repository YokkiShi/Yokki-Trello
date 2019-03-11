// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


class Home extends Component<{}> {
  render = () => (
    <div>
      <Helmet>
        <title>Home | Trello</title>
      </Helmet>
      <Link to="/b/abc123">Create Your First Board</Link>
    </div>
  );
}

export default Home;
