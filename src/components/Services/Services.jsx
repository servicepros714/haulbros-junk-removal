import { Link } from 'react-router-dom'
import business from '../../data/business.js'
import Icon from '../Icons.jsx'
import styles from './Services.module.css'

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className="sectionHead">
          <span className="eyebrow">What We Haul</span>
          <h2 className="sectionTitle">If You Can Point at It, We Can Haul It</h2>
          <p className="sectionLead">
            From a single couch to a full estate cleanout, the Haul Bros crew handles the lifting,
            loading, and disposal so you don&rsquo;t have to.
          </p>
        </div>

        <div className={styles.grid}>
          {business.services.map((s, i) => (
            <article key={s.title} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.icon}><Icon name={s.icon} size={28} /></span>
                <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.text}>{s.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.foot}>
          <p>Don&rsquo;t see your item? Chances are we take it.</p>
          <Link to="/get-estimate" className="btn btnNavy">Get a Free Estimate</Link>
        </div>
      </div>
    </section>
  )
}
