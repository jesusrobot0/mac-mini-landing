import Image from 'next/image'
import '../../mac-features/MacFeatures.css'
import '../cpu/CPU.css'

export function CPU() {
  return (
    <article className="feature-panel cpu">
      <div className="content">
        <h2 className="title">CPU</h2>
        <h3 className="subtitle">
          <span className="accent">CPU de 8 núcleos </span> Ultrapoderoso. Ultracompacto.
        </h3>
        <p className="description">
          El chip M1 le da mucha más potencia y velocidad a la Mac mini. El CPU de 8
          núcleos tiene una velocidad de procesamiento hasta 3 veces mayor que la de la
          generación anterior2, sin modificar su icónico diseño cuadrado de 19.7 cm.
        </p>
        <button className="button ghost">
          Cómo el chip M1 <br className="break-line" /> redefine la velocidad
        </button>
      </div>
      <Image
        src="/media/img/cpu.png"
        alt="Imagen de demostración de la CPU"
        className="picture"
        width={1448}
        height={1340}
      />
    </article>
  )
}
