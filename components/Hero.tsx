import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <h1 className={styles.title}>
                Simplified Solutions,
                <span className={styles.titleMain}>Amplified Success</span>
            </h1>

            <p className={styles.subtitle}>
                Empowering businesses with innovative solutions and strategic excellence
            </p>

            <a href="https://wa.me/918800203969" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                Schedule a Consultation
            </a>
        </section>
    );
};

export default Hero;
