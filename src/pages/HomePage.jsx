import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css'; // CSS Modulesをインポート
import aboutPreview from '../assets/Baby.jpg';
import worksPreview from '../assets/giant.jpg';

// イラストをインポート（src/assets フォルダなどに入れる）
import portfolio_icon from '../assets/portfolio_icon.jpg'; 
import ScrollToTop from '../components/ScrollToTop';

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <ScrollToTop />
      {/* === セクション1: アイコン === */}
      <section className={styles.heroSection}>
        <h1 className={styles.title}>Welcome to Sota Hashimoto's portfolio!</h1>
        <img src={portfolio_icon} alt="Welcome face" className={styles.portfolio_icon} />
        <p className={styles.subtitle}>August 2025. I start my journey from this portfolio.</p>
        <a href="#nav-section" className={styles.scrollIndicator}>
          Scroll ↓
        </a>
      </section>

      {/* === セクション2: ナビゲーション === */}
      <section className={styles.navSection} id="nav-section">
        <Link
          to="/about"
          className={styles.navBlock}
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url(${aboutPreview})
            `
          }}>
          <h2>About</h2>
        </Link>
        <Link
          to="/works"
          className={styles.navBlock}
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url(${worksPreview})
            `
          }}>
          <h2>Works</h2>
        </Link>
        <Link to="/skills" className={styles.navBlock}>
          <h2>Skills</h2>
          <span className={styles.comingSoon}>作成中</span>
        </Link>
        <Link to="/connect" className={styles.navBlock}>
          <h2>Connect</h2>
          <span className={styles.comingSoon}>作成中</span>
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