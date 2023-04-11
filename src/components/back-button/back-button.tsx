import { Link } from 'react-router-dom'
import styles from './back-button.module.scss'

export default function BackButton({ theme }: { theme: string }) {
  return (
    <button className={`${styles.backButton} ${styles[theme]}`}>
      <Link to="/">back</Link>
    </button>
  )
}
