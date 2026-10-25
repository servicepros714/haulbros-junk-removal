import { Link } from 'react-router-dom'
import business from '../../data/business.js'
import Icon from '../Icons.jsx'
import styles from './FinalCTA.module.css'

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.patch}>
          <h2 className={styles.title}>Ready to Get Your Space Back?</h2>
          <p className={styles.text}>
            Call the Bros or request your free estimate in under a minute.
            Same-week appointments in {business.city} and nearby areas.
          </p>
          <div className={styles.ctas}>
            <Link to="/get-estimate" className="btn btnNavy">Get a Free Estimate</Link>
            <a href={business.phoneHref} className={`btn ${styles.phoneBtn}`}>
              <Icon name="phone" size={18} /> {business.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
