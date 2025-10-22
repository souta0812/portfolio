// src/pages/AboutPage.jsx

import React from 'react';
import styles from './AboutPage.module.css';
import Baby from '../assets/Baby.jpg';
import Elementary from '../assets/Elementary.jpg';
import High from '../assets/High.jpg';
import Junior_high from '../assets/Junior-high.jpg';
import Now from '../assets/Now.jpg';

const AboutPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.pageTitle}>About Me</h2>
      <p className={styles.intro}>
        2005年、誕生。
      </p>

      {/* デザイン案のレイアウトセクション */}
      <div className={styles.timelineGrid}>

        {/* --- 1行目 --- */}
        {/* 1行目・左 (イラスト) */}
        <div className={`${styles.gridItem} ${styles.gridItemLeft}`}>
          <div className={styles.illustration}>
            <img 
              src={Baby}
              alt="プロフィールイラスト" 
              className={styles.Baby} /* ← CSSで調整するためのクラス名 */
            />
          </div>
        </div>

        {/* 1行目・中央 (線) */}
        <div className={styles.timelineConnector}></div>

        {/* 1行目・右 (テキストボックス) */}
        <div className={`${styles.gridItem} ${styles.gridItemRight}`}>
          <div className={styles.textBox}>
            <h3>2005~ 幼少期</h3>
            <p>
              保育園に通っていました。
              自転車で坂を勢いよく下りてこけ、顔が血だらけになりました。
              好きな食べ物はキャベツの千切りでした。
            </p>
          </div>
        </div>


        {/* --- 2行目 --- */}
        {/* 2行目・左 (テキストボックス) */}
        <div className={`${styles.gridItem} ${styles.gridItemLeft}`}>
          <div className={styles.textBox}>
            <h3>2012.4 小学校入学</h3>
            <p>
              地元の市立小学校に入学しました。
              部活はソフトボール部に所属し、行事などにも積極的に参加しました。
              地域のソフトボールの大会では主審の急所にファールチップを当ててしまいました。
            </p>
          </div>
        </div>

        {/* 2行目・中央 (線) */}
        <div className={styles.timelineConnector}></div>

        {/* 2行目・右 (イラスト) */}
        <div className={`${styles.gridItem} ${styles.gridItemRight}`}>
          <div className={styles.illustration}>
            <img 
              src={Elementary}
              alt="プロフィールイラスト" 
              className={styles.Elementary} /* ← CSSで調整するためのクラス名 */
            />
          </div>
        </div>

        {/* --- 3行目 --- */}
        {/* 3行目・左 (イラスト) */}
        <div className={`${styles.gridItem} ${styles.gridItemLeft}`}>
          <div className={styles.illustration}>
            <img 
              src={Junior_high}
              alt="プロフィールイラスト" 
              className={styles.Junior_high} /* ← CSSで調整するためのクラス名 */
            />
          </div>
        </div>

        {/* 3行目・中央 (線) */}
        <div className={styles.timelineConnector}></div>

        {/* 3行目・右 (テキストボックス) */}
        <div className={`${styles.gridItem} ${styles.gridItemRight}`}>
          <div className={styles.textBox}>
            <h3>2018.4 中学校入学</h3>
            <p>
              地元の市立中学校に入学しました。
              部活は軟式野球部に所属し、生徒会長も務めました。
              ソーラン節に力を入れており、リーダーの一員として文化祭での披露も行いました。
              そこまでやらかしてないと思います。
            </p>
          </div>
        </div>

        {/* --- 4行目 --- */}
        {/* 4行目・左 (テキストボックス) */}
        <div className={`${styles.gridItem} ${styles.gridItemLeft}`}>
          <div className={styles.textBox}>
            <h3>2021.4 高等学校入学</h3>
            <p>
              地元の県立高等学校の普通科に入学しました。
              部活はハンドボール部に所属し、文化祭では団長を務めました。
              高校でもそこまでやらかしてないはずです。
            </p>
          </div>
        </div>

        {/* 4行目・中央 (線) */}
        <div className={styles.timelineConnector}></div>

        {/* 4行目・右 (イラスト) */}
        <div className={`${styles.gridItem} ${styles.gridItemRight}`}>
          <div className={styles.illustration}>
            <img 
              src={High}
              alt="プロフィールイラスト" 
              className={styles.High} /* ← CSSで調整するためのクラス名 */
            />
          </div>
        </div>

        {/* --- 5行目 --- */}
        {/* 5行目・左 (イラスト) */}
        <div className={`${styles.gridItem} ${styles.gridItemLeft}`}>
          <div className={styles.illustration}>
            <img 
              src={Now}
              alt="プロフィールイラスト" 
              className={styles.Now} /* ← CSSで調整するためのクラス名 */
            />
          </div>
        </div>

        {/* 5行目・中央 (線) */}
        <div className={styles.timelineConnector}></div>

        {/* 5行目・右 (テキストボックス) */}
        <div className={`${styles.gridItem} ${styles.gridItemRight}`}>
          <div className={styles.textBox}>
            <h3>2024.4 名古屋大学入学</h3>
            <p>
              情報学部に所属し、情報学の基礎について学んでいます。
              プログラミングサークルに所属し、JPHACKSや技育CAMPハッカソンなど外部のハッカソンなどにも参加しています。
              真面目に生きています。
            </p>
          </div>
        </div>

      </div>

      {/* デザイン案の矢印を最後に配置 */}
      <div className={styles.scrollArrow}>↓</div>

      <p className={styles.outro}>
        そして、今。
      </p>
    </div>
    
  );
};

export default AboutPage;