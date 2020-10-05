import React, { Component } from "react";
import Layout from "../components/layout";
import Display from "../components/display";
import Window from "../components/window";
import "./styles/index.scss"

class Desktop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Start: false,
      Painting: false,
      Videos: false,
      Sculpture: false,
      "Recycle Bin": false,
      hidePainting: false,
      hideVideos: false,
      hideSculpture: false,
      "hideRecycle Bin": false
    }
  }

  handleClickWindow = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: true,
      [`hide${e.target.id}`]: false
    })
  }

  handleCloseWindow = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: false
    })
  }

  handleHideWindow = (e) => {
    e.preventDefault();
    if(this.state[`hide${e.target.id}`]){
      this.setState({
        [`hide${e.target.id}`]: false
      })
    } else {
      this.setState({
        [`hide${e.target.id}`]: true
      })
    }
  }

  render() {
    return (
        <Layout
        painting = {this.state.Painting}
        sculpture = {this.state.Sculpture}
        videos = {this.state.Videos}
        recycle = {this.state["Recycle Bin"]}
        hidePainting = {this.state.hidePainting}
        hideSculpture = {this.state.hideSculpture}
        hideVideos = {this.state.hideVideos}
        hideRecycle = {this.state["hideRecycle Bin"]}
        handleHideWindow = {this.handleHideWindow}
        >
            <Display
              handleClickWindow = {this.handleClickWindow}
            >
                <Start
                active = {this.state.Start}
                />

                <Window 
                active = {this.state.Painting}
                hidden = {this.state.hidePainting}
                name = {"Painting"}
                handleCloseWindow = {this.handleCloseWindow}
                />
                <Window
                active = {this.state.Videos}
                hidden = {this.state.hideVideos}
                name = {"Videos"}
                handleCloseWindow = {this.handleCloseWindow}
                />
                <Window
                active = {this.state.Sculpture}
                hidden = {this.state.hideSculpture}
                name = {"Sculpture"}
                handleCloseWindow = {this.handleCloseWindow}
                />
                <Window
                active = {this.state["Recycle Bin"]}
                hidden = {this.state["hideRecycle Bin"]}
                name = {"Recycle Bin"}
                handleCloseWindow = {this.handleCloseWindow}
                />

            </Display>
        </Layout>
      )
  }
}

export default Desktop;
