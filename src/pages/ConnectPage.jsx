import React from 'react';
import styles from './ConnectPage.module.css';

const ConnectPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.info}>
          <h2>Connect with me</h2>
          <p>お気軽にご連絡ください。</p>
          <a href="mailto:souta..@.com" className={styles.emailLink}>
            souta..@.com
          </a>
          {/* デザイン案のイラスト */}
        </div>

        {/* フォーム送信には Netlify や Formspree が簡単です。
          例 (Netlifyの場合): 
          <form name="contact" method="POST" data-netlify="true">
        */}
        <form className={styles.form}>
          {/* Netlifyを使う場合、隠しフィールドが必要 */}
          {/* <input type="hidden" name="form-name" value="contact" /> */}

          <div className={styles.formGroup}>
            <label htmlFor="name">お名前</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">メールアドレス</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">メッセージ</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>送信</button>
        </form>
      </div>
    </div>
  );
};

export default ConnectPage;