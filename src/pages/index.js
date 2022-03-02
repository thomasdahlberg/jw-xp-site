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
      topWindow: null,
    }
  }

  handleClickWindow = (e) => {
    e.preventDefault();
    this.setState({
      [e.currentTarget.id]: true,
      [`hide${e.currentTarget.id}`]: false,
      topWindow: e.currentTarget.id
    });
    this.handleCloseOtherWindows(e.target.id);
  }

  handleCloseOtherWindows = (activeWindow) => {
    let allWindows = ['Painting', 'Videos', 'Photography', 'Recycling Bin'];
    for (const singleWindow of allWindows) {
      if (singleWindow !== activeWindow) {
        this.setState({
          [singleWindow]: false
        });
      }
    }
    this.handleHideStart();
  }

  handleCloseWindow = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: false
    })
  }

  handleHideWindow = (e) => {
    e.preventDefault();
    if(e.target.id === 'Start') {
      this.handleCloseOtherWindows(e.target.id);
    }
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

  handleHideStart = () => {
    this.setState({
      hideStart: false
    });
  }

  render() {
    return (
        <Layout
          start = {this.state.hideStart}
          painting = {this.state.Painting}
          photography = {this.state.Photography}
          videos = {this.state.Videos}
          recycle = {this.state["Recycle Bin"]}
          hidePainting = {this.state.hidePainting}
          hidePhotography = {this.state.hidePhotography}
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
                  handleClickWindow = {this.handleClickWindow}
                  handleCloseWindow = {this.handleCloseWindow}
                  handleHideWindow = {this.handleHideWindow}
                  topWindow = {this.state.topWindow}
                />
            </Display>
        </Layout>
      )
  }
}

export default Desktop;
