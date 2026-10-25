import Icon from '../Icons.jsx'
import styles from './TrustBar.module.css'

const items = [
  { icon: 'clock', title: 'On-Time Windows', text: 'We call ahead before we roll up' },
  { icon: 'shield', title: 'Price Before Lifting', text: 'You approve it first, every time' },
  { icon: 'recycle', title: 'Donate & Recycle', text: 'Less in the landfill, more reused' },
  { icon: 'truck', title: 'One-Trip Cleanouts', text: 'Big loads cleared in a single visit' },
]

export default function TrustBar() {
  return (
    <div className={styles.bar}>
      <div className={`container ${styles.grid}`}>
        {items.map((it) => (
          <div key={it.title} className={styles.item}>
            <span className={styles.icon}><Icon name={it.icon} size={24} /></span>
            <div>
              <strong>{it.title}</strong>
              <span>{it.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
