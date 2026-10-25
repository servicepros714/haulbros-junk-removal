import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import business from '../../data/business.js'
import Logo from '../Logo.jsx'
import Icon from '../Icons.jsx'
import styles from './Header.module.css'

const nav = [
  { label: 'Services', to: '/#services' },
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'Pricing', to: '/#pricing' },
  { label: 'Our Work', to: '/#our-work' },
  { label: 'FAQ', to: '/#faq' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand} onClick={() => setOpen(false)} aria-label={`${business.name} home`}>
          <Logo width={132} className={styles.logo} />
        </Link>

        <nav className={styles.nav} aria-label="Main">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className={styles.navLink}>{n.label}</Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={business.phoneHref} className={styles.phone}>
            <span className={styles.phoneIcon}><Icon name="phone" size={18} /></span>
            <span className={styles.phoneText}>
              <small>Call the Bros</small>
              {business.phoneDisplay}
            </span>
          </a>
          <Link to="/get-estimate" className={`btn btnAmber ${styles.cta}`}>Get a Free Estimate</Link>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} size={26} />
            <span className="srOnly">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <nav aria-label="Mobile">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className={styles.drawerLink} onClick={() => setOpen(false)}>{n.label}</Link>
          ))}
        </nav>
        <div className={styles.drawerCtas}>
          <Link to="/get-estimate" className="btn btnAmber" onClick={() => setOpen(false)}>Get a Free Estimate</Link>
          <a href={business.phoneHref} className="btn btnOutlineCream">
            <Icon name="phone" size={18} /> {business.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  )
}
