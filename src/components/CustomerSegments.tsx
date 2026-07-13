import { report } from '../data/report'
import { SectionHeading } from './SectionHeading'

export function CustomerSegments() { return <section id="customers"><SectionHeading number="03" title="Customer system">The child determines usability and engagement; the adult controls access, consent and payment.</SectionHeading><div className="segment-grid">{report.segments.map((segment) => <article key={segment.title}><span>{segment.icon}</span><h3>{segment.title}</h3><p>{segment.detail}</p></article>)}</div><div className="note"><strong>Design hypotheses to test:</strong> brief, clear-ended sessions; active emotional choices; offline parent-child prompts; no child-targeted ads or purchase prompts; transparent price and data use.</div></section> }
