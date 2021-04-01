import React, { Component } from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import Display from "../components/display";
import Window from "../components/window";
import Start from "../components/start";
import "../styles/index.scss";
import Painting from "../components/painting";
import Video from "../components/video";
import Photography from "../components/photography";

class Desktop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Painting: false,
      Videos: false,
      Sculpture: false,
      "Recycle Bin": false,
      hidePainting: false,
      hideVideos: false,
      hideSculpture: false,
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
          sculpture = {this.state.Sculpture}
          videos = {this.state.Videos}
          recycle = {this.state["Recycle Bin"]}
          hidePainting = {this.state.hidePainting}
          hideSculpture = {this.state.hideSculpture}
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
                <Painting 
                  active = {this.state.Painting}
                  hidden = {this.state.hidePainting}
                  name = {"Painting"}
                  library = {this.state.paintLib}
                  handleCloseWindow = {this.handleCloseWindow}
                  handleHideWindow = {this.handleHideWindow}
                />
                <Video
                  active = {this.state.Videos}
                  hidden = {this.state.hideVideos}
                  name = {"Videos"}
                  handleCloseWindow = {this.handleCloseWindow}
                  handleHideWindow = {this.handleHideWindow}
                />
                <Photography
                  active = {this.state.Sculpture}
                  hidden = {this.state.hideSculpture}
                  name = {"Photo"}
                  handleCloseWindow = {this.handleCloseWindow}
                  handleHideWindow = {this.handleHideWindow}
                />
                <Window
                  active = {this.state["Recycle Bin"]}
                  hidden = {this.state["hideRecycle Bin"]}
                  name = {"Recycle Bin"}
                  handleCloseWindow = {this.handleCloseWindow}
                  handleHideWindow = {this.handleHideWindow}
                />
            </Display>
        </Layout>
      )
  }
}

export default Desktop;
