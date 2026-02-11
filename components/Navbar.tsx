import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/images/cyinovlogo.svg" alt="Cyinov" width={120} height={40} priority />
            </div>

            <div className={styles.navLinks}>
                <Link href="/" className={styles.link}>Home</Link>
                <Link href="#services" className={styles.link}>Services</Link>
                <Link href="/team" className={styles.link}>Our Team</Link>
                <Link href="#contact" className={styles.link}>Contact</Link>
            </div>

            <button className={styles.signInButton}>
                Get In Touch
            </button>
        </nav>
    );
};

export default Navbar;
