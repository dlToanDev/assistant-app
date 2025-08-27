import styles from "./register.module.css"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Đăng ký</h1>
          <p className={styles.subtitle}>Tạo tài khoản mới để bắt đầu</p>

          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="fullName" className={styles.label}>
                Họ và tên
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className={styles.input}
                placeholder="Nhập họ và tên"
                required
              />
            </div>

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
                placeholder="Tạo mật khẩu"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="confirmPassword" className={styles.label}>
                Xác nhận mật khẩu
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className={styles.input}
                placeholder="Nhập lại mật khẩu"
                required
              />
            </div>

            <div className={styles.checkboxGroup}>
              <input type="checkbox" id="terms" name="terms" className={styles.checkbox} required />
              <label htmlFor="terms" className={styles.checkboxLabel}>
                Tôi đồng ý với{" "}
                <Link href="/terms" className={styles.termsLink}>
                  Điều khoản sử dụng
                </Link>{" "}
                và{" "}
                <Link href="/privacy" className={styles.termsLink}>
                  Chính sách bảo mật
                </Link>
              </label>
            </div>

            <button type="submit" className={styles.submitButton}>
              Đăng ký
            </button>
          </form>

          <div className={styles.divider}>
            <span>hoặc</span>
          </div>

          <p className={styles.loginPrompt}>
            Đã có tài khoản?{" "}
            <Link href="/login" className={styles.loginLink}>
              Đăng nhập ngay
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
