import Image from 'next/image';
import styles from './TeamGrid.module.css';

const teamMembers = [
    { src: '/images/portrait_man_purple_bg.png', alt: 'Team member 1' },
    { src: '/images/portrait_woman_pink_bg.png', alt: 'Team member 2' },
    { src: '/images/portrait_woman_green_bg.png', alt: 'Team member 3' },
    { src: '/images/portrait_man_blue_bg.png', alt: 'Team member 4' },
];

const TeamGrid = () => {
    return (
        <div className={styles.gridContainer}>
            {teamMembers.map((member, index) => (
                <div key={index} className={styles.imageWrapper}>
                    <Image
                        src={member.src}
                        alt={member.alt}
                        fill
                        className={styles.image}
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                </div>
            ))}
        </div>
    );
};

export default TeamGrid;
