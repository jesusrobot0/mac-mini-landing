import { Navbar, HeroBanner } from './components'

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="main">
        <HeroBanner />
        <section id="why-mac" className="section-placeholder">
          <h2>Por qué la mac</h2>
        </section>
        <section id="specs" className="section-placeholder">
          <h2>Especificaciones</h2>
        </section>
      </main>
    </>
  )
}
