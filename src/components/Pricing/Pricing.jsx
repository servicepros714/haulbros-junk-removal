import { Link } from 'react-router-dom'
import business from '../../data/business.js'
import Icon from '../Icons.jsx'
import styles from './Pricing.module.css'

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow">Straight-Up Pricing</span>
        <h2 className="sectionTitle">You Only Pay for the Space You Use</h2>
        <p className="sectionLead">
          No hourly meter running, no surprise add-ons. Your price is based on truck space,
          and it&rsquo;s locked in before we lift a single thing.
        </p>

        <ul className={styles.list}>
          {business.pricingIncludes.map((item) => (
            <li key={item}>
              <span className={styles.check}><Icon name="check" size={18} /></span>
              {item}
            </li>
          ))}
        </ul>

        <div className={styles.ctas}>
          <Link to="/get-estimate" className="btn btnAmber">Get a Free Estimate</Link>
          <a href={business.phoneHref} className="btn btnNavy">
            <Icon name="phone" size={18} /> {business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
