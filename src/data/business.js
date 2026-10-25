// ─────────────────────────────────────────────────────────────
//  Haul Bros Junk Removal — central business config
//  Edit everything about the business here. Components read
//  from this file only; nothing is hard-coded elsewhere.
//  Portfolio rule: NO email addresses anywhere on the site.
// ─────────────────────────────────────────────────────────────

const business = {
  name: 'Haul Bros Junk Removal',
  shortName: 'Haul Bros',
  tagline: 'Local junk hauling done right \u2014 lifted, loaded, and swept clean.',

  phoneDisplay: '(949) 619-6663',
  phoneHref: 'tel:+19496196663',
  phoneE164: '+19496196663',

  city: 'Laguna Hills',
  state: 'CA',
  region: 'Orange County',
  domain: 'https://haulbrosjunkremoval.com',

  hours: 'Mon – Sun: By appointment',

  // Optional: a POST endpoint (GHL inbound webhook, Zapier, etc.).
  // Leave empty and the estimate form just shows its confirmation screen.
  estimateWebhook: '',

  // Optional: Google Business Profile reviews link. When set, the
  // Reviews section shows a "Read our Google reviews" card.
  googleReviewsUrl: '',

  // Real customer reviews only — copy them word-for-word from Google.
  // Each: { name: 'First L.', text: '...', rating: 5 }
  // The Reviews section stays hidden until this list or the link above is filled.
  reviews: [],

  nearbyAreas: [
    'Laguna Hills',
    'Laguna Niguel',
    'Laguna Woods',
    'Lake Forest',
    'Mission Viejo',
    'Aliso Viejo',
    'Irvine',
    'Rancho Santa Margarita',
  ],

  services: [
    { title: 'Furniture Removal', text: 'Couches, sectionals, mattresses, dressers, recliners — carried out from any room, any floor.', icon: 'sofa' },
    { title: 'Appliance Hauling', text: 'Fridges, washers, dryers, water heaters and old A/C units, disconnected items handled safely.', icon: 'fridge' },
    { title: 'Garage Cleanouts', text: 'Get your parking spot back. We sort, load, and sweep so the space is actually usable.', icon: 'garage' },
    { title: 'Construction Debris', text: 'Cabinets, drywall, flooring, lumber and remodel scraps cleared from driveways and job sites.', icon: 'hammer' },
    { title: 'Yard Waste', text: 'Branches, stumps, old fencing, broken patio sets and piles that have been sitting all season.', icon: 'leaf' },
    { title: 'Estate & Move-Outs', text: 'Whole-home cleanouts handled with care and patience, on a schedule that works for the family.', icon: 'house' },
    { title: 'Hot Tub & Shed Removal', text: 'We cut down, disassemble and haul away hot tubs, sheds, and playsets in a single visit.', icon: 'tub' },
    { title: 'Side-Yard & Alley Junk', text: 'Tight spaces and back-gate access are no problem. If it fits through a gate, we can get it.', icon: 'gate' },
  ],

  steps: [
    { title: 'Call or Request a Quote', text: 'Tell us what needs to go. Snap a few photos if you like — we’ll give you a straight answer fast.' },
    { title: 'We Show Up & Price It', text: 'The crew arrives in your window, looks at the load, and gives you the final price before lifting a thing.' },
    { title: 'Load, Haul & Sweep', text: 'We do all the heavy lifting, donate and recycle what we can, and leave the area broom-clean.' },
  ],

  pricingIncludes: [
    'Upfront price based on how much truck space your load takes',
    'All labor — lifting, carrying, and loading by our crew',
    'Disposal, dump, and recycling fees built into the quote',
    'Donation drop-offs for usable furniture and goods',
    'Broom sweep of the area once the junk is gone',
    'No hidden fees — the price we quote is the price you pay',
  ],

  faqs: [
    { q: 'How is the price calculated?', a: 'Pricing is based on how much space your items take up in our truck, plus any special-handling items. Our crew confirms the exact price on site before any work starts, so you are never surprised.' },
    { q: 'Do I need to be home?', a: 'Not always. If the items are outside, in a driveway, or somewhere we can access, we can often handle the job while you are away. Just let us know when you book.' },
    { q: 'What items can’t you take?', a: 'We cannot haul hazardous materials such as paint, chemicals, fuel, asbestos, or medical waste. If you are unsure about something, give us a call and we’ll tell you straight.' },
    { q: 'Do you recycle or donate?', a: 'Yes. Usable furniture and household goods go to local donation centers, and metal, cardboard, and other materials are recycled whenever possible.' },
    { q: 'How soon can you come out?', a: 'We often have same-day and next-day openings in Laguna Hills and nearby areas. Call us and we’ll find the earliest window that works.' },
    { q: 'Do you clean up after?', a: 'Every time. Once the load is out, the crew sweeps the area so you are left with a clean driveway, garage, or yard.' },
  ],
}

export default business
