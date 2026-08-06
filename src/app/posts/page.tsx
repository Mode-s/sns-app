import { PostHeader } from '@/components/posts/PostHeader';
import { PostList } from '@/components/posts/PostList';
import { PostButton } from '@/components/posts/PostButton';
import { PostDeleteModal } from '@/components/posts/PostDeleteModal';
import { SuccessToast } from "@/components/common/SuccessToast";
import { SideMenu } from "@/components/posts/SideMenu";
import styles from './page.module.css';

export default function PostsPage() {
  return (
    <div className={styles.page}>
      <PostHeader />
      <SideMenu />
      <SuccessToast message="ポストを削除しました" />
      <main className={styles.contentArea}>
        <PostList />
        <PostButton />
        <PostDeleteModal />
      </main>
    </div>
  );
}
