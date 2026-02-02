import React from 'react'

import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState } from 'react'
import './ItemDetailCarousel.scss'

export function ItemDetailCarousel({imagenes}) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
      loop: true,
      align: 'center',
    })

    const [selectedIndex, setSelectedIndex] = useState(0)
  
    useEffect(() => {
      if (!emblaApi) return
  
      const onSelect = () => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
      }
  
      emblaApi.on('select', onSelect)
      onSelect()
    }, [emblaApi])

    return (
      <div className="item-detail-carousel">
        <button className="arrow left" onClick={() => emblaApi?.scrollPrev()}>
          ‹
        </button>
  
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {imagenes.map((src, index) => 
            {
                console.log(src)
                return (<div
                    key={index}
                    className={`embla__slide ${
                      index === selectedIndex ? 'is-active' : ''
                    }`}
                  >
                    <img src={src} alt="" />
                  </div>)
            }
            
              
            )}
          </div>
        </div>
  
        <button className="arrow right" onClick={() => emblaApi?.scrollNext()}>
          ›
        </button>
      </div>
    )
  }
