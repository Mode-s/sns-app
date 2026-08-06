'use client';

import { useState, useEffect, useRef } from 'react';
import { PostHeader } from '@/components/posts/PostHeader';
import { PostList } from '@/components/posts/PostList';
import { PostButton } from '@/components/posts/PostButton';
import { PostDeleteModal } from '@/components/posts/PostDeleteModal';
import { SuccessToast } from '@/components/common/SuccessToast';
import { SideMenu } from '@/components/posts/SideMenu';
import styles from './page.module.css';

export default function PostsPage() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteToastVisible, setIsDeleteToastVisible] = useState(false);
  const [isPostToastVisible, setIsPostToastVisible] = useState(false);
  const [deleteToastKey, setDeleteToastKey] = useState(0);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const deleteToastTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (deleteToastTimerRef.current !== null) {
        window.clearTimeout(deleteToastTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
  
    if (searchParams.get('posted') !== 'true') return;
  
    let hideTimeoutId: number | null = null;
  
    const showTimeoutId = window.setTimeout(() => {
      setIsPostToastVisible(true);
      window.history.replaceState(null, '', '/posts');
  
      hideTimeoutId = window.setTimeout(() => {
        setIsPostToastVisible(false);
      }, 3000);
    }, 0);
  
    return () => {
      window.clearTimeout(showTimeoutId);
  
      if (hideTimeoutId !== null) {
        window.clearTimeout(hideTimeoutId);
      }
    };
  }, []);

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
      {isDeleteToastVisible && <SuccessToast key={deleteToastKey} message="ポストを削除しました" />}
      {isPostToastVisible && <SuccessToast message="ポストしました" />}
      <main className={styles.contentArea}>
        <PostList onDeleteClick={handleDeleteClick} />
        <PostButton />
        {isDeleteModalOpen && <PostDeleteModal onCancel={handleCancelDelete} onDelete={handleDelete} />}
      </main>
    </div>
  );
}
