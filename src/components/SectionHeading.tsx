import type { ReactNode } from 'react'

export function SectionHeading({ number, title, children }: { number: string; title: string; children?: ReactNode }) {
  return <div className="section-heading"><span>{number}</span><div><h2>{title}</h2>{children && <p>{children}</p>}</div></div>
}
