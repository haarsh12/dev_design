import { track as vercelTrack } from '@vercel/analytics'

type EventValue = string | number | boolean
type EventData = Record<string, EventValue>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    clarity?: (action: string, value?: string) => void
  }
}

export const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID
export const clarityProjectId = import.meta.env.VITE_CLARITY_PROJECT_ID

export function hasAnalyticsConsent() {
  return typeof window !== 'undefined' && window.localStorage.getItem('vyamit-analytics-consent') === 'accepted'
}

export function trackEvent(name: string, data: EventData = {}) {
  if (!hasAnalyticsConsent()) return
  vercelTrack(name, data)
  window.gtag?.('event', name, data)
  window.clarity?.('event', name)
}
