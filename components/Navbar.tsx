'use client';

import { useState } from 'react';
import Link from 'next/link';
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
                <Link href="/" className={styles.logo}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/cyinov-logo.svg" alt="Cyinov" style={{ height: '130px', width: 'auto', display: 'block' }} />
                </Link>

                <div className={styles.navLinks}>
                    {navItems.map((item) => (
                        <Link key={item.label} href={item.href} className={styles.link}>
                            {item.label}
                        </Link>
                    ))}
                </div>

                <a href="https://wa.me/918800203969" target="_blank" rel="noopener noreferrer" className={styles.signInButton}>
                    Get In Touch
                </a>

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
                    <a
                        href="https://wa.me/918800203969"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.mobileCta}
                        onClick={() => setMobileOpen(false)}
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
