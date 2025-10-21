import React from 'react';
import styles from './SkillsPage.module.css';

// SkillItemをこのファイル内で定義しても良い
const SkillItem = ({ name, description, icon }) => (
  <div className={styles.skillItem}>
    <div className={styles.skillIcon}>{icon}</div>
    <div className={styles.skillInfo}>
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  </div>
);

const SkillsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h2>My Skills</h2>
      <div className={styles.skillsList}>
        <SkillItem 
          name="HTML" 
          icon="🎨" 
          description="学校の授業で使いました" 
        />
        <SkillItem 
          name="CSS" 
          icon="💅" 
          description="学校の授業で使いました" 
        />
        {/* ... 他にもスキルを追加 ... */}
      </div>
    </div>
  );
};

export default SkillsPage;