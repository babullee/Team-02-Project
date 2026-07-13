import { report } from '../data/report'
import { SectionHeading } from './SectionHeading'

export function ExecutiveSummary() { return <section id="summary"><SectionHeading number="01" title="Executive summary">The report separates verified facts from hypotheses and missing evidence.</SectionHeading><div className="stat-strip">{report.stats.map((stat) => <article key={stat.value}><p>{stat.type === 'fact' ? 'Verified indicator' : 'Demographic proxy'}</p><strong>{stat.value}</strong><span>{stat.label}</span></article>)}</div><div className="findings-grid">{report.findings.map(([title, detail], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{detail}</p></article>)}</div></section> }
