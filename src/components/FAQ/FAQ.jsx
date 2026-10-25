import { useState } from 'react'
import business from '../../data/business.js'
import Icon from '../Icons.jsx'
import styles from './FAQ.module.css'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className="sectionHead">
          <span className="eyebrow">Questions</span>
          <h2 className="sectionTitle">Before You Book</h2>
        </div>
        <div className={styles.list}>
          {business.faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
                <h3 className={styles.q}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    id={`faq-q-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    {f.q}
                    <span className={styles.icon}><Icon name="plus" size={20} /></span>
                  </button>
                </h3>
                <div id={`faq-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className={styles.a}>
                  <p>{f.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
