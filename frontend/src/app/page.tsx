"use client"

import Navbar from "../components/Navbar"
import Link from "next/link"
import styles from "../styles/HomePage.module.css"
import { useState, useEffect } from "react"
import { ethers } from "ethers"

interface User {
  id: number
  name: string
  avatar: string
}

interface Story {
  id: number
  user: User
  image: string
}

interface Post {
  id: number
  author: User
  content: string
  timestamp: string
  likes: number
  comments: number
  shares: number
  image?: string
}

export default function HomePage() {
  const [account, setAccount] = useState<string | null>(null)
  const [isWalletConnected, setIsWalletConnected] = useState(false)

  const currentUser: User = { id: 0, name: "Toàn", avatar: "/path/to/user-avatar.jpg" } // Thay đổi đường dẫn ảnh

  const stories: Story[] = [
    { id: 1, user: { id: 1, name: "Nguyễn Duy", avatar: "/path/to/duy-avatar.jpg" }, image: "/path/to/duy-story.jpg" }, // Thay đổi đường dẫn ảnh
    { id: 2, user: { id: 2, name: "Lemon Movies", avatar: "/path/to/lemon-avatar.jpg" }, image: "/path/to/lemon-story.jpg" },
    { id: 3, user: { id: 3, name: "Trần Hữu Hoàn", avatar: "/path/to/hoan-avatar.jpg" }, image: "/path/to/hoan-story.jpg" },
    { id: 4, user: { id: 4, name: "Mộng Mơ", avatar: "/path/to/mongmo-avatar.jpg" }, image: "/path/to/mongmo-story.jpg" },
    { id: 5, user: { id: 5, name: "Văn Hóa", avatar: "/path/to/vanhoa-avatar.jpg" }, image: "/path/to/vanhoa-story.jpg" },
  ]

  const feedPosts: Post[] = [
    {
      id: 1,
      author: { id: 6, name: "Tuyên Văn Hóa", avatar: "/path/to/tuyen-avatar.jpg" },
      content: "‼️ HERE WE GOOOOO! Newcastle United chiêu mộ tiền đạo Nick Woltemade với mức phí hơn 80 triệu Euro, Fabrizio Romano xác nhận... Xem thêm",
      timestamp: "2 phút",
      likes: 12456,
      comments: 345,
      shares: 120,
      image: "/path/to/post-image.jpg", // Thay đổi đường dẫn ảnh
    },
    {
      id: 2,
      author: { id: 7, name: "HATHU AI", avatar: "/path/to/ai-avatar.jpg" },
      content: "Tôi có thể giúp bạn giải quyết các bài toán phức tạp và tóm tắt tài liệu nhanh chóng. Hãy thử ngay!",
      timestamp: "1 giờ",
      likes: 245,
      comments: 31,
      shares: 8,
    },
    {
      id: 3,
      author: { id: 6, name: "Tuyên Văn Hóa", avatar: "/path/to/tuyen-avatar.jpg" },
      content: "‼️ HERE WE GOOOOO! Newcastle United chiêu mộ tiền đạo Nick Woltemade với mức phí hơn 80 triệu Euro, Fabrizio Romano xác nhận... Xem thêm",
      timestamp: "2 phút",
      likes: 12456,
      comments: 345,
      shares: 120,
      image: "/path/to/post-image.jpg", // Thay đổi đường dẫn ảnh
    },
    {
      id: 4,
      author: { id: 6, name: "Tuyên Văn Hóa", avatar: "/path/to/tuyen-avatar.jpg" },
      content: "‼️ HERE WE GOOOOO! Newcastle United chiêu mộ tiền đạo Nick Woltemade với mức phí hơn 80 triệu Euro, Fabrizio Romano xác nhận... Xem thêm",
      timestamp: "2 phút",
      likes: 12456,
      comments: 345,
      shares: 120,
      image: "/path/to/post-image.jpg", // Thay đổi đường dẫn ảnh
    },{
      id: 5,
      author: { id: 6, name: "Tuyên Văn Hóa", avatar: "/path/to/tuyen-avatar.jpg" },
      content: "‼️ HERE WE GOOOOO! Newcastle United chiêu mộ tiền đạo Nick Woltemade với mức phí hơn 80 triệu Euro, Fabrizio Romano xác nhận... Xem thêm",
      timestamp: "2 phút",
      likes: 12456,
      comments: 345,
      shares: 120,
      image: "/path/to/post-image.jpg", // Thay đổi đường dẫn ảnh
    },
  ]

  useEffect(() => {
    const checkWallet = async () => {
      try {
        if (window.ethereum) {
          const provider = new ethers.BrowserProvider(window.ethereum)
          const accounts = await provider.listAccounts()
          if (accounts.length > 0) {
            setAccount(accounts[0].address)
            setIsWalletConnected(true)
          }
        }
      } catch (error) {
        console.error("Failed to check wallet connection:", error)
      }
    }
    checkWallet()
  }, [])

  return (
    <div className={styles.container}>
      <Navbar />

      {isWalletConnected ? (
        <main className={styles.feedLayout}>
          <div className={styles.feedLeft}>
            {/* Đây là nơi để bạn thêm các menu bên trái, giống như Facebook */}
          </div>

          <div className={styles.feedCenter}>
            {/* Thanh đăng bài */}
            <div className={styles.createPostCard}>
              <div className={styles.createPostHeader}>
                <div className={styles.avatarPlaceholder} />
                <input type="text" placeholder="Toàn ơi, bạn đang nghĩ gì thế?" className={styles.postInput} />
              </div>
              <div className={styles.postActions}>
                <div className={styles.postActionButton}>
                  <span className={styles.icon}>🔴</span>
                  Video trực tiếp
                </div>
                <div className={styles.postActionButton}>
                  <span className={styles.icon}>🖼️</span>
                  Ảnh/video
                </div>
                <div className={styles.postActionButton}>
                  <span className={styles.icon}>🎬</span>
                  Thước phim
                </div>
              </div>
            </div>

            {/* Stories */}
            <div className={styles.storiesContainer}>
              <div className={styles.createStoryCard}>
                <div className={styles.createStoryImage} />
                <div className={styles.createStoryButton}>+</div>
                <span className={styles.createStoryText}>Tạo tin</span>
              </div>
              {stories.map(story => (
                <div key={story.id} className={styles.storyCard}>
                  <div className={styles.storyAvatar} />
                  <span className={styles.storyName}>{story.user.name}</span>
                </div>
              ))}
            </div>

            {/* Bảng tin chính */}
            <div className={styles.postsContainer}>
              {feedPosts.map(post => (
                <div key={post.id} className={styles.postCard}>
                  <div className={styles.postHeader}>
                    <div className={styles.postAuthorAvatar} />
                    <div className={styles.postMeta}>
                      <div className={styles.postAuthorName}>{post.author.name}</div>
                      <div className={styles.postTimestamp}>{post.timestamp}</div>
                    </div>
                    <button className={styles.postMenu}>...</button>
                  </div>
                  <div className={styles.postContent}>{post.content}</div>
                  {post.image && (
                    <div className={styles.postImage} />
                  )}
                  <div className={styles.postStats}>
                    <span>👍 {post.likes}</span>
                    <span>💬 {post.comments} bình luận</span>
                    <span>↗️ {post.shares} lượt chia sẻ</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.feedRight}>
            {/* Đây là nơi để bạn thêm các menu bên phải */}
          </div>
        </main>
      ) : (
        // Giao diện khi chưa kết nối ví
        <section className={styles.heroSection}>
          <h1 className={styles.title}>HATHU</h1>
          <p className={styles.description}>
            Ứng dụng kết hợp <span className={styles.highlight}>AI TOP 1</span> để hỗ trợ học tập, làm việc và quản lý thời gian hiệu quả.
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
      )}
    </div>
  )
}