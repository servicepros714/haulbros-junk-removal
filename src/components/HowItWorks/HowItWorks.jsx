import business from '../../data/business.js'
import styles from './HowItWorks.module.css'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className="container">
        <div className="sectionHead">
          <span className={`eyebrow ${styles.eyebrow}`}>How It Works</span>
          <h2 className={`sectionTitle ${styles.title}`}>Three Steps to a Clear Space</h2>
        </div>

        <ol className={styles.steps}>
          {business.steps.map((s, i) => (
            <li key={s.title} className={styles.step}>
              <span className={styles.badge} aria-hidden="true">{i + 1}</span>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepText}>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
