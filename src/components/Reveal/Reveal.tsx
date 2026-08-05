import type { ReactNode } from 'react'
import { m } from 'framer-motion'

type RevealProps = { children: ReactNode; delay?: number; className?: string }

export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  return <m.div className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: .65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</m.div>
}
