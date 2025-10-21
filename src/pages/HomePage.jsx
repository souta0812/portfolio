import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css'; // CSS Modulesをインポート

// イラストをインポート（src/assets フォルダなどに入れる）
// import heroImage from '../assets/hero-face.png'; 

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      {/* === セクション1: ヒーロー === */}
      <section className={styles.heroSection}>
        {/* <img src={heroImage} alt="Welcome face" className={styles.heroImage} /> */}
        <div className={styles.heroFace}>:)</div> {/* イラストの代わり */}
        <h1 className={styles.title}>Welcome to Sota Hashimoto's portfolio!</h1>
        <p className={styles.subtitle}>August 2025. I start my journey from this portfolio.</p>
        <div className={styles.scrollIndicator}>
          Scroll ↓
        </div>
      </section>

      {/* === セクション2: ナビゲーション === */}
      <section className={styles.navSection}>
        <Link to="/about" className={styles.navBlock}>
          <h2>About</h2>
        </Link>
        <Link to="/works" className={styles.navBlock}>
          <h2>Works</h2>
        </Link>
        <Link to="/skills" className={styles.navBlock}>
          <h2>Skills</h2>
        </Link>
        <Link to="/connect" className={styles.navBlock}>
          <h2>Connect</h2>
        </Link>
      </section>

      {/* デザイン案にあるフッターの黒帯 */}
      <footer className={styles.footer}>
        {/* フッターコンテンツ */}
      </footer>
    </div>
  );
};

export default HomePage;