import { Link } from 'react-router-dom'
import styles from './back-button.module.scss'

export default function BackButton() {
  return (
    <button className={styles.backButton}>
      <Link to="/">back</Link>
    </button>
  )
}
