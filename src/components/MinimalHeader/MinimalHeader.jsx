import { Link } from 'react-router-dom'
import business from '../../data/business.js'
import Logo from '../Logo.jsx'
import Icon from '../Icons.jsx'
import styles from './MinimalHeader.module.css'

export default function MinimalHeader() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand} aria-label={`${business.name} home`}>
          <Logo width={120} className={styles.logo} />
        </Link>
        <a href={business.phoneHref} className={styles.phone}>
          <Icon name="phone" size={18} /> <span>{business.phoneDisplay}</span>
        </a>
      </div>
    </header>
  )
}
