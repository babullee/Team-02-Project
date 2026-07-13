import { ArrowDownRight, CalendarDays } from 'lucide-react'
import { report } from '../data/report'

export function HeroSection() {
  return <section className="hero" id="overview"><div className="hero-copy"><p className="kicker">Evidence-based decision brief</p><h1>{report.title}</h1><p className="hero-subtitle">{report.subtitle}</p><p className="thesis">{report.thesis}</p><a className="text-link" href="#recommendation">View recommendation <ArrowDownRight size={18} /></a></div><aside className="report-stamp"><CalendarDays size={20}/><p>Report date</p><strong>{report.date}</strong><span>Evidence window: 2024–2026 where available</span></aside></section>
}
