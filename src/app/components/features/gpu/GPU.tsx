import '../../mac-features/MacFeatures.css'
import './GPU.css'

export function GPU() {
  return (
    <article className="feature-panel gpu">
      <div className="content">
        <h2 className="title">GPU</h2>
        <div className="grid">
          <div>
            <h3 className="subtitle">Un chip irreal. Gráficos de fantasía.</h3>
            <p className="description">
              El GPU de 8 núcleos del chip M1 es el procesador gráfico más avanzado que
              hemos creado. Punto. Es por eso que la Mac mini tiene los gráficos
              integrados más rápidos del mundo en una computadora personal9, con un
              rendimiento gráfico 6 veces mayor que la generación anterior. Es un
              monumento a la potencia en un diseño increíblemente compacto.
            </p>
          </div>
          <ul className="characteristics-container">
            <li className="characteristic">
              GPU de <span className="number">8</span>{' '}
              <span className="caption">núcleos</span>
            </li>
            <li className="characteristic">
              Gráficos hasta{' '}
              <span className="number">
                6 <span className="cross">X</span>
              </span>{' '}
              <span className="caption">más rápidos</span>
            </li>
          </ul>
          <div>
            <button className="button ghost">
              Cómo el chip M1 acelera <br className="break-line" /> los gráficos
            </button>
          </div>
        </div>
      </div>
      <video className="video" autoPlay muted loop>
        <source src="/media/video/gpu-demostration.mp4" type="video/mp4" />
      </video>
    </article>
  )
}
