import Navbar from "../../components/Navbar"
import Link from "next/link"
import styles from "./dashboard.module.css"

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.dashboardContent}>
        <header className={styles.header}>
          <h1 className={styles.title}>📊 Dashboard</h1>
          <p className={styles.subtitle}>Tổng quan hoạt động và thống kê của bạn</p>
        </header>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>💬</div>
            <div className={styles.statInfo}>
              <h3 className={styles.statNumber}>127</h3>
              <p className={styles.statLabel}>Cuộc trò chuyện</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>⏱️</div>
            <div className={styles.statInfo}>
              <h3 className={styles.statNumber}>24h</h3>
              <p className={styles.statLabel}>Thời gian tiết kiệm</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>🎯</div>
            <div className={styles.statInfo}>
              <h3 className={styles.statNumber}>15</h3>
              <p className={styles.statLabel}>Nhiệm vụ hoàn thành</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>⭐</div>
            <div className={styles.statInfo}>
              <h3 className={styles.statNumber}>98%</h3>
              <p className={styles.statLabel}>Độ hài lòng</p>
            </div>
          </div>
        </div>

        <div className={styles.sectionsGrid}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>🤖 Trợ lý AI</h2>
            <p className={styles.sectionDescription}>Trò chuyện với AI để được hỗ trợ học tập và làm việc</p>
            <Link href="/assistant" className={styles.actionButton}>
              Bắt đầu trò chuyện
            </Link>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>📈 Thống kê</h2>
            <div className={styles.recentActivity}>
              <div className={styles.activityItem}>
                <span className={styles.activityTime}>10:30</span>
                <span className={styles.activityText}>Hoàn thành bài tập Toán</span>
              </div>
              <div className={styles.activityItem}>
                <span className={styles.activityTime}>09:15</span>
                <span className={styles.activityText}>Trò chuyện với AI về lịch sử</span>
              </div>
              <div className={styles.activityItem}>
                <span className={styles.activityTime}>08:45</span>
                <span className={styles.activityText}>Lập kế hoạch học tập</span>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>📚 Học tập</h2>
            <div className={styles.learningProgress}>
              <div className={styles.progressItem}>
                <span className={styles.subject}>Toán học</span>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: "85%" }}></div>
                </div>
                <span className={styles.progressPercent}>85%</span>
              </div>
              <div className={styles.progressItem}>
                <span className={styles.subject}>Tiếng Anh</span>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: "72%" }}></div>
                </div>
                <span className={styles.progressPercent}>72%</span>
              </div>
              <div className={styles.progressItem}>
                <span className={styles.subject}>Khoa học</span>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: "91%" }}></div>
                </div>
                <span className={styles.progressPercent}>91%</span>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>🎯 Mục tiêu</h2>
            <div className={styles.goalsList}>
              <div className={styles.goalItem}>
                <input type="checkbox" checked className={styles.goalCheckbox} readOnly />
                <span className={styles.goalText}>Hoàn thành bài tập hôm nay</span>
              </div>
              <div className={styles.goalItem}>
                <input type="checkbox" className={styles.goalCheckbox} readOnly />
                <span className={styles.goalText}>Ôn tập 30 phút mỗi ngày</span>
              </div>
              <div className={styles.goalItem}>
                <input type="checkbox" className={styles.goalCheckbox} readOnly />
                <span className={styles.goalText}>Đọc 1 chương sách khoa học</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
