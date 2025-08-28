"use client"

import Link from "next/link"
import { useState } from "react"
import styles from "../styles/Navbar.module.css"
import { ethers } from "ethers"

export default function Navbar() {
  const [account, setAccount] = useState<string | null>(null)

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("Vui lòng cài MetaMask!")
        return
      }

      const provider = new ethers.BrowserProvider(window.ethereum)
      const accounts = await provider.send("eth_requestAccounts", [])
      setAccount(accounts[0])
    } catch (error) {
      console.error("Lỗi kết nối ví:", error)
    }
  }

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
          {account ? (
            <span className={styles.walletConnected}>
              ✅ {account.slice(0, 6)}...{account.slice(-4)}
            </span>
          ) : (
            <button onClick={connectWallet} className={styles.loginButton}>
              Kết nối ví
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
