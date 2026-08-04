import styles from "./PostDeleteModal.module.css";

export const PostDeleteModal = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        <p className={styles.text}>このポストを削除しますか？</p>
        <div className={styles.buttons}>
          <button className={styles.cancelButton} type="button">キャンセル</button>
          <button className={styles.deleteButton} type="button">削除</button>
        </div>
      </div>
    </div>
  );
};
