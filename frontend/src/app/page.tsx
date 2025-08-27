import Navbar from "../components/Navbar"
import Link from "next/link"
import styles from "../styles/HomePage.module.css"

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Navbar />
      <section className={styles.heroSection}>
        <h1 className={styles.title}>HATHU</h1>
        <p className={styles.description}>
          Ứng dụng kết hợp <span className={styles.highlight}>AI TOP 1 </span>
          để hỗ trợ học tập, làm việc và quản lý thời gian hiệu quả.
        </p>
        <div className={styles.buttonContainer}>
          <Link href="/assistant" className={styles.primaryButton}>
            Bắt đầu Trò chuyện
          </Link>
          <Link href="/dashboard" className={styles.secondaryButton}>
            Xem Dashboard
          </Link>
        </div>
      </section>
    </div>
  )
}
