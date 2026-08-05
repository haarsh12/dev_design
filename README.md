# Vyamit AI website

The public website for Vyamit AI: the voice-first AI shop management platform for Indian businesses. It presents the real product experience across billing, inventory, customer ledgers, GST-ready invoices, UPI-ready virtual bills, shop records, printer support, and business insights.

## Run locally ss} from 'lucide-react'
const workTime = '/images/work-time.png'
const informedDecision = '/images/informed-decision.png'
import interfacePreview from './assets/a69d75c0-9414-45fc-81ec-aac9ee8123a5.png'
import { Logo } from './components/Brand/Logo'
import { Button } from './components/ui/Button'
import { Reveal } from './components/Reveal/Reveal'
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', name: 'Vyamit AI', url: 'https://vyamit.ai', logo: 'https://vyamit.ai/logo.png', sameAs: [] },
    { '@type': 'SoftwareApplication', name: 'Vyamit AI', applicationCategory: 'BusinessApplication', operatingSystem: 'Android', description: 'AI voice billing for modern Indian businesses.', offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' } },
    { '@type': 'FAQPage', mainEntity: faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) },
  ],
}
  return null
}

function Seo({ title = 'Vyamit AI | Voice billing for Indian businesses', description = 'AI voice billing, GST-ready invoices, inventory, and business insights for modern Indian retailers.' }: { title?: string; description?: string }) {
function Seo({ title = 'Vyamit AI | The AI shop management platform for India', description = 'Vyamit AI is the voice-first shop management platform for billing, inventory, customer ledgers, GST invoices, UPI bills, records, and business insights.' }: { title?: string; description?: string }) {
  const { pathname } = useLocation()
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false)
  useEffect(() => {
    const update = () => setAnalyticsAllowed(hasAnalyticsConsent())
    window.addEventListener('vyamit-consent-updated', update)
    return () => window.removeEventListener('vyamit-consent-updated', update)
  }, [])
  return <Helmet><title>{title}</title><meta name="description" content={description} /><link rel="canonical" href="https://vyamit.ai/" /><meta property="og:title" content={title} /><meta property="og:description" content={description} /><meta property="og:type" content="website" /><meta property="og:url" content="https://vyamit.ai/" /><meta name="twitter:card" content="summary_large_image" /><meta name="theme-color" content="#b7ed37" /><script type="application/ld+json">{JSON.stringify(jsonLd)}</script>{analyticsAllowed && gaMeasurementId && <><script async src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaMeasurementId)}`} /><script>{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)}; gtag('js', new Date()); gtag('config', '${gaMeasurementId}', { anonymize_ip: true });`}</script></>}{analyticsAllowed && clarityProjectId && <script>{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,'clarity','script','${clarityProjectId}');`}</script>}</Helmet>
  const canonical = `https://vyamit.ai${pathname === '/' ? '/' : pathname}`
  return <Helmet><title>{title}</title><meta name="description" content={description} /><link rel="canonical" href={canonical} /><meta property="og:title" content={title} /><meta property="og:description" content={description} /><meta property="og:type" content="website" /><meta property="og:site_name" content="Vyamit AI" /><meta property="og:url" content={canonical} /><meta property="og:image" content="https://vyamit.ai/images/vyamit-ai-shop-management-interface.png" /><meta property="og:image:alt" content="Vyamit AI shop profile and UPI billing interface" /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content={title} /><meta name="twitter:description" content={description} /><meta name="twitter:image" content="https://vyamit.ai/images/vyamit-ai-shop-management-interface.png" /><meta name="theme-color" content="#b7ed37" /><script type="application/ld+json">{JSON.stringify(jsonLd)}</script>{analyticsAllowed && gaMeasurementId && <><script async src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaMeasurementId)}`} /><script>{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)}; gtag('js', new Date()); gtag('config', '${gaMeasurementId}', { anonymize_ip: true });`}</script></>}{analyticsAllowed && clarityProjectId && <script>{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,'clarity','script','${clarityProjectId}');`}</script>}</Helmet>
}

function HomePage() {

function Hero({ release }: { release: ReleaseInfo }) {
  const heroRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  useEffect(() => {
    const context = gsap.context(() => {
      gsap.to(`.${styles.orbit}`, { rotation: 360, duration: 30, ease: 'none', repeat: -1 })
      gsap.to(`.${styles.liveDot}`, { opacity: .3, duration: .9, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to(`.${styles.realInterface}`, { y: -10, duration: 3.8, ease: 'sine.inOut', repeat: -1, yoyo: true })
    }, heroRef)
    return () => context.revert()
  }, [])
  const androidHref = release.android.available && release.android.file ? `/downloads/android/${release.android.file}` : '#download'
  return <><m.div className={styles.progress} style={{ scaleX }} /><section id="home" className={styles.hero} ref={heroRef}><div className={styles.heroNoise} /><div className={styles.heroGlow} /><div className={styles.heroContent}><m.div className={styles.eyebrow} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}><Sparkles size={14} /> Built for the businesses powering India</m.div><m.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .08, ease: [0.22, 1, 0.36, 1] }}>The billing counter,<br /><em>reimagined by voice.</em></m.h1><m.p className={styles.heroCopy} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .18 }}>Vyamit is the AI billing companion for Indian businesses. Speak naturally, create GST-ready bills in seconds, and keep your business moving.</m.p><m.div className={styles.heroActions} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .26 }}><Button href={androidHref} icon={<Download size={17} />}>{release.android.available ? 'Download for Android' : 'Join the Android launch'}</Button><Button href="#how-it-works" variant="secondary" icon={<Play size={15} fill="currentColor" />}>See it in motion</Button></m.div><m.div className={styles.heroTrust} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .7, delay: .42 }}><span><Check size={14} /> No typing required</span><span><Check size={14} /> GST-ready invoices</span><span><Check size={14} /> Works around connectivity</span></m.div></div><div className={styles.heroVisual} aria-label="A preview of voice billing"><div className={styles.orbit}><span /><span /><span /></div><div className={styles.phoneHalo} /><div className={styles.phone}><div className={styles.phoneTop}><span>9:41</span><div className={styles.island} /><span><Activity size={13} /></span></div><div className={styles.appHeader}><span className={styles.appLogo}>V</span><span>Vyamit <b>AI</b></span><Bell size={17} /></div><div className={styles.greeting}>Good morning, Harsh <span>👋</span></div><div className={styles.voicePanel}><div className={styles.voiceTop}><span className={styles.live}><i className={styles.liveDot} /> Listening live</span><span>Hindi</span></div><p>“2 packets biscuit, 1 milk...”</p><div className={styles.wave}><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><button type="button" aria-label="Voice is listening"><Mic size={22} /></button></div><div className={styles.billRow}><div><span>Today’s sales</span><strong>₹4,280</strong><small>↑ 18.2% vs yesterday</small></div><div className={styles.miniChart}><i /><i /><i /><i /><i /><i /><i /></div></div><div className={styles.quickActions}><span><ReceiptText /> New bill</span><span><Package /> Stock</span><span><BarChart3 /> Insights</span></div><div className={styles.recent}><span>RECENT BILL</span><div><div><b>Shree Ganesh Stores</b><small>3 items · 2 mins ago</small></div><strong>₹178</strong></div></div></div><div className={`${styles.floatCard} ${styles.floatBill}`}><span><Check size={15} /> Bill ready</span><strong>₹ 1,248.00</strong><small>GST included · 4 items</small></div><div className={`${styles.floatCard} ${styles.floatInsight}`}><span className={styles.insightIcon}><Sparkles size={15} /></span><div><b>Smart insight</b><p>Milk sales are up 24% today.</p></div></div><div className={`${styles.floatCard} ${styles.floatLanguage}`}><Globe2 size={15} /><span>हिंदी</span><span>EN</span><span>मराठी</span></div></div><div className={styles.heroBackdrop}><span>VOICE</span><span>FIRST</span><span>COMMERCE</span></div><div className={styles.scrollHint} ref={scrollRef}><span>Scroll to explore</span><i /></div></section></>
  return <><m.div className={styles.progress} style={{ scaleX }} /><section id="home" className={styles.hero} ref={heroRef}><div className={styles.heroNoise} /><div className={styles.heroGlow} /><div className={styles.heroContent}><m.div className={styles.eyebrow} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}><Sparkles size={14} /> India&apos;s AI shop command center</m.div><m.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .08, ease: [0.22, 1, 0.36, 1] }}>Run the shop.<br /><em>Command the business.</em></m.h1><m.p className={styles.heroCopy} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .18 }}>Vyamit AI turns everyday shop work into one intelligent flow: voice bills, live inventory, customer ledgers, UPI-ready invoices, records, and actionable business insight.</m.p><m.div className={styles.heroActions} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .26 }}><Button href={androidHref} icon={<Download size={17} />}>{release.android.available ? 'Download for Android' : 'Join the Android launch'}</Button><Button href="#features" variant="secondary" icon={<Play size={15} fill="currentColor" />}>Explore the platform</Button></m.div><m.div className={styles.heroTrust} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .7, delay: .42 }}><span><Check size={14} /> Voice-first operations</span><span><Check size={14} /> Inventory + ledger in sync</span><span><Check size={14} /> Print, share, collect</span></m.div></div><div className={styles.heroVisual} aria-label="The real Vyamit AI interface"><div className={styles.realInterface}><img src={interfacePreview} alt="Vyamit AI showing shop profile management and a Gupta General Store UPI bill" fetchPriority="high" /></div><div className={`${styles.realInterfaceBadge} ${styles.badgeInventory}`}><Package size={17} /><span><b>One connected shop</b><small>Stock, profile, customers, ledger</small></span></div><div className={`${styles.realInterfaceBadge} ${styles.badgePayment}`}><ReceiptText size={17} /><span><b>Ready to collect</b><small>Print or share every bill instantly</small></span></div></div><div className={styles.heroBackdrop}><span>SHOP</span><span>AI</span><span>POWERED</span></div></section></>
}

function TrustedBar() { return <section className={styles.trusted}><p>From a simple idea to a more confident counter.</p><div><span><Mic /> <b>Voice</b> first</span><span><ReceiptText /> <b>GST</b> ready</span><span><Languages /> <b>Local</b> languages</span><span><Printer /> <b>Any</b> printer</span><span><WifiOffIcon /> <b>Offline</b> friendly</span></div></section> }
function TrustedBar() { return <section className={styles.trusted}><p>One intelligent operating layer for the counter, shelf, and customer.</p><div><span><Mic /> <b>Voice</b> first</span><span><Package /> <b>Inventory</b> aware</span><span><ReceiptText /> <b>Ledger</b> connected</span><span><Printer /> <b>Any</b> printer</span><span><WifiOffIcon /> <b>Offline</b> resilient</span></div></section> }
function WifiOffIcon() { return <Cloud size={19} /> }

function Problem() { return <section id="about" className={`${styles.section} ${styles.problem}`}><Reveal className={styles.sectionHead}><span className={styles.kicker}>01 · THE REALITY</span><h2>Every minute spent<br />on a bill is a minute <em>away from the customer.</em></h2><p>India’s small businesses deserve tools that feel as natural as the work itself — not another complicated screen between them and a sale.</p></Reveal><div className={styles.problemLayout}><Reveal className={styles.problemStatistic}><div className={styles.statGrid}><span>40M<span>+</span></span><small>retail and wholesale businesses in India work with manual or semi-digital billing today.</small></div><div className={styles.paperLines}><i /><i /><i /><i /><i /></div><p>“Small shop owners need a fast, simple billing system — not complex computer software.”</p></Reveal><div className={styles.painGrid}>{painPoints.map((point, index) => <Reveal key={point.number} delay={index * .07} className={styles.painCard}><span>{point.number}</span><h3>{point.title}</h3><p>{point.text}</p><ArrowDownRight /></Reveal>)}</div></div></section> }
function Problem() { return <section id="about" className={`${styles.section} ${styles.problem}`}><Reveal className={styles.sectionHead}><span className={styles.kicker}>01 · THE REALITY</span><h2>Small businesses do not need five apps.<br />They need <em>one reliable command center.</em></h2><p>India’s shopkeepers need a tool that keeps billing, stock, customers, payments, and decisions moving together - without creating more work at the counter.</p></Reveal><div className={styles.problemLayout}><Reveal className={styles.problemStatistic}><div className={styles.statGrid}><span>40M<span>+</span></span><small>retail and wholesale businesses in India still rely on manual or semi-digital workflows every day.</small></div><div className={styles.paperLines}><i /><i /><i /><i /><i /></div><p>“A great shop system should feel as natural as speaking - powerful enough for the whole business, simple enough for every owner.”</p></Reveal><div className={styles.painGrid}>{painPoints.map((point, index) => <Reveal key={point.number} delay={index * .07} className={styles.painCard}><span>{point.number}</span><h3>{point.title}</h3><p>{point.text}</p><ArrowDownRight /></Reveal>)}</div></div></section> }

function HowItWorks() { const steps: Array<[string, string, string, LucideIcon]> = [['01', 'Speak naturally', '“Two sugar, one tea, cash.”', Mic], ['02', 'Vyamit understands', 'Matches items and quantities.', Bot], ['03', 'Bill takes shape', 'Totals, tax, and stock update.', ReceiptText], ['04', 'Share or print', 'A clean bill in seconds.', Printer]]; return <section id="how-it-works" className={`${styles.section} ${styles.flowSection}`}><div className={styles.flowBackdrop}><span>FAST</span><span>SIMPLE</span><span>HUMAN</span></div><Reveal className={styles.sectionHead}><span className={styles.kicker}>02 · THE FLOW</span><h2>A familiar conversation.<br /><em>A better way to bill.</em></h2></Reveal><div className={styles.steps}>{steps.map(([number, title, copy, Icon], index) => <Reveal key={number} delay={index * .09} className={styles.step}><div className={styles.stepTop}><span>{number}</span><Icon /></div><h3>{title}</h3><p>{copy}</p>{index < steps.length - 1 && <i className={styles.stepLine}><ArrowRight /></i>}</Reveal>)}</div><Reveal className={styles.workflowCallout}><span className={styles.pulse} /><p><b>One voice command.</b> A complete, clear bill — without breaking your stride.</p><div><FileCheck2 /><span>Inventory updated</span><Check /><span>Tax calculated</span><Check /><span>Cloud synced</span></div></Reveal></section> }
function HowItWorks() { const steps: Array<[string, string, string, LucideIcon]> = [['01', 'Speak the sale', '“Two sugar, one tea, cash.”', Mic], ['02', 'Vyamit understands', 'It recognises items, quantities, and shop language.', Bot], ['03', 'The whole shop updates', 'Bill, tax, stock, customer record, and ledger stay aligned.', ReceiptText], ['04', 'Collect with confidence', 'Print it, share it, or take the payment in seconds.', Printer]]; return <section id="how-it-works" className={`${styles.section} ${styles.flowSection}`}><div className={styles.flowBackdrop}><span>SPEAK</span><span>SELL</span><span>SCALE</span></div><Reveal className={styles.sectionHead}><span className={styles.kicker}>02 · THE FLOW</span><h2>Speak once.<br /><em>Move the whole shop.</em></h2></Reveal><div className={styles.steps}>{steps.map(([number, title, copy, Icon], index) => <Reveal key={number} delay={index * .09} className={styles.step}><div className={styles.stepTop}><span>{number}</span><Icon /></div><h3>{title}</h3><p>{copy}</p>{index < steps.length - 1 && <i className={styles.stepLine}><ArrowRight /></i>}</Reveal>)}</div><Reveal className={styles.workflowCallout}><span className={styles.pulse} /><p><b>One natural command.</b> A sale is recorded, stock is adjusted, the customer ledger updates, and a professional bill is ready.</p><div><FileCheck2 /><span>Inventory aligned</span><Check /><span>Ledger updated</span><Check /><span>Cloud history saved</span></div></Reveal></section> }
an ai has changed the render mobile phone image which was in hero front page can you please get it back for me it was good 
and all the changes that it did should revert to the orgiginal 

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

The static site is generated in `dist/`.

## Deploy to Render

This repository includes `render.yaml`. Push it to a GitHub repository, then in Render choose **New > Blueprint** and select that repository. Render will build with `npm ci && npm run build`, publish `dist`, and rewrite client-side routes such as `/privacy` and `/terms` to the React app.

You can also create a **Static Site** manually and use these settings:

- Build command: `npm ci && npm run build`
- Publish directory: `dist`
- Rewrite: `/*` to `/index.html`

After the first successful deployment, add `vyamit.ai` as the custom domain in Render and update its DNS records with your domain provider. The production domain must remain `https://vyamit.ai` because the canonical URLs, sitemap, and structured data use that address.

## Search readiness

The production build includes:

- Search metadata and Open Graph previews in `index.html`
- Organization, WebSite, SoftwareApplication, and FAQ structured data
- `public/robots.txt` and `public/sitemap.xml`
- A crawl-friendly product summary in `public/llms.txt`
- Canonical URLs for the public pages

Once the live domain is connected, add the site to Google Search Console, verify ownership, and submit `https://vyamit.ai/sitemap.xml`. This gives Google clear information about Vyamit AI, but search ranking depends on crawled content, reputation, technical health, and relevant links - it cannot be guaranteed by site files alone.

## Releases

Place Android `.apk` files in `public/downloads/android/` and iOS `.ipa` files in `public/downloads/ios/`. `npm run build` automatically updates `public/downloads/release.json` using the latest file from each folder.
