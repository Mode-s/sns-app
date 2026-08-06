import Image from 'next/image';
import styles from "./PostOptionsMenu.module.css";

type PostOptionsMenuProps = {
  onDeleteClick: () => void;
};

export const PostOptionsMenu = ({
  onDeleteClick,
}: PostOptionsMenuProps) => {
  return (
    <div className={styles.menu} aria-label="投稿オプション">
      <button className={styles.deleteButton} type="button" onClick={onDeleteClick}>
        <span>ポストを削除</span>

        <Image className={styles.icon} src="/icons/trash.png" alt="" width={16} height={16} aria-hidden="true" />
      </button>

      <button className={styles.hogeButton} type="button">hogehoge</button>
    </div>
  );
};
