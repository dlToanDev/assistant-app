import Link from "next/link"
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          🚀 HATHU
        </Link>
        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>
            Trang chủ
          </Link>
          <Link href="/assistant" className={styles.navLink}>
            Trợ lý
          </Link>
          <Link href="/dashboard" className={styles.navLink}>
            Dashboard
          </Link>
        </div>
        <div className={styles.authButtons}>
          <Link href="/login" className={styles.loginButton}>
            Đăng nhập
          </Link>
          <Link href="/register" className={styles.registerButton}>
            Đăng ký
          </Link>
        </div>
      </div>
    </nav>
  )
}
