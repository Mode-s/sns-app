import type {Post} from '@/types/type';
import styles from './PostItem.module.css';

import { PostOptionsMenu } from "./PostOptionsMenu";

type PostItemProps = {
  post: Post;
};

export const PostItem = ({ post }: PostItemProps) => {
  return (
    <article className={styles.postItem}>
      <header className={styles.postHeader}>
        <span className={styles.avatar} aria-hidden="true" />
        <p className={styles.userName}>{post.userName}</p>
        <div className={styles.postMeta}>
          <time className={styles.time} dateTime={post.createdAt}>7時間</time>
          <button className={styles.optionButton} type="button" aria-label="投稿オプションを開く">
            <svg width="20" height="4" viewBox="0 0 20 4" fill="none" aria-hidden="true">
              <circle cx="2" cy="2" r="2" fill="#9CA3AF" />
              <circle cx="10" cy="2" r="2" fill="#9CA3AF" />
              <circle cx="18" cy="2" r="2" fill="#9CA3AF" />
            </svg>
          </button>
        </div>
      </header>
      <PostOptionsMenu />
      <p className={styles.postText}>{post.content}</p>
    </article>
  );
};
