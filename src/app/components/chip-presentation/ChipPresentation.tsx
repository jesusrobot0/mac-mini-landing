import Image from 'next/image'
import './ChipPresentation.css'

export function ChipPresentation() {
  return (
    <section className="chip-section">
      <div className="container">
        <Image
          src="/media/img/m1-logo.png"
          alt="Logo del Chip M1"
          className="logo"
          width={102}
          height={48}
        />
        <h2 className="big-title">
          Un chip pequeño. <br /> Un avance enorme.
        </h2>
        <p className="big-description">
          Ya llegó el primer chip diseñado específicamente para la Mac. El sistema en chip
          (SoC) M1 de Apple tiene 16,000 millones de transistores e integra CPU, GPU,
          Neural Engine, E/S y mucho más en un diminuto chip. Por eso, te brinda un
          rendimiento increíble, tecnologías exclusivas y una eficiencia energética líder
          en la industria.1 El chip M1 es más que un paso adelante: es la entrada al
          futuro de la Mac.
        </p>
        <div className="video-container">
          <video className="video center-x" autoPlay muted>
            <source src="/media/video/chip-m1.mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}
