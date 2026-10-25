import business from '../../data/business.js'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow">About Haul Bros</span>
        <h2 className="sectionTitle">Local Crew. Honest Work. Heavy Lifting Handled.</h2>
        <p className={styles.body}>
          Haul Bros Junk Removal is a local hauling crew serving {business.city} and nearby areas.
          We started with a simple idea: junk removal should be easy to book, priced fairly,
          and done by people who treat your home like they&rsquo;d want their own treated.
        </p>
        <p className={styles.body}>
          Every job gets the same approach &mdash; show up when we say we will, give you a clear
          price before any work begins, and leave the space cleaner than we found it. Whatever
          can be donated or recycled goes there first, so less of your old stuff ends up in a landfill.
        </p>
        <p className={styles.sign}>&mdash; The Haul Bros Crew</p>
      </div>
    </section>
  )
}
