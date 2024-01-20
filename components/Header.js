import Link from "next/link"
import styles from '../styles/Header.module.css'
import knowledgeTransferLogo from '/knowledge_transfer_logo.png'

export default function Header(props) {
  return (
    <header className={styles.header}>
      <nav
        className={styles.nav}
        role="navigation"
        aria-label="main navigation"
      >
        <Link href="/" passHref>
          <h1>{props.siteTitle}</h1>
          <img src={knowledgeTransferLogo} />
        </Link>
      </nav>
    </header>
  )
}

