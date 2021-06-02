import React from "react";
import Clock from "../Components/clock";
import Toggle from "../Components/toggle";
import PostFeed from "../Components/postfeed";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <Toggle />
        <PostFeed />
      </div>
    );
  }
}

export default Home;
