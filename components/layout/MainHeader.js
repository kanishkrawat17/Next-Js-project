import React from 'react'
import styles from "./main-header.module.css";
import Link from 'next/link';
const MainHeader = () => {
  return (
    <header className={styles.header}>
        <div><Link href='/' className={styles.logo}>Logo</Link></div>
        <nav className={styles.navigation}>
            <ul>
                <li><Link href='/events'>All Events</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default MainHeader