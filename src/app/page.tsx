import { Navbar, HeroBanner, ChipPresentation, MacFeatures, CPU } from './components'

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="main">
        <HeroBanner />
        <ChipPresentation />
        <MacFeatures>
          <CPU />
        </MacFeatures>
        <section id="specs" className="section-placeholder">
          <h2>Especificaciones</h2>
        </section>
      </main>
    </>
  )
}
