import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <h1 className={styles.title}>
                Simplified Solutions,
                <span className={styles.titleMain}>Amplified Success</span>
            </h1>

            <p className={styles.subtitle}>
                We combine Hard Law with Creative Strategy to turn your business protection into your strongest asset
            </p>

            <button className={styles.ctaButton}>
                Schedule a Consultation
            </button>
        </section>
    );
};

export default Hero;
