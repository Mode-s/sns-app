'use client';

import { useState } from 'react';
import { PostHeader } from '@/components/posts/PostHeader';
import { PostList } from '@/components/posts/PostList';
import { PostButton } from '@/components/posts/PostButton';
import { PostDeleteModal } from '@/components/posts/PostDeleteModal';
import { SuccessToast } from "@/components/common/SuccessToast";
import { SideMenu } from "@/components/posts/SideMenu";
import styles from './page.module.css';

export default function PostsPage() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <div className={styles.page}>
      <PostHeader />
      <SideMenu />
      <SuccessToast message="ポストを削除しました" />
      <main className={styles.contentArea}>
        <PostList onDeleteClick={handleDeleteClick} />
        <PostButton />
        {isDeleteModalOpen && (<PostDeleteModal onCancel={handleCancelDelete}/>)}
      </main>
    </div>
  );
}
