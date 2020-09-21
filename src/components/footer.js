import React from "react"
import footerStyles from "./styles/footer.module.scss";

const Footer = (props) => {
  return (
    <footer className={footerStyles.footer}>
        <button className={footerStyles.start}><em>start</em></button>
        {props.painting ? <a className={footerStyles.tab}><img src="./images/foldericon.png" alt="folder-icon"/> Painting</a> : null}
        {props.sculpture ? <a className={footerStyles.tab}><img src="./images/foldericon.png" alt="folder-icon"/> Sculpture</a> : null}
        {props.videos ? <a className={footerStyles.tab}><img src="./images/foldericon.png" alt="folder-icon"/> Videos</a> : null}
        {props.recycle ? <a className={footerStyles.tab}><img src="./images/foldericon.png" alt="folder-icon"/> Recycling Bin</a> : null}
    </footer>
  )
}

export default Footer;
