import React, { Component } from "react";

import Layout from "../components/layout";
import Head from "../components/head";
import Display from "../components/display";
import Windows from "../components/windows";
import Start from "../components/start";

import "../styles/index.scss";

class Desktop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Painting: false,
      Videos: false,
      Photography: false,
      "Recycle Bin": false,
      hidePainting: false,
      hideVideos: false,
      hidePhotography: false,
      "hideRecycle Bin": false,
      hideStart: false,
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
    console.log(e.target.id);
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
          start = {this.state.hideStart}
          painting = {this.state.Painting}
          Photography = {this.state.Photography}
          videos = {this.state.Videos}
          recycle = {this.state["Recycle Bin"]}
          hidePainting = {this.state.hidePainting}
          hideSculpture = {this.state.hidePhotography}
          hideVideos = {this.state.hideVideos}
          hideRecycle = {this.state["hideRecycle Bin"]}
          handleHideWindow = {this.handleHideWindow}
        >
          <Head title="Browser"/>
            <Display
              handleClickWindow = {this.handleClickWindow}
            >
                <Start
                  active = {this.state.hideStart}
                />
                <Windows 
                  painting = {this.state.Painting}
                  photography = {this.state.Photography}
                  videos = {this.state.Videos}
                  recycle = {this.state["Recycle Bin"]}
                  hidePainting = {this.state.hidePainting}
                  hidePhotography = {this.state.hidePhotography}
                  hideVideos = {this.state.hideVideos}
                  hideRecycle = {this.state["hideRecycle Bin"]}
                  handleCloseWindow = {this.handleCloseWindow}
                  handleHideWindow = {this.handleHideWindow}
                />
            </Display>
        </Layout>
      )
  }
}

export default Desktop;
