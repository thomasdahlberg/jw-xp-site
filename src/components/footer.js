import React from "react"
import footerStyles from "./styles/footer.module.scss";

const Footer = (props) => {
  return (
    <footer className={footerStyles.footer}>
        <button className={footerStyles.start}><em>start</em></button>
        {props.painting ? <button className={footerStyles.tab}><img src="./images/foldericon.png" alt="folder-icon"/> Painting</button> : null}
        {props.sculpture ? <button className={footerStyles.tab}><img src="./images/foldericon.png" alt="folder-icon"/> Sculpture</button> : null}
        {props.videos ? <button className={footerStyles.tab}><img src="./images/foldericon.png" alt="folder-icon"/> Videos</button> : null}
        {props.recycle ? <button className={footerStyles.tab}><img src="./images/foldericon.png" alt="folder-icon"/> Recycling Bin</button> : null}
    </footer>
  )
}

export default Footer;
