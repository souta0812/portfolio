// src/pages/AboutPage.jsx

import React from 'react';
import styles from './AboutPage.module.css';
// あとでイラストを差し替える
// import profileIllustration from '../assets/about-illust.png';

const AboutPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.pageTitle}>About Me</h2>
      <p className={styles.intro}>
        はじめまして、Sota Hashimotoです。
        このポートフォリオは、私の学びの記録と挑戦の第一歩です。
      </p>

      {/* デザイン案のレイアウトセクション */}
      <div className={styles.timelineGrid}>

        {/* --- 1行目 --- */}
        {/* 1行目・左 (イラスト) */}
        <div className={`${styles.gridItem} ${styles.gridItemLeft}`}>
          <div className={styles.illustration}>
            {/* <img src={profileIllustration} alt="プロフィールイラスト" /> */}
            <span role="img" aria-label="sheep" className={styles.illustEmoji}>🐑</span>
          </div>
        </div>

        {/* 1行目・中央 (線) */}
        <div className={styles.timelineConnector}></div>

        {/* 1行目・右 (テキストボックス) */}
        <div className={`${styles.gridItem} ${styles.gridItemRight}`}>
          <div className={styles.textBox}>
            <h3>私のこと</h3>
            <p>
              XXXX大学でWeb技術について学んでいます。
              デザインとコーディングの両方に興味があり、ユーザーにとって使いやすく、
              心に残るような体験を提供できる開発者を目指しています。
            </p>
          </div>
        </div>


        {/* --- 2行目 --- */}
        {/* 2行目・左 (テキストボックス) */}
        <div className={`${styles.gridItem} ${styles.gridItemLeft}`}>
          <div className={styles.textBox}>
            <h3>このポートフォリオについて</h3>
            <p>
              デザイン案の作成からReactを使った実装まで、すべて自分で行いました。
              （ここに学習した技術や、苦労した点などを書く）
            </p>
          </div>
        </div>

        {/* 2行目・中央 (線) */}
        <div className={styles.timelineConnector}></div>

        {/* 2行目・右 (空) */}
        <div className={`${styles.gridItem} ${styles.gridItemRight}`}>
          {/* このセルはデザイン案に従って空にしておきます */}
        </div>

      </div>

      {/* デザイン案の矢印を最後に配置 */}
      <div className={styles.scrollArrow}>↓</div>
    </div>
  );
};

export default AboutPage;