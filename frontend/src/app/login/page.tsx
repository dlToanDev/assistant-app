import styles from "./login.module.css"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Đăng nhập</h1>
          <p className={styles.subtitle}>Chào mừng bạn quay trở lại</p>

          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
                placeholder="Nhập email của bạn"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>
                Mật khẩu
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={styles.input}
                placeholder="Nhập mật khẩu"
                required
              />
            </div>

            <div className={styles.forgotPassword}>
              <Link href="/forgot-password" className={styles.forgotLink}>
                Quên mật khẩu?
              </Link>
            </div>

            <button type="submit" className={styles.submitButton}>
              Đăng nhập
            </button>
          </form>

          <div className={styles.divider}>
            <span>hoặc</span>
          </div>

          <p className={styles.registerPrompt}>
            Chưa có tài khoản?{" "}
            <Link href="/register" className={styles.registerLink}>
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
