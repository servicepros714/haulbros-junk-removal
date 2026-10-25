import business from '../data/business.js'

export default function SchemaLD() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${business.domain}/#business`,
    name: business.name,
    url: business.domain,
    telephone: business.phoneE164,
    image: `${business.domain}/logo.png`,
    logo: `${business.domain}/logo.png`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.city,
      addressRegion: business.state,
      addressCountry: 'US',
    },
    areaServed: business.nearbyAreas.map((c) => ({ '@type': 'City', name: `${c}, ${business.state}` })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
      description: 'By appointment',
    },
    makesOffer: business.services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title },
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
