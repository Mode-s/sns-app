'use client';

import { useState, useEffect, useRef } from 'react';
import { PostHeader } from '@/components/posts/PostHeader';
import { PostList } from '@/components/posts/PostList';
import { PostButton } from '@/components/posts/PostButton';
import { PostDeleteModal } from '@/components/posts/PostDeleteModal';
import { SuccessToast } from "@/components/common/SuccessToast";
import { SideMenu } from "@/components/posts/SideMenu";
import styles from './page.module.css';

export default function PostsPage() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteToastVisible, setIsDeleteToastVisible] = useState(false);
  const [deleteToastKey, setDeleteToastKey] = useState(0);
  const deleteToastTimerRef = useRef<number | null>(null);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  useEffect(() => {
    return () => {
      if (deleteToastTimerRef.current !== null) {
        window.clearTimeout(deleteToastTimerRef.current);
      }
    };
  }, [])

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
  };

  const handleDelete = () => {
    setIsDeleteModalOpen(false);
    setIsDeleteToastVisible(true);
    setDeleteToastKey((current) => current + 1);

    if (deleteToastTimerRef.current !== null) {
      window.clearTimeout(deleteToastTimerRef.current);
    }

    deleteToastTimerRef.current = window.setTimeout(() => {
      setIsDeleteToastVisible(false);
      deleteToastTimerRef.current = null;
    }, 3000);
  };

  const handleSideMenuToggle = () => {
    setIsSideMenuOpen((current) => !current);
  };

  return (
    <div className={styles.page}>
      <PostHeader isMenuOpen={isSideMenuOpen} onMenuClick={handleSideMenuToggle} />
      {isSideMenuOpen && <SideMenu onClose={() => setIsSideMenuOpen(false)} />}
      {isDeleteToastVisible && (<SuccessToast key={deleteToastKey} message="ポストを削除しました" />)}
      <main className={styles.contentArea}>
        <PostList onDeleteClick={handleDeleteClick} />
        <PostButton />
        {isDeleteModalOpen && (<PostDeleteModal onCancel={handleCancelDelete} onDelete={(handleDelete)}/>)}
      </main>
    </div>
  );
}
