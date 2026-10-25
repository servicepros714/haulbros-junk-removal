import { Link } from 'react-router-dom'
import business from '../../data/business.js'
import Icon from '../Icons.jsx'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.kicker}>
            <Icon name="pin" size={16} /> {business.city} and nearby areas
          </p>
          <h1 className={styles.title}>
            Junk Out.<br />
            <span className={styles.titleAccent}>Space Back.</span>
          </h1>
          <p className={styles.lead}>
            Haul Bros clears garages, side yards, driveways and whole homes in one visit.
            You point, we lift, load, haul and sweep &mdash; at a price you approve before we start.
          </p>
          <div className={styles.ctas}>
            <Link to="/get-estimate" className="btn btnAmber">
              Get a Free Estimate <Icon name="arrow" size={20} />
            </Link>
            <a href={business.phoneHref} className="btn btnOutlineCream">
              <Icon name="phone" size={18} /> {business.phoneDisplay}
            </a>
          </div>
          <ul className={styles.proof}>
            <li><Icon name="check" size={18} /> Upfront pricing</li>
            <li><Icon name="check" size={18} /> Same-week service</li>
            <li><Icon name="check" size={18} /> We donate &amp; recycle</li>
          </ul>
        </div>

        <div className={styles.visual}>
          <figure className={styles.ticket}>
            <div className={styles.ticketHead}>
              <span>Work Order</span>
              <span>Garage Remodel Haul</span>
            </div>
            <div className={styles.photos}>
              <div className={styles.photo}>
                <img src="/images/before-after/job-2-before.jpg" alt="Remodel debris and old cabinets piled in a driveway before pickup" width="992" height="486" />
                <span className={`${styles.stamp} ${styles.stampBefore}`}>Before</span>
              </div>
              <div className={styles.photo}>
                <img src="/images/before-after/job-2-after.jpg" alt="The same driveway cleared and swept after Haul Bros finished" width="992" height="486" loading="lazy" />
                <span className={`${styles.stamp} ${styles.stampAfter}`}>After</span>
              </div>
            </div>
            <figcaption className={styles.ticketFoot}>
              <Icon name="truck" size={20} /> Loaded, hauled &amp; swept &mdash; one trip.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
