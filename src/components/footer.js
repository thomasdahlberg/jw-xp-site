import React from "react"
import footerStyles from "./styles/footer.module.scss";

const Footer = (props) => {
  return (
    <footer className={footerStyles.footer}>
        <button><em>start</em></button>
        {props.painting ? <button>Painting</button> : null}
    </footer>
  )
}

export default Footer;
