import React, { Component } from "react";
import "../styles/index.scss";
import Landing from "../components/landing";
import Head from "../components/head";

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newSite: true,
    }
  }
  render() {
    return (
        <div>
          <Head title="Welcome" />
          <Landing />
        </div>
      )
  }
}

export default Index;
