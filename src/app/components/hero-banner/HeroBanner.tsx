import Image from 'next/image'
import './HeroBanner.css'
export function HeroBanner() {
  return (
    <section id="description" className="hero-banner">
      <div className="hero-image center-x">
        <Image
          src="/media/img/hero-image.jpg"
          alt="Portada de la página Mac mini m1"
          className="picture"
          fill
          priority
        />
        <Image
          src="/media/img/hero-image-dark.jpg"
          alt="Portada de la página Mac mini m1"
          className="picture dark"
          fill
          priority
        />
      </div>
      <div className="container">
        <h1 className="product-title">Mac mini</h1>
        <h2 className="title">
          Cada vez más <br /> grande por dentro.
        </h2>
        <p className="description">
          El nuevo chip M1 diseñado por Apple lleva nuestra computadora de escritorio más
          versátil a otra dimensión. Ahora viene con un CPU hasta 3 veces más rápido,
          gráficos hasta 6 veces más veloces y nuestro Neural Engine más avanzado, que
          permite un aprendizaje automático hasta 15 veces más rápido. Podrás trabajar,
          jugar y crear con una velocidad y potencia que jamás habías imaginado. La Mac
          mini es poder para conquistarlo todo.
        </p>
      </div>
      <div className="subtitle place-center">
        <Image
          src="/media/img/chip-m1.jpg"
          alt="Chip M1"
          className="chip"
          width={96}
          height={96}
        />
        <p>Con los superpoderes del chip M1 de Apple</p>
      </div>
      <div className="cta-container place-center">
        <a href="#" className="hero-cta">
          Desde $699
        </a>
        <a href="#" className="hero-cta arrow">
          Ver el evento
        </a>
      </div>
    </section>
  )
}
