import { Navbar, HeroBanner, ChipPresentation, MacFeatures, CPU, GPU } from './components'

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="main">
        <HeroBanner />
        <ChipPresentation />
        <MacFeatures>
          <CPU />
          <GPU />
        </MacFeatures>
        <section id="specs" className="section-placeholder">
          <h2>Especificaciones</h2>
        </section>
      </main>
    </>
  )
}
