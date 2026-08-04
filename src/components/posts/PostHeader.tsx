import styles from './PostHeader.module.css';

export const PostHeader = () => {
  return (
    <header className={styles.header}>
      <button className={styles.menuButton} type="button" aria-label="メニューを開く">
        <span className={styles.avatar} aria-hidden="true"></span>
      </button>

      <p className={styles.logo}>TakT</p>
    </header>
  )
}