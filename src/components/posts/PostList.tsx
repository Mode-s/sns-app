import type { Post } from '@/types/type';
import { PostItem } from './PostItem';
import styles from './PostList.module.css';

type PostListProps = {
  onDeleteClick: () => void;
};

const mockPost: Post[] = [
  {
    id: '1',
    userName: '山田太郎',
    avatarUrl: '',
    content: '今日は朝の散歩が気持ちよかった。空気もすがすがで、少し風も吹いていてリフレッシュできた。帰り道にコーヒーを買って、窓際で読書をして過ごしたい。',
    createdAt: '2026-08-04T07:00:00+09:00',
  },
  {
    id: "2",
    userName: "佐藤花子",
    avatarUrl: "",
    content: "今日の夕飯はトマトとナスの煮物。野菜を揃えて、少し長めに煮込むだけで味が染み込みすぎて美味しい。ご飯がすすむ。",
    createdAt: "2026-08-04T06:00:00+09:00",
  },
];

export const PostList = ({onDeleteClick}: PostListProps) => {
  return (
    <section className={styles.postList}>
      {mockPost.map((post) => (
        <PostItem key={post.id} post={post} onDeleteClick={onDeleteClick} />
      ))}
    </section>
  )
};
