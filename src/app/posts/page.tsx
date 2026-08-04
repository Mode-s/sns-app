import { PostHeader } from '@/components/posts/PostHeader';
import { PostList } from '@/components/posts/PostList';
import { PostButton } from '@/components/posts/PostButton';
import styles from './page.module.css';

export default function PostsPage() {
  return (
    <div className={styles.page}>
      <PostHeader />
      <main>
        <PostList />
      </main>
      <PostButton />
    </div>
  );
}
