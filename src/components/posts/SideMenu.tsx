import styels from './SideMenu.module.css';

export const SideMenu = () => {
  return (
    <div className={styels.menuContainer}>
      <aside className={styels.sideMenu} aria-label="メニュー">
        <div className={styels.userInfo}>
          <span className={styels.avatar} aria-hidden="true" />
          <p className={styels.userName}>山田太郎</p>
        </div>
        <button className={styels.logoutButton} type="button">ログアウト</button>
      </aside>
      <div className={styels.overlay} aria-hidden="true" />
    </div>
  );
};
