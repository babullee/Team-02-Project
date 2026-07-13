import { ExternalLink } from 'lucide-react'
import { report } from '../data/report'
import { SectionHeading } from './SectionHeading'

export function EvidenceSection() { return <section id="evidence"><SectionHeading number="07" title="Evidence register">The supplied report names these sources. URLs were not included, so no links have been invented.</SectionHeading><div className="source-list">{report.sources.map(([title, organization, date]) => <article key={title}><div><h3>{title}</h3><p>{organization}</p></div><div><span>{date}</span><span className="unavailable">Link unavailable <ExternalLink size={14}/></span></div></article>)}</div></section> }
