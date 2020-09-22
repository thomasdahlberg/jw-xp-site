import React, { Component } from "react"
import footerStyles from "./styles/footer.module.scss";

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = { footer: true }
  }

  render(){
    return (
      <footer className={footerStyles.footer}>
          <button className={footerStyles.start}><em>start</em></button>
          {this.props.painting ? <a className={this.props.hidePainting ? footerStyles.tab : footerStyles.maxTab} onClick={this.props.handleHideWindow}><img src="./images/foldericon.png" alt="folder-icon"/> Painting</a> : null}
          {this.props.sculpture ? <a className={this.props.hideSculpture ? footerStyles.tab : footerStyles.maxTab} onClick={this.props.handleHideWindow}><img src="./images/foldericon.png" alt="folder-icon"/> Sculpture</a> : null}
          {this.props.videos ? <a className={this.props.hideVideos ? footerStyles.tab : footerStyles.maxTab} onClick={this.props.handleHideWindow}><img src="./images/foldericon.png" alt="folder-icon"/> Videos</a> : null}
          {this.props.recycle ? <a className={this.props.hideRecycle ? footerStyles.tab : footerStyles.maxTab} onClick={this.props.handleHideWindow}><img src="./images/foldericon.png" alt="folder-icon"/> Recycling Bin</a> : null}
      </footer>
    )
  }
}

export default Footer;
