import React, { Component } from "react";
import Layout from "../components/layout";
import Display from "../components/display";
import Window from "../components/window";
import "./styles/index.scss"

class Desktop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newSite: true,
    }
  }
  render() {
    return (
        <Layout>
            <Display>
                <Window />
            </Display>
        </Layout>
      )
  }
}

export default Desktop;