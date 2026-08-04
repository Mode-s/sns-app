import styles from './LoginForm.module.css';

export const LoginForm = () => {
  return (
    <>
    <header className={styles.header}>
      <p className={styles.logo}>TakT</p>
    </header>
      <section className={styles.loginSection}>
        <h1 className={styles.title}>ログイン</h1>
        <form className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">メールアドレス</label>
            <input className={styles.input} id="email" name="email" type="email" autoComplete="email" placeholder="example@example.com" required />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="password">パスワード</label>
            <input className={styles.input} id="password" name="password" type="password" autoComplete="current-password" placeholder="パスワードを入力" required />
          </div>
          <button className={styles.loginButton} type="button">ログイン</button>
          <p className={styles.link}>パスワードを忘れた方はこちら</p>
        </form>
        <footer className={styles.footer}>
          <nav className={styles.footerNav} aria-label="規約関連">
            <p className={styles.footerLink}>利用規約</p>
            <p className={styles.footerLink}>プライバシーポリシー</p>
          </nav>
        </footer>
      </section>
    </>
  );
};
