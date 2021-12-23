import React from 'react';
import { Link } from "gatsby";
import styles from '../styles/start.module.scss';


const Start = (props) => {
    return(
        <div>
            {props.active ? 
                <div className={styles.container}>
                    <div className={styles.header}>
                        <img src="./images/avatar.png" alt="avatar"/>
                        <h3>James Williams II</h3>    
                    </div>
                    <div className={styles.content}>
                        <section className={styles.white}>
                            <p>James Williams II is a curator and interdisciplinary artist whose work encompasses painting, sculpture and photography. His works center on topics of social and cultural identity in the United States tied together by self-portraiture and narration. His most recent project was curating the show, Whatchamacallit. The exhibition, accompanied with a publication, focused on superimposed identities and the growing obsession over them. Williams is the recipient of the MFA Joan Mitchell Foundation award, the Bromo Seltzer Fellowship, and served as artist-in-residence at School 33 in Baltimore, Maryland. Williams, originally from Upstate New York, received his master’s degree from the Mount Royal School of Art at Maryland Institute College Art (MICA). He currently teaches at MICA.</p>
                        </section>
                        <section className={styles.blue}>
                            <a 
                                href="./resume/Dahlberg_Resume.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                <img className={styles.cv} src="./images/cv_icon.png" alt="cv link"/>
                                <p>CV</p>
                            </a>
                            <a href="https://open.spotify.com/playlist/6farw4JbL8WaKGQ9QOoGVv?si=403d02c909144cdc">
                                <img className={styles.music} src="./images/music_icon.png" alt="music link"/>
                                <p>My Music</p>
                            </a>
                        </section>
                    </div>
                    <div className={styles.footer}>
                    </div>
                </div>
                : null
            }
        </div>
    )
}

export default Start;
