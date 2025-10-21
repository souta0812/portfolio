import React from 'react';
import WorkCard from '../components/WorkCard';
import styles from './WorksPage.module.css';

// 将来的に増える作品データ (今はダミー)
const worksData = [
  {
    id: 1,
    title: 'aaa',
    description: 'aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa',
    imageUrl: '', // 画像パス
    tags: ['React', 'CSS']
  },
  {
    id: 2,
    title: '作品B',
    description: 'これは2つ目の作品です。',
    imageUrl: '',
    tags: ['Vite', 'JavaScript']
  },
];

const WorksPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.heroSection}>
        {/* デザイン案のヒーローイラスト部分 */}
        <h2>Works</h2>
      </div>

      <div className={styles.worksList}>
        {/* worksDataをmapで回してWorkCardを生成 */}
        {worksData.map(work => (
          <WorkCard
            key={work.id}
            title={work.title}
            description={work.description}
            imageUrl={work.imageUrl}
            tags={work.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default WorksPage;