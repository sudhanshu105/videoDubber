import React from 'react';
import styles from '../styles/ImageStrip.module.css';

const ImageStrip = () => {
  const images = [
    '/images/amazon.png',
    '/images/bbc.png',
    '/images/google.png',
    '/images/merck.png',
    '/images/meta.png',
    '/images/nbcu.png',
    '/images/netflix.png',
    '/images/target.png',
    '/images/ubs.png',
    '/images/visa.png',
  ];

  return (
    <div className={styles.container}>
        <h1>Trusted By Teams at</h1>
    <div className={styles.imageStripContainer}>
      <div className={styles.imageStrip}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`image-${index}`} />
        ))}
        {images.map((src, index) => (
          <img key={index + images.length} src={src} alt={`image-${index}`} />
        ))}
      </div>
    </div></div>
  );
};

export default ImageStrip;
