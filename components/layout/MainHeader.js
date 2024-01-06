import React from 'react'
import styles from "./main-header.module.css";
import Link from 'next/link';
import Logo from '../icons/Logo';

const MainHeader = () => {
  return (
    <header className={styles.header}>
        <div><Link href='/' className={styles.logo}><span><Logo/></span></Link></div>
        <nav className={styles.navigation}>
            <ul>
                <li><Link href='/events'>Browse All Events</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default MainHeader