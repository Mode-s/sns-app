'use client';

import { useState, useEffect, useRef } from 'react';
import type {Post} from '@/types/type';
import styles from './PostItem.module.css';

import { PostOptionsMenu } from "./PostOptionsMenu";

type PostItemProps = {
  post: Post;
};

export const PostItem = ({ post }: PostItemProps) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const optionsAreaRef = useRef<HTMLDivElement>(null);
  const optionButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOptionsOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;

      if (!optionsAreaRef.current?.contains(target)) {
        setIsOptionsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOptionsOpen(false);
        optionButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOptionsOpen]);

  return (
    <article className={styles.postItem}>
      <header className={styles.postHeader}>
        <span className={styles.avatar} aria-hidden="true" />
        <p className={styles.userName}>{post.userName}</p>
        <div className={styles.postMeta} ref={optionsAreaRef}>
          <time className={styles.time} dateTime={post.createdAt}>7時間</time>
          <button className={styles.optionButton} type="button" aria-label={isOptionsOpen ? "投稿オプションを閉じる" : "投稿オプションを開く"} ref={optionButtonRef} aria-expanded={isOptionsOpen} onClick = {() => setIsOptionsOpen((current) => !current)}>
            <svg width="20" height="4" viewBox="0 0 20 4" fill="none" aria-hidden="true">
              <circle cx="2" cy="2" r="2" fill="#9CA3AF" />
              <circle cx="10" cy="2" r="2" fill="#9CA3AF" />
              <circle cx="18" cy="2" r="2" fill="#9CA3AF" />
            </svg>
          </button>
          {isOptionsOpen && <PostOptionsMenu />}
        </div>
      </header>
      <p className={styles.postText}>{post.content}</p>
    </article>
  );
};
