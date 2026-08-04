import Image from 'next/image';
import styles from "./PostOptionsMenu.module.css";

export const PostOptionsMenu = () => {
  return (
    <div className={styles.menu} aria-label="投稿オプション">
      <button className={styles.deleteButton} type="button">
        <span>ポストを削除</span>

        <Image className={styles.icon} src="/icons/trash.png" alt="" width={16} height={16} aria-hidden="true" />
      </button>

      <button className={styles.hogeButton} type="button">hogehoge</button>
    </div>
  );
};
