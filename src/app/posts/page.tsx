import { PostHeader } from '@/components/posts/PostHeader';
import { PostList } from '@/components/posts/PostList';
import { PostButton } from '@/components/posts/PostButton';
import { PostDeleteModal } from '@/components/posts/PostDeleteModal';
import styles from './page.module.css';

export default function PostsPage() {
  return (
    <div className={styles.page}>
      <PostHeader />
      <main className={styles.contentArea}>
        <PostList />
        <PostButton />
        <PostDeleteModal />
      </main>
    </div>
  );
}
