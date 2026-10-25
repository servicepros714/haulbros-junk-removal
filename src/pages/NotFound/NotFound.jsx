import { Link } from 'react-router-dom'
import business from '../../data/business.js'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Looks Like This Page Got Hauled Away</h1>
        <p className={styles.text}>The page you&rsquo;re looking for isn&rsquo;t here. Head home or give us a call.</p>
        <div className={styles.ctas}>
          <Link to="/" className="btn btnNavy">Back to Home</Link>
          <a href={business.phoneHref} className="btn btnAmber">{business.phoneDisplay}</a>
        </div>
      </div>
    </section>
  )
}
