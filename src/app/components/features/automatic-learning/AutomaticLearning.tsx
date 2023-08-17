import Image from 'next/image'
import './AutomaticLearning.css'

export function AutomaticLearning() {
  return (
    <article className="feature-panel automatic-learning">
      <div className="content">
        <h2 className="title">Aprendizaje automático</h2>
        <div className="grid">
          <div>
            <p className="description">
              Neural Engine de 16 núcleos. Es la mente maestra.{' '}
              <span className="accent">
                El aprendizaje automático permite la automatización y aceleración de
                funciones como análisis de video, reconocimiento de voz, procesamiento de
                imágenes y mucho más. Además, gracias al chip M1 con Neural Engine de 16
                núcleos y toda una gama de tecnologías avanzadas, el aprendizaje
                automático en la Mac mini llega a un nivel superior.
              </span>
            </p>
          </div>
          <ul className="characteristics-container">
            <li className="characteristic">
              Neural Engine de
              <span className="number">16</span> <span className="caption">núcleos</span>
            </li>
            <li className="characteristic">
              Aprendizaje automático hasta{' '}
              <span className="number">
                15 <span className="cross">X</span>
              </span>{' '}
              <span className="caption">
                más rápidos <sup>16</sup>
              </span>
            </li>
          </ul>
          <div>
            <button className="button ghost">
              Cómo el chip M1 lleva <br className="break-line" /> el aprendizaje
              automático a otro nivel
            </button>
          </div>
        </div>
      </div>
      <Image
        src="/media/img/learning.png"
        alt="Imagen de demostración de aprendizaje continuo"
        className="picture"
        width={721}
        height={670}
      />
    </article>
  )
}
