'use client';

import { useEffect, useRef } from 'react';
import styels from './SideMenu.module.css';

type SideMenuProps = {
  onClose: () => void;
};

export const SideMenu = ({onClose}: SideMenuProps) => {
  const sideMenuRef = useRef<HTMLElement>(null);

  useEffect(() => {

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;

      if (!sideMenuRef.current?.contains(target)) {
        onClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return() => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={styels.menuContainer}>
      <aside className={styels.sideMenu} ref={sideMenuRef} aria-label="メニュー">
        <div className={styels.userInfo}>
          <button className={styels.avatar} onClick={onClose} type="button" aria-label="メニューを閉じる" />
          <p className={styels.userName}>山田太郎</p>
        </div>
        <button className={styels.logoutButton} type="button">ログアウト</button>
      </aside>
      <div className={styels.overlay} aria-hidden="true" />
    </div>
  );
};
