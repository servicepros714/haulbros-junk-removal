import { Link } from 'react-router-dom'
import business from '../../data/business.js'
import Icon from '../Icons.jsx'
import styles from './ServiceAreas.module.css'

export default function ServiceAreas() {
  return (
    <section id="service-areas" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={`eyebrow ${styles.eyebrow}`}>Where We Haul</span>
          <h2 className={`sectionTitle ${styles.title}`}>Serving {business.city} and Nearby Areas</h2>
          <p className={styles.lead}>
            Based in {business.city}, our trucks run daily through the surrounding neighborhoods.
            Not sure if we cover your street? Give us a call &mdash; if you&rsquo;re close, we&rsquo;ll come.
          </p>
          <div className={styles.ctas}>
            <Link to="/get-estimate" className="btn btnAmber">Check Availability</Link>
            <a href={business.phoneHref} className="btn btnOutlineCream">
              <Icon name="phone" size={18} /> {business.phoneDisplay}
            </a>
          </div>
        </div>
        <ul className={styles.list}>
          {business.nearbyAreas.map((a) => (
            <li key={a}><Icon name="pin" size={18} /> {a}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
