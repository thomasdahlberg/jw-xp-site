import React, { Component } from "react"
import footerStyles from "../styles/footer.module.scss";

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = { footer: true }
  }
  clockRef = React.createRef();

  startTime = () => {
    const node = this.clockRef.current;
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = this.checkTime(m);
    let time = `${h}:${m}`;
    if(node != null) {
      node.innerText = `${time}`;
      let t = setTimeout(this.startTime, 500);
      return t;
    }
  }


  checkTime = (i) => {
    if (i < 10) i = '0' + i;
    return i;
  }

  componentDidMount = () => this.startTime();

  render(){
    return (
      <footer className={footerStyles.footer}>
          <button className={footerStyles.start} id="Start" onClick={this.props.handleHideWindow}>about</button>
          {this.props.painting ? <button id="Painting" className={this.props.hidePainting ? footerStyles.tab : footerStyles.maxTab} onClick={this.props.handleHideWindow}><img src="./images/foldericon.png" alt="folder-icon"/> Painting</button> : null}
          {this.props.sculpture ? <button id="Sculpture" className={this.props.hideSculpture ? footerStyles.tab : footerStyles.maxTab} onClick={this.props.handleHideWindow}><img src="./images/foldericon.png" alt="folder-icon"/> Sculpture</button> : null}
          {this.props.videos ? <button id="Videos" className={this.props.hideVideos ? footerStyles.tab : footerStyles.maxTab} onClick={this.props.handleHideWindow}><img src="./images/foldericon.png" alt="folder-icon"/> Videos</button> : null}
          {this.props.recycle ? <button id="Recycle Bin" className={this.props.hideRecycle ? footerStyles.tab : footerStyles.maxTab} onClick={this.props.handleHideWindow}><img src="./images/recycle.png" alt="folder-icon"/> Recycling Bin</button> : null}
          <p id="clock" ref={this.clockRef} className={footerStyles.clock}></p>
      </footer>
    )
  }
}

export default Footer;
