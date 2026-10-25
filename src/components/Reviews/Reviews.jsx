import business from '../../data/business.js'
import Icon from '../Icons.jsx'
import styles from './Reviews.module.css'

// Renders only real reviews from business.js (copied from Google).
// Hidden entirely until reviews or a Google reviews link are added.
export default function Reviews() {
  const { reviews, googleReviewsUrl } = business
  if (!reviews.length && !googleReviewsUrl) return null

  return (
    <section id="reviews" className={styles.section}>
      <div className="container">
        <div className="sectionHead">
          <span className="eyebrow">Customer Reviews</span>
          <h2 className="sectionTitle">What Neighbors Say About the Bros</h2>
        </div>

        {reviews.length > 0 && (
          <div className={styles.grid}>
            {reviews.map((r) => (
              <blockquote key={r.name + r.text.slice(0, 12)} className={styles.card}>
                <div className={styles.stars} aria-label={`${r.rating || 5} out of 5 stars`}>
                  {Array.from({ length: r.rating || 5 }).map((_, i) => (
                    <Icon key={i} name="star" size={18} filled />
                  ))}
                </div>
                <p>{r.text}</p>
                <cite>{r.name}</cite>
              </blockquote>
            ))}
          </div>
        )}

        {googleReviewsUrl && (
          <div className={styles.foot}>
            <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="btn btnNavy">
              Read Our Google Reviews
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
