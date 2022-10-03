import CarouselItem from './Carousel-item'
import './Carousel.css'
import { useState, useEffect } from 'react';

const CarouselComp = ({ carouselData }) => {
    const [itemState, setItemState] = useState(0);
    const [carouselItemState, setCarouselItemState] = useState([])

    useEffect(() => {
        const interval = setInterval(() => {
            if (itemState === carouselData.length - 1) {
                return setItemState(0)
            }
            setItemState(prevState => prevState + 1)
        }, 5000);
    
      return () => clearInterval(interval)
    }, [itemState]);
    
    const nextNews = () => {
        if (itemState === carouselData.length - 1) {
            return setItemState(0)
        }
        setItemState(prevState => prevState + 1)
    }

    useEffect(() => {
        setCarouselItemState(carouselData[itemState]);
    }, [itemState])

    return (
    <li key={Math.random()} className=' animate pop d-flex justify-content-center flex-column carousel mx-auto rounded-4 mb-4 mb-lg-0 px-lg-2'>
        <CarouselItem carouselItem={carouselItemState} onClickEvent={nextNews} />
    </li>
  )
}

export default CarouselComp