import styles from './PostHeader.module.css';

type PostHeaderProps = {
  isMenuOpen: boolean;
  onMenuClick: () => void;
};

export const PostHeader = ({isMenuOpen, onMenuClick}: PostHeaderProps) => {
  return (
    <header className={styles.header}>
      <button className={styles.menuButton} onClick={onMenuClick} type="button" aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'} aria-expanded={isMenuOpen}>
        <span className={styles.avatar} aria-hidden="true"></span>
      </button>

      <p className={styles.logo}>TakT</p>
    </header>
  )
}