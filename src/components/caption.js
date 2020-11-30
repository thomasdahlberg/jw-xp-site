import React from 'react';
import styles from '../styles/caption.module.scss';

const Caption = (props) => {
    return(
        <aside className={styles.caption}>
            <div className={styles.panel}>
                <div className={styles.panheader}>
                    <i className={"fa fa-file-image-o"} aria-hidden="true"></i>
                    <p>&nbsp;&nbsp;&nbsp;{props.landingWork.node.title}</p>
                </div>
                <ul className={styles.panbody}>
                    <li>
                        <i className={"fa fa-calendar"} aria-hidden="true"></i>
                        <p>&nbsp;&nbsp;&nbsp;{props.landingWork.node.year}</p>
                    </li>
                    <li>
                        <i className={"fa fa-paint-brush"} aria-hidden="true"></i>
                        <p>&nbsp;&nbsp;&nbsp;{props.landingWork.node.materials}</p>
                    </li>
                    <li>
                        <i className={"fa fa-map"} aria-hidden="true"></i>
                        <p>&nbsp;&nbsp;&nbsp;{props.landingWork.node.dimensions}</p>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Caption