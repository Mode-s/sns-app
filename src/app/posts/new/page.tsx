import { PostCreateForm } from '@/components/posts/PostCreateForm';
import styles from "./page.module.css";

export default function PostCreatePage() {
  return (
    <main className={styles.main}>
      <PostCreateForm />
    </main>
  );
}
