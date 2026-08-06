import {
  BarChart3, Bot, Boxes, Cloud, HeartPulse, Languages, Mic, PackageSearch, Printer, ReceiptText, ShieldCheck, Store, Users, WifiOff,
} from 'lucide-react'

export const navItems = [
  ['Features', '#features'], ['Solutions', '#solutions'], ['Technology', '#technology'], ['Download', '#download'], ['FAQ', '#faq'],
]

export const painPoints = [
  { number: '01', title: 'Counter friction', text: 'Calculations, discounts, and change steal attention from the customer.' },
  { number: '02', title: 'Disconnected records', text: 'Bills, stock, customer dues, and history disappear into separate places.' },
  { number: '03', title: 'Blind inventory', text: 'Without live stock intelligence, reorders and margins become guesswork.' },
  { number: '04', title: 'Tools built for desks', text: 'Complex systems are costly, slow to learn, and do not speak the shopkeeper’s language.' },
]

export const featureCards = [
  { icon: Mic, title: 'Voice command center', text: 'Speak a sale naturally. Vyamit understands, calculates, and drives the workflow.' },
  { icon: Languages, title: 'Shop language intelligence', text: 'Built around Hindi, English, Marathi, familiar dialects, and natural phrases.' },
  { icon: Boxes, title: 'Live inventory control', text: 'Every sale can update stock, so your shelves, catalogue, and records stay aligned.' },
  { icon: ReceiptText, title: 'Customer ledger', text: 'Keep customer records, dues, and credit history close to the sale, not lost in a notebook.' },
  { icon: Users, title: 'Lending & credit tracking', text: 'Track customer advances, dues, and credit sales alongside every bill and inventory movement.' },
  { icon: BarChart3, title: 'Business intelligence', text: 'See top products, sales momentum, bill value, and daily performance at a glance.' },
  { icon: PackageSearch, title: 'Instant product discovery', text: 'Search your catalogue without breaking the rhythm of a crowded counter.' },
  { icon: ReceiptText, title: 'GST-ready billing', text: 'Create clean, professional invoices with the tax detail customers expect.' },
  { icon: WifiOff, title: 'Built for real conditions', text: 'Designed for busy counters and patchy connectivity, with sync when you are back online.' },
  { icon: Printer, title: 'Printer freedom', text: 'Connect with practical Bluetooth ESC/POS thermal printers and more.' },
  { icon: Store, title: 'Your digital shopfront', text: 'Maintain shop details, business identity, and an always-available record of activity.' },
  { icon: Cloud, title: 'Cloud history', text: 'Keep business information available across devices when you need an answer.' },
  { icon: HeartPulse, title: 'Digital prescription mode', text: 'A clearer pharmacy workflow for structured, readable prescriptions.' },
  { icon: Bot, title: 'AI business copilot', text: 'Ask about revenue, inventory, and shop activity in the language of your business.' },
  { icon: ShieldCheck, title: 'Security by design', text: 'Protected sessions and an architecture built for responsible growth.' },
]

export const industries = [
  { name: 'Kirana & retail', icon: Store, note: 'Fast queues, familiar words.' },
  { name: 'Pharmacies', icon: HeartPulse, note: 'Clear bills, precise records.' },
  { name: 'Wholesale', icon: Boxes, note: 'Bulk orders, less busywork.' },
  { name: 'Bakeries & dairy', icon: ReceiptText, note: 'Fresh stock, fast bills.' },
]

export const faqs = [
  ['What is Vyamit AI?', 'Vyamit AI is an AI-powered shop management platform for Indian small businesses. It connects voice billing, inventory, customer ledgers, GST invoices, records, and business insights in one practical workspace.'],
  ['Can I make a bill by speaking?', 'Yes. The experience is designed around natural spoken billing commands, so you can stay focused on your customer instead of a keyboard.'],
  ['Which languages will it understand?', 'The roadmap includes Hindi, English, Marathi, and broader Indian language support. Availability can vary by release.'],
  ['Does it support GST invoices?', 'Vyamit is designed to create clean GST-ready invoices. You should still configure and verify the tax settings applicable to your business.'],
  ['Can Vyamit manage lending and customer credit?', 'Yes. Vyamit is built to keep credit sales, advances, outstanding balances and customer ledger history aligned with every invoice and inventory update.'],
  ['Will it work without the internet?', 'Core billing is designed for low-connectivity environments. Cloud-based features sync once a reliable connection is available.'],
  ['Can I use my existing printer?', 'Vyamit is being built to work with common Bluetooth ESC/POS thermal printers, including affordable models used by small businesses.'],
  ['Is my data secure?', 'The planned platform uses authenticated access, protected sessions, and secure cloud infrastructure. Never share account credentials or OTPs.'],
  ['Can it manage inventory and customer ledgers?', 'Yes. Vyamit is designed to keep sales, inventory records, customer activity, and outstanding balances connected, so you spend less time reconciling the shop after closing.'],
  ['Is there an iPhone version?', 'The iOS release is on the roadmap. This site will automatically surface it once the release file is available.'],
  ['How much does Vyamit cost?', 'Pricing will be announced with the public launch. Join the notification list to hear first.'],
]
