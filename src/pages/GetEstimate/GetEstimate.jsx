import { useState } from 'react'
import { Link } from 'react-router-dom'
import business from '../../data/business.js'
import styles from './GetEstimate.module.css'

// Canonical Howard's wizard structure — keep identical across portfolio sites.
const STEPS = ['Service Area', 'Junk Type', 'Your Info']

const JUNK_TYPES = [
  { id: 'household', label: 'Household Items', sub: 'Furniture, appliances, mattresses & clutter' },
  { id: 'storage', label: 'Storage Unit', sub: 'Full or partial unit cleanouts' },
  { id: 'construction', label: 'Construction Debris', sub: 'Drywall, wood, tile & remodel waste' },
  { id: 'misc', label: 'Miscellaneous', sub: 'Yard waste, hot tubs & anything else' },
]

function formatPhone(digits) {
  const d = digits.slice(0, 10)
  if (d.length < 4) return d.length ? `(${d}` : ''
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function Progress({ step }) {
  return (
    <ol className={styles.progress}>
      {STEPS.map((label, i) => {
        const n = i + 1
        const state = n < step ? 'complete' : n === step ? 'current' : 'upcoming'
        return (
          <li
            key={label}
            className={`${styles.progressItem} ${styles[state]}`}
            aria-current={state === 'current' ? 'step' : undefined}
          >
            <span className={styles.progressCircle}>
              {state === 'complete' ? <CheckIcon /> : n}
            </span>
            <span className={styles.progressLabel}>{label}</span>
            <span className="srOnly">
              {state === 'complete' ? ' (completed)' : state === 'current' ? ' (current step)' : ' (upcoming)'}
            </span>
          </li>
        )
      })}
    </ol>
  )
}

function OptionCard({ selected, onClick, label, sub, type = 'checkbox' }) {
  return (
    <button
      type="button"
      role={type}
      aria-checked={selected}
      className={`${styles.wizardOption} ${selected ? styles.selected : ''}`}
      onClick={onClick}
    >
      <span className={styles.wizardOptionTop}>
        <span className={styles.checkbox} aria-hidden="true">{selected && <CheckIcon />}</span>
        <span className={styles.optionLabel}>{label}</span>
      </span>
      <span className={styles.optionSub}>{sub}</span>
    </button>
  )
}

export default function GetEstimate() {
  const [step, setStep] = useState(1)
  const [inArea, setInArea] = useState(null)
  const [types, setTypes] = useState([])
  const [name, setName] = useState('')
  const [phoneDigits, setPhoneDigits] = useState('')
  const [details, setDetails] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const toggleType = (id) =>
    setTypes((t) => (t.includes(id) ? t.filter((x) => x !== id) : [...t, id]))

  const canNext =
    (step === 1 && inArea !== null) ||
    (step === 2 && types.length > 0) ||
    (step === 3 && name.trim().length > 1 && phoneDigits.length === 10)

  const onPhoneKeyDown = (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return
    if (e.key.length === 1 && !/[0-9]/.test(e.key)) e.preventDefault()
  }
  const onPhoneChange = (e) => {
    let d = e.target.value.replace(/\D/g, '')
    if (d.length === 11 && d.startsWith('1')) d = d.slice(1)
    setPhoneDigits(d.slice(0, 10))
  }
  const onPhonePaste = (e) => {
    e.preventDefault()
    let d = (e.clipboardData.getData('text') || '').replace(/\D/g, '')
    if (d.length === 11 && d.startsWith('1')) d = d.slice(1)
    setPhoneDigits(d.slice(0, 10))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!canNext || sending) return
    setError('')
    const payload = {
      business: business.name,
      inServiceArea: inArea,
      junkTypes: types.map((id) => JUNK_TYPES.find((t) => t.id === id)?.label),
      name: name.trim(),
      phone: formatPhone(phoneDigits),
      details: details.trim(),
      submittedAt: new Date().toISOString(),
    }
    if (business.estimateWebhook) {
      setSending(true)
      try {
        const res = await fetch(business.estimateWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!res.ok) throw new Error('bad status')
      } catch {
        setSending(false)
        setError(`Something went wrong sending your request. Please call us at ${business.phoneDisplay}.`)
        return
      }
      setSending(false)
    }
    setSubmitted(true)
  }

  return (
    <section className={styles.page}>
      <div className={styles.wrap}>
        <div className={styles.trustBadge}>
          <span className={styles.trustIcon}><CheckIcon /></span>
          Free, No-Obligation Estimate
        </div>

        {submitted ? (
          <div className={styles.card}>
            <div className={styles.success}>
              <span className={styles.successIcon}><CheckIcon /></span>
              <h1 className={styles.heading}>Thanks, {name.trim().split(' ')[0]}!</h1>
              <p className={styles.sub}>
                We got your request. A Haul Bros team member will reach out shortly at{' '}
                <strong>{formatPhone(phoneDigits)}</strong> with your quote.
              </p>
              <p className={styles.sub}>
                Need us sooner? Call <a href={business.phoneHref}>{business.phoneDisplay}</a>.
              </p>
              <Link to="/" className={styles.nextBtn}>Back to Home</Link>
            </div>
          </div>
        ) : (
          <form className={styles.card} onSubmit={handleSubmit} noValidate>
            <Progress step={step} />

            {step === 1 && (
              <div className={styles.stepBody}>
                <h1 className={styles.heading}>Is your pickup in {business.city} or nearby areas?</h1>
                <p className={styles.sub}>This helps us confirm crew availability for your location.</p>
                <div className={styles.wizardOptions} role="radiogroup" aria-label="Service area">
                  <OptionCard
                    type="radio"
                    selected={inArea === true}
                    onClick={() => setInArea(true)}
                    label="Yes"
                    sub="I'm in or near Orange County, CA"
                  />
                  <OptionCard
                    type="radio"
                    selected={inArea === false}
                    onClick={() => setInArea(false)}
                    label="No"
                    sub="I'm a bit outside the area"
                  />
                </div>
                <div className={`${styles.notice} ${inArea === false ? styles.noticeShow : ''}`} aria-live="polite">
                  <div className={styles.noticeInner}>
                    No problem &mdash; we can still help. Locations outside our main service area may
                    include a small trip fee, which we&rsquo;ll confirm with you before booking.
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className={styles.stepBody}>
                <h1 className={styles.heading}>What kind of junk do you have?</h1>
                <p className={styles.sub}>Select all that apply.</p>
                <div className={`${styles.wizardOptions} ${styles.wizardOptionsFour}`}>
                  {JUNK_TYPES.map((t) => (
                    <OptionCard
                      key={t.id}
                      selected={types.includes(t.id)}
                      onClick={() => toggleType(t.id)}
                      label={t.label}
                      sub={t.sub}
                    />
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className={styles.stepBody}>
                <h1 className={styles.heading}>Where should we send your quote?</h1>
                <p className={styles.sub}>We&rsquo;ll text or call you with pricing &mdash; no spam, ever.</p>
                <div className={styles.fields}>
                  <label className={styles.field}>
                    <span>Name</span>
                    <input
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </label>
                  <label className={styles.field}>
                    <span>Phone</span>
                    <input
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      value={formatPhone(phoneDigits)}
                      onKeyDown={onPhoneKeyDown}
                      onChange={onPhoneChange}
                      onPaste={onPhonePaste}
                      placeholder="(555) 555-5555"
                      maxLength={14}
                      required
                    />
                  </label>
                  <label className={styles.field}>
                    <span>Details <em>(optional)</em></span>
                    <textarea
                      rows={4}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="What needs to go, where it is, any stairs or tight access..."
                    />
                  </label>
                </div>
                {error && <p className={styles.error} role="alert">{error}</p>}
              </div>
            )}

            <div className={styles.footerNav}>
              {step > 1 ? (
                <button type="button" className={styles.backBtn} onClick={() => setStep((s) => s - 1)}>
                  &larr; Back
                </button>
              ) : <span />}
              {step < 3 ? (
                <button
                  type="button"
                  className={styles.nextBtn}
                  disabled={!canNext}
                  onClick={() => canNext && setStep((s) => s + 1)}
                >
                  Next
                </button>
              ) : (
                <button type="submit" className={styles.nextBtn} disabled={!canNext || sending}>
                  {sending ? 'Sending…' : 'Get Your Quote'}
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
