import React, { Component } from "react";
import "./styles/index.scss"
import Landing from "../components/landing";

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newSite: true,
    }
  }
  render() {
    return (
        <Landing />
      )
  }
}

export default Index;
