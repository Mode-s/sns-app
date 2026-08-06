'use client';

import { useEffect, useRef } from 'react';
import styles from "./PostDeleteModal.module.css";

type PostDeleteModalProps = {
  onCancel: () => void;
  onDelete: () => void;
};

export const PostDeleteModal = ({ onCancel, onDelete }: PostDeleteModalProps) => {
  const cancelButtonRef = useRef<HTMLButtonElement>(null);
  const deleteButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    cancelButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCancel();
        return;
      }

      if (event.key !== 'Tab') return;

      if (event.shiftKey && document.activeElement === cancelButtonRef.current) {
        event.preventDefault();
        deleteButtonRef.current?.focus();
        return;
      }

      if (!event.shiftKey && document.activeElement === deleteButtonRef.current) {
        event.preventDefault();
        cancelButtonRef.current?.focus();
      }
    };
  
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCancel]);

  return (
    <div className={styles.overlay}>
      <div className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="delete-dialog-title">
        <p className={styles.text} id="dialog-delete-title">このポストを削除しますか？</p>
        <div className={styles.buttons}>
          <button className={styles.cancelButton} type="button" onClick={onCancel} ref={cancelButtonRef}>キャンセル</button>
          <button className={styles.deleteButton} type="button" onClick={onDelete} ref={deleteButtonRef}>削除</button>
        </div>
      </div>
    </div>
  );
};
