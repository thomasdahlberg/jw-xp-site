import React, {useState, useEffect} from 'react';
import styles from '../styles/start.module.scss';

const START_SECTIONS = ['bio', 'cv', 'statement', 'music'];

const CV = require("../../public/images/JWIICV.pdf");


const Start = (props) => {
    const [activeSection, setActiveSection] = useState('bio');

    const handleClick = (event) => {
        setActiveSection(event.currentTarget.id);
    }

    const displayInfo = () => {
        if(activeSection === 'bio') {
            return <p>James Williams II is a curator and interdisciplinary artist whose work encompasses painting, sculpture and photography. His works center on topics of social and cultural identity in the United States tied together by self-portraiture and narration. His most recent project was curating the show, Whatchamacallit. The exhibition, accompanied with a publication, focused on superimposed identities and the growing obsession over them. Williams is the recipient of the MFA Joan Mitchell Foundation award, the Bromo Seltzer Fellowship, and served as artist-in-residence at School 33 in Baltimore, Maryland. Williams, originally from Upstate New York, received his master’s degree from the Mount Royal School of Art at Maryland Institute College Art (MICA). He currently teaches at MICA.</p>;
        }

        if(activeSection === 'statement') {
            return (
                <div>
                    <p>My work uses satire and visual riposte to challenge the ambiguity of the black construct as both an
                    object and abject. What started as an inquiry about the discursive formation of the black race by my
                    then five-year-old daughter followed my investigation into the subject within American society both
                    past and present. The black construct is complicated, fluid, and unreliable with anthropomorphic
                    qualities. The “truth” of race and complexities is intrinsic to our lives yet as my daughter reminds me
                    daily it's not as complex as we make it. The use of various photographic, technology, and fiber materials
                    blended within the painting is an attempt to find a childlike understanding of the inaccuracies and
                    indecisiveness of racial classifications of Black Americans and the achromatic color they both share.
                    </p>
                </div>
            );
        }

        if(activeSection === 'cv') {
            return <iframe title="CV" frameBorder="0" src={CV} width={'100%'} height={'100%'} style={{border: 'none'}}></iframe>
        }

        return <iframe title="Playlist" frameBorder="0" width={'100%'} height={'100%'} src="https://embed.music.apple.com/us/playlist/jw-painting-playlist/pl.u-4JommxbIMzNm16"></iframe>
    }

    const displaySection = displayInfo();

    useEffect(() => {
        for(const section of START_SECTIONS) {
            if(activeSection === section) {
                if(document.getElementById(activeSection)) {
                    document.getElementById(activeSection).style.backgroundColor = "#00168f";
                    document.getElementById(activeSection).style.color = "white";
                }
            } else {
                if(document.getElementById(section)) {
                    document.getElementById(section).style.backgroundColor = "unset";
                    document.getElementById(section).style.color = "#00168f";
                }
            }
        }            
    });
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
                            {displaySection}
                        </section>
                        <section className={styles.blue}>
                            <button id="bio" onClick={handleClick}>
                                <img className={styles.cv} src="./images/cv_icon.png" alt="bio link"/>
                                <p>My Bio</p>
                            </button>
                            <button id="statement" onClick={handleClick}>
                                <img className={styles.cv} src="./images/cv_icon.png" alt="statement link"/>
                                <p>My Statement</p>
                            </button>
                            <button id="cv" onClick={handleClick}
                            >
                                <img className={styles.cv} src="./images/cv_icon.png" alt="cv link"/>
                                <p>My CV</p>
                            </button>
                            <button 
                                id="music" onClick={handleClick}
                            >
                                <img className={styles.music} src="./images/music_icon.png" alt="music link"/>
                                <p>My Music</p>
                            </button>
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
