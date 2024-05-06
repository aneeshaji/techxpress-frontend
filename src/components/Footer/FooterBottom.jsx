import { Container } from 'react-bootstrap';
import styles from './FooterBottom.module.css';
import { FaFacebook, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';


function FooterBottom() {
    const year = new Date().getFullYear();

    return (
        <div className={styles.bg}>
            <span className={styles.hr} />
            <Container className={styles.container}>
                <span className={styles.logoAndCpr}>TechXpress &copy; {year}. All rights reserved.</span>
                <SocialIcons />
            </Container>
        </div>
    );
}

export default FooterBottom;



export function SocialIcons() {
    return (
        <div className={styles.socialIcons}>
            <a href="#" className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="facebook">
                <FaFacebook />
            </a>
            <a href="#" className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="X aka twitter">
                <FaTwitter />
            </a>
            <a href="#" className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <AiFillInstagram />
            </a>
            <a href="#" className={styles.socialLink} target="_blank" rel="noopener noreferrer"  aria-label="linkedin of the author">
                <FaLinkedinIn />
            </a>
            <a href="#" className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="github">
                <FaGithub />
            </a>
        </div>
    );
}

