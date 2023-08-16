import { PropsWithChildren } from 'react'

export function MacFeatures({ children }: PropsWithChildren) {
  return (
    <section id="why-mac" className="grid-section">
      {children}
    </section>
  )
}
