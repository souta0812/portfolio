import React from 'react';
import WorkCard from '../components/WorkCard';
import styles from './WorksPage.module.css';
import giant from '../assets/giant.jpg';
import oba from '../assets/oba.png';
import SNR from '../assets/SNR.png';
import portfolio_icon from '../../public/portfolio_icon.png';
import logo_eye from '../assets/logo-eye.png';
import lazy from '../assets/lazy.png';
import kikikan from '../assets/kikikan.png';

const worksData = [
  {
    id: 1,
    title: 'kikikan',
    description: '人生で初めて開発に参加したアプリです。大学のサークルの新歓ハッカソンで開発しました。開発は先輩様様で、僕は缶の配置をいじるくらいしかできませんでした。',
    imageUrl: kikikan,
    tags: ['HTML', 'CSS'],
    url: ''
  },
  {
    id: 2,
    title: '安心打診おばあ',
    description: 'サークルの先輩とJPHACKS2024で開発した作品です。全国大会に進出し、三菱重工業スポンサー賞、NTTドコモスポンサー賞を受賞しました。右も左もわからず飛び込んだだけなので技術面では全く貢献できませんでしたが、アイデア面では頑張りました。東京に行った経験は大きな糧になりました。',
    imageUrl: oba, // 画像パス
    tags: ['Flask', 'Python'],
    url: 'https://jphacks.github.io/ng_2406/'
  },
  {
    id: 3,
    title: 'make you lazy',
    description: '大学2年生となり、先輩として新歓ハッカソンに参加した際の作品です。先輩として教える立場を目指していましたがまだまだ教わる立場でアイデア・企画部分でしかあまり貢献できませんでした。',
    imageUrl: lazy,
    tags: ['Vite', 'JavaScript'],
    url: 'https://github.com/jack-app/jackHack2025_C'
  },
  {
    id: 4,
    title: 'ドキドキ☆恋愛コンタクト',
    description: '技育CAMP2025ハッカソンvol.7でおばあの時のメンバーと開発した作品です。今回は「自力でフロントを担当しました」といえることを目標にしましたがレスポンシブデザインなどうまくできませんでした。',
    imageUrl: logo_eye,
    tags: ['Vite', 'JavaScript'],
    url: 'https://github.com/waka320/comminucation-adv'
  },
  {
    id: 5,
    title: 'SNR ~SNSの一歩前~',
    description: '同級生とJPHACKS2025で開発した作品です。三菱重工業スポンサー賞を受賞しました。フロントエンドを担当し、今までよりも確実に開発に貢献できたと思います。企画・アイデア面でも大きく貢献できたと思います。全国大会に向けて現在、絶賛開発中です!',
    imageUrl: SNR,
    tags: ['Vite+React', 'JavaScript', 'FastAPI', 'Python'],
    url: 'https://github.com/jphacks/ng_2502/'
  },
  {
    id: 6,
    title: 'ポートフォリオ',
    description: 'このポートフォリオです。初のソロ作品です。完成を目標にし、作りながら学んでいます。',
    imageUrl: portfolio_icon,
    tags: ['Vite+React', 'JavaScript'],
    url: 'https://portfolio-eight-ecru-29.vercel.app/'
  },
];

const WorksPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.heroSection}>
        {/* デザイン案のヒーローイラスト部分 */}
        <img 
          src={giant} 
          alt="giant illustration" 
          className={styles.giantImage} 
        />
      </div>

      <a href="#works-list" className={styles.scrollIndicator}>
        Scroll
        <div>↓↓↓</div>
      </a>

      <div className={styles.worksList} id="works-list">
        {/* worksDataをmapで回してWorkCardを生成 */}
        {worksData.map(work => (
          <WorkCard
            key={work.id}
            title={work.title}
            description={work.description}
            imageUrl={work.imageUrl}
            tags={work.tags}
            url={work.url}
          />
        ))}
      </div>
    </div>
  );
};

export default WorksPage;