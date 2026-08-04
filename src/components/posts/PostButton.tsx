import styles from './PostButton.module.css';

export const PostButton = () => {
  return (
    <button className={styles.postButton} type="button" aria-label="新しい投稿を作成">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19M12 5V19" stroke="#FAF1E6" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </button>
  );
};
