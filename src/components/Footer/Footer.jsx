import { Link } from 'react-router-dom'
import business from '../../data/business.js'
import Logo from '../Logo.jsx'
import Icon from '../Icons.jsx'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <Logo width={180} />
          <p className={styles.tag}>{business.tagline}</p>
        </div>

        <div className={styles.col}>
          <h3 className={styles.head}>Contact</h3>
          <a href={business.phoneHref} className={styles.phone}>
            <Icon name="phone" size={18} /> {business.phoneDisplay}
          </a>
          <p className={styles.line}><Icon name="pin" size={18} /> {business.city}, {business.state}</p>
          <p className={styles.line}><Icon name="clock" size={18} /> {business.hours}</p>
        </div>

        <div className={styles.col}>
          <h3 className={styles.head}>Explore</h3>
          <Link to="/#services" className={styles.link}>Services</Link>
          <Link to="/#pricing" className={styles.link}>Pricing</Link>
          <Link to="/#our-work" className={styles.link}>Our Work</Link>
          <Link to="/#faq" className={styles.link}>FAQ</Link>
          <Link to="/get-estimate" className={styles.link}>Get a Free Estimate</Link>
        </div>

        <div className={styles.col}>
          <h3 className={styles.head}>Service Area</h3>
          <p className={styles.line}>{business.city} and nearby areas</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          &copy; {year} {business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
