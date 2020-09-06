import React, { Component } from "react";
import Layout from "../components/layout";
import Display from "../components/display";
import "./styles/index.scss"

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newSite: true,
    }
  }
  render() {
    return (
        <Layout>
          <Display />
        </Layout>
      )
  }
}

export default Index;
