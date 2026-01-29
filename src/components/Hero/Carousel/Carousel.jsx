import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './Carousel.scss'

const Carousel = ({ images = [] }) => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      draggable: false,
      speed: 6,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  )

  return (
    <div className="carousel">
    <div className="overlay"></div>
      <div className="carousel__viewport" ref={emblaRef}>
        <div className="carousel__container">
          <div className="carousel__slide slide1" style={{backgroundImage: `url(${images[0]})`}}></div>
          <div className="carousel__slide slide2" style={{backgroundImage: `url(${images[1]})`}}></div>
          <div className="carousel__slide slide3" style={{backgroundImage: `url(${images[2]})`}}></div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
