'use client';

import { useState, type SubmitEvent } from 'react';
import { useRouter } from 'next/navigation';
import styles from './PostCreateForm.module.css';

export const PostCreateForm = () => {
  const router = useRouter();
  const [content, setContent] = useState('');
  const isPostDisabled = content.trim().length === 0;

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isPostDisabled) return;

    router.push('/posts?posted=true');
  };

  return (
    <form onSubmit={handleSubmit}>
      <header className={styles.header}>
        <button className={styles.cancelButton} type="button">
          キャンセル
        </button>
        <button className={styles.postButton} type="submit" disabled={isPostDisabled}>
          ポスト
        </button>
      </header>
      <div className={styles.content}>
        <span className={styles.avatar} aria-hidden="true" />
        <div className={styles.inputArea}>
          <textarea className={styles.textarea} value={content} onChange={(event) => setContent(event.target.value)} name="content" aria-label="投稿内容" placeholder="いまどうしてる？" maxLength={200} />
          <p className={styles.characterCount} aria-live="polite">{content.length}/200</p>
        </div>
      </div>
    </form>
  );
};
