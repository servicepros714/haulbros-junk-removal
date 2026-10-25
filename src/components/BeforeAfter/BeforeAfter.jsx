import { useState } from 'react'
import styles from './BeforeAfter.module.css'

const jobs = [
  {
    id: 1,
    title: 'Courtyard Pile-Up',
    detail: 'Old fixtures, bins, carpet roll & a busted wheelbarrow',
    before: '/images/before-after/job-1-before.jpg',
    after: '/images/before-after/job-1-after.jpg',
  },
  {
    id: 2,
    title: 'Kitchen Remodel Debris',
    detail: 'Cabinets, countertops & demo scrap off the driveway',
    before: '/images/before-after/job-2-before.jpg',
    after: '/images/before-after/job-2-after.jpg',
  },
  {
    id: 3,
    title: 'Side-Yard Cleanout',
    detail: 'Tub, ladder, bike parts & years of yard clutter',
    before: '/images/before-after/job-3-before.jpg',
    after: '/images/before-after/job-3-after.jpg',
  },
]

function Compare({ job }) {
  const [pos, setPos] = useState(50)
  return (
    <figure className={styles.card}>
      <div className={styles.frame} style={{ '--pos': `${pos}%` }}>
        <img src={job.after} alt={`${job.title} after cleanup`} width="992" height="486" loading="lazy" className={styles.img} />
        <img src={job.before} alt={`${job.title} before cleanup`} width="992" height="486" loading="lazy" className={`${styles.img} ${styles.before}`} />
        <span className={`${styles.tag} ${styles.tagBefore}`}>Before</span>
        <span className={`${styles.tag} ${styles.tagAfter}`}>After</span>
        <span className={styles.divider} aria-hidden="true"><span className={styles.handle} /></span>
        <input
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className={styles.range}
          aria-label={`Drag to compare before and after: ${job.title}`}
        />
      </div>
      <figcaption className={styles.caption}>
        <strong>{job.title}</strong>
        <span>{job.detail}</span>
      </figcaption>
    </figure>
  )
}

export default function BeforeAfter() {
  return (
    <section id="our-work" className={styles.section}>
      <div className="container">
        <div className="sectionHead">
          <span className="eyebrow">Real Jobs, Real Results</span>
          <h2 className="sectionTitle">Drag the Line. See the Difference.</h2>
          <p className="sectionLead">Actual Haul Bros jobs &mdash; slide each photo to compare the before and after.</p>
        </div>
        <div className={styles.grid}>
          {jobs.map((j) => <Compare key={j.id} job={j} />)}
        </div>
      </div>
    </section>
  )
}
