"use client"

import Navbar from "../../components/Navbar"
import styles from "./ProfilePage.module.css"
import { useState } from "react"

const mockUser = {
  name: "Tên Người Dùng Khác",
  username: "nguoidung123",
  bio: "Yêu thích phát triển web3 và công nghệ AI. Hãy cùng kết nối và chia sẻ kiến thức!",
  avatar: "/path/to/other-user-avatar.jpg",
  stats: {
    posts: 56,
    followers: 1200,
    following: 345,
  },
  walletAddress: "0xAbCdEf1234567890..."
}

const mockUserPosts = [
  {
    id: 1,
    content: "Vừa hoàn thành dự án nhỏ về web3. Cảm ơn HATHU AI đã hỗ trợ!",
    timestamp: "1 ngày trước",
    likes: 42,
    comments: 7,
  },
  {
    id: 2,
    content: "Chia sẻ một mẹo nhỏ khi sử dụng AI để sáng tạo nội dung, rất hữu ích đấy!",
    timestamp: "2 ngày trước",
    likes: 18,
    comments: 2,
  },
]

export default function UserProfilePage() {
  const [activeTab, setActiveTab] = useState("posts")
  const [isFollowing, setIsFollowing] = useState(false) // State để quản lý trạng thái theo dõi

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing) // Đảo ngược trạng thái theo dõi khi bấm
    // Thêm logic API để gửi yêu cầu theo dõi/hủy theo dõi
  }

  const renderContent = () => {
    switch (activeTab) {
      case "posts":
        return (
          <div className={styles.postsContainer}>
            {mockUserPosts.map(post => (
              <div key={post.id} className={styles.postCard}>
                <p>{post.content}</p>
                <div className={styles.postMeta}>
                  <span className={styles.postTimestamp}>{post.timestamp}</span>
                  <div className={styles.postActions}>
                    <div className={styles.actionItem}>👍 {post.likes}</div>
                    <div className={styles.actionItem}>💬 {post.comments}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      case "about":
        return (
          <div className={styles.aboutContainer}>
            <div className={styles.aboutItem}>
              <span className={styles.aboutLabel}>Tiểu sử</span>
              <p className={styles.aboutText}>{mockUser.bio}</p>
            </div>
            <div className={styles.aboutItem}>
              <span className={styles.aboutLabel}>Địa chỉ ví</span>
              <p className={styles.aboutText}>{mockUser.walletAddress}</p>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.profileLayout}>
        <div className={styles.profileCard}>
          <div className={styles.profileHeader}>
            <div className={styles.avatarPlaceholder} />
            <div className={styles.profileInfo}>
              <h1 className={styles.profileName}>{mockUser.name}</h1>
              <p className={styles.profileUsername}>@{mockUser.username}</p>
              <p className={styles.profileBio}>{mockUser.bio}</p>
            </div>
            <div className={styles.actionButtons}>
              <button
                className={`${styles.followButton} ${isFollowing ? styles.following : ''}`}
                onClick={handleFollowClick}
              >
                {isFollowing ? "Đang theo dõi" : "Theo dõi"}
              </button>
              <button className={styles.messageButton}>
                Nhắn tin
              </button>
            </div>
          </div>
          <div className={styles.profileStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>{mockUser.stats.posts}</span>
              <span className={styles.statLabel}>Bài viết</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>{mockUser.stats.followers}</span>
              <span className={styles.statLabel}>Người theo dõi</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>{mockUser.stats.following}</span>
              <span className={styles.statLabel}>Đang theo dõi</span>
            </div>
          </div>
        </div>

        <div className={styles.profileContent}>
          <div className={styles.tabMenu}>
            <button
              className={`${styles.tabButton} ${activeTab === "posts" ? styles.activeTab : ""}`}
              onClick={() => setActiveTab("posts")}
            >
              Bài viết
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === "about" ? styles.activeTab : ""}`}
              onClick={() => setActiveTab("about")}
            >
              Giới thiệu
            </button>
          </div>
          <div className={styles.tabContent}>
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  )
}