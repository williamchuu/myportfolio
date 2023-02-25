import React from 'react';
import styles from '../styles/Home.module.css'

const ParallaxImage = ({ imageUrl }) => {
    return (
        <div className={styles.parallaxContainer}>
            <div className={styles.parallaxImage} style={{ backgroundImage: `url(${imageUrl})` }} />
        </div>
    );
};

export default ParallaxImage;
