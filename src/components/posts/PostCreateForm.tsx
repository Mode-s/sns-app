import styles from './PostCreateForm.module.css';

export const PostCreateForm = () => {
  return (
    <form>
      <header className={styles.header}>
        <button className={styles.cancelButton} type="button">
          キャンセル
        </button>
        <button className={styles.postButton} type="submit" disabled>
          ポスト
        </button>
      </header>
      <div className={styles.content}>
        <span className={styles.avatar} aria-hidden="true" />
        <div className={styles.inputArea}>
          <textarea className={styles.textarea} name="content" aria-label="投稿内容" placeholder="いまどうしてる？" maxLength={200} />
          <p className={styles.characterCount} aria-live="polite">0/200</p>
        </div>
      </div>
    </form>
  );
};
