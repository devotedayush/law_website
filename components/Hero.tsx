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

            <button className={styles.ctaButton}>
                Schedule a Consultation
            </button>
        </section>
    );
};

export default Hero;
