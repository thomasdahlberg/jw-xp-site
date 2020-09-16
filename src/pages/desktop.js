import React, { Component } from "react";
import Layout from "../components/layout";
import Display from "../components/display";
import Window from "../components/window";
import "./styles/index.scss"

class Desktop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Painting: false,
      Videos: false,
      Sculpture: false,
      "Recycle Bin": false
    }
  }

  handleClickWindow = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: true
    })
  }

  handleCloseWindow = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: false
    })
  }

  render() {
    return (
        <Layout>
            <Display
              handleClickWindow = {this.handleClickWindow}
            >
                <Window 
                active = {this.state.Painting}
                name = {"Painting"}
                handleCloseWindow = {this.handleCloseWindow}
                />
                <Window
                active = {this.state.Videos}
                name = {"Videos"}
                handleCloseWindow = {this.handleCloseWindow}
                />
                <Window
                active = {this.state.Sculpture}
                name = {"Sculpture"}
                handleCloseWindow = {this.handleCloseWindow}
                />
                <Window
                active = {this.state.["Recycle Bin"]}
                name = {"Recycle Bin"}
                handleCloseWindow = {this.handleCloseWindow}
                />

            </Display>
        </Layout>
      )
  }
}

export default Desktop;
