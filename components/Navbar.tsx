'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Our Team', href: '/team' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Image src="/images/cyinovlogo.svg" alt="Cyinov" width={120} height={40} priority />
                </div>

                <div className={styles.navLinks}>
                    {navItems.map((item) => (
                        <Link key={item.label} href={item.href} className={styles.link}>
                            {item.label}
                        </Link>
                    ))}
                </div>

                <button className={styles.signInButton}>
                    Get In Touch
                </button>

                {/* Hamburger — mobile only */}
                <button
                    className={styles.hamburger}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`${styles.bar} ${mobileOpen ? styles.barOpen1 : ''}`} />
                    <span className={`${styles.bar} ${mobileOpen ? styles.barOpen2 : ''}`} />
                    <span className={`${styles.bar} ${mobileOpen ? styles.barOpen3 : ''}`} />
                </button>
            </nav>

            {/* Mobile overlay */}
            <div className={`${styles.mobileOverlay} ${mobileOpen ? styles.mobileOverlayOpen : ''}`}>
                <div className={styles.mobileNav}>
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={styles.mobileLink}
                            onClick={() => setMobileOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className={styles.mobileCta}
                        onClick={() => setMobileOpen(false)}
                    >
                        Get In Touch
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
