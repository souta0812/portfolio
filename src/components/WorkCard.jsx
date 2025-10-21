import styles from './WorkCard.module.css';

// props (引数) で作品データを受け取る
const WorkCard = ({ title, description, imageUrl, tags }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder}>
        {/* <img src={imageUrl} alt={title} /> */}
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.tags}>
          {/* タグも配列で渡してmapで表示するのが良い */}
          {/* {tags.map(tag => <span key={tag}>{tag}</span>)} */}
          <span className={styles.tagPlaceholder}>Tag 1</span>
          <span className={styles.tagPlaceholder}>Tag 2</span>
        </div>
      </div>
    </div>
  );
};
export default WorkCard;