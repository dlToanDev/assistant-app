"use client"

import type React from "react"
import { useState } from "react"
import Navbar from "../../components/Navbar"
import styles from "./assistant.module.css"

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

export default function Assistant() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputText("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        text: getAIResponse(inputText),
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const getAIResponse = (userInput: string): string => {
    const responses = [
      "Tôi hiểu bạn cần hỗ trợ về vấn đề này. Hãy để tôi giúp bạn tìm giải pháp tốt nhất.",
      "Đây là một câu hỏi thú vị! Tôi sẽ phân tích và đưa ra gợi ý phù hợp cho bạn.",
      "Dựa trên thông tin bạn cung cấp, tôi khuyên bạn nên thử cách tiếp cận này...",
      "Tôi có thể giúp bạn lập kế hoạch chi tiết để giải quyết vấn đề này một cách hiệu quả.",
      "Hãy cùng tôi phân tích từng bước để tìm ra giải pháp tối ưu nhất cho bạn.",
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleQuickAction = (text: string) => {
    setInputText(text)
  }

  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.main}>
        {messages.length === 0 ? (
          <div className={styles.welcomeScreen}>
            <div className={styles.welcomeContent}>
              <h2 className={styles.welcomeTitle}>Xin chào! Tôi có thể giúp gì cho bạn?</h2>
              <div className={styles.quickSuggestions}>
                <button
                  className={styles.suggestionCard}
                  onClick={() => handleQuickAction("Giúp tôi lập kế hoạch học tập hiệu quả")}
                >
                  <div className={styles.suggestionTitle}>Lập kế hoạch học tập</div>
                  <div className={styles.suggestionDesc}>Tạo lịch học phù hợp với mục tiêu</div>
                </button>
                <button
                  className={styles.suggestionCard}
                  onClick={() => handleQuickAction("Tôi cần giải bài tập toán khó")}
                >
                  <div className={styles.suggestionTitle}>Giải bài tập</div>
                  <div className={styles.suggestionDesc}>Hướng dẫn từng bước chi tiết</div>
                </button>
                <button
                  className={styles.suggestionCard}
                  onClick={() => handleQuickAction("Hướng dẫn quản lý thời gian hiệu quả")}
                >
                  <div className={styles.suggestionTitle}>Quản lý thời gian</div>
                  <div className={styles.suggestionDesc}>Tối ưu hóa năng suất làm việc</div>
                </button>
                <button
                  className={styles.suggestionCard}
                  onClick={() => handleQuickAction("Tư vấn phương pháp học tiếng Anh")}
                >
                  <div className={styles.suggestionTitle}>Học tiếng Anh</div>
                  <div className={styles.suggestionDesc}>Phương pháp học hiệu quả</div>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Chat messages area */
          <div className={styles.messagesContainer}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`${styles.messageWrapper} ${message.isUser ? styles.userMessageWrapper : styles.aiMessageWrapper}`}
              >
                <div className={styles.messageContent}>
                  {!message.isUser && (
                    <div className={styles.avatar}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                      </svg>
                    </div>
                  )}
                  <div className={styles.messageText}>{message.text}</div>
                  {!message.isUser && (
                    <div className={styles.messageActions}>
                      <button className={styles.actionButton} title="Sao chép">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M12 15H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </button>
                      <button className={styles.actionButton} title="Chỉnh sửa">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9a2 2 0 0 0 2 2v-1" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className={`${styles.messageWrapper} ${styles.aiMessageWrapper}`}>
                <div className={styles.messageContent}>
                  <div className={styles.avatar}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  </div>
                  <div className={styles.typingIndicator}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className={styles.inputSection}>
          <div className={styles.inputContainer}>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Hỏi bất kỳ điều gì"
              className={styles.messageInput}
              rows={1}
              autoFocus
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isTyping}
              className={styles.sendButton}
              type="button"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22,2 15,22 11,13 2,9 22,2" />
              </svg>
            </button>
            <button className={styles.voiceButton} type="button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="23" />
                <line x1="8" y1="23" x2="16" y2="23" />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
