import styles from './WorkCard.module.css';

// props (引数) で作品データを受け取る
const WorkCard = ({ title, description, imageUrl, tags, url }) => {

  const Tag = url ? 'a' : 'div';
  // ↓ 3. タグに渡すプロパティ（属性）を準備します
  const cardProps = {
    className: styles.card,
    ...(url && { // urlがある時だけ、以下の属性を追加します
      href: url,
      target: '_blank', // リンクを新しいタブで開く
      rel: 'noopener noreferrer' // セキュリティのための決まり文句
    })
  };

  return (
    <Tag {...cardProps}>
      <div className={styles.imagePlaceholder}>
        {imageUrl ? (
          <img src={imageUrl} alt={title} className={styles.workImage} />
        ) : (
          <span>(画像なし)</span>
        )}
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.tags}>
          {tags.map(tag => (
            <span key={tag} className={styles.tagPlaceholder}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Tag>
  );
};
export default WorkCard;