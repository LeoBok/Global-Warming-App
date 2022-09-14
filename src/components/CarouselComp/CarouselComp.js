import Carousel from 'react-elastic-carousel'
import CarouselItem from './CarouselItem'
import './Carousel.css'

const CarouselComp = () => {
  return (
    <li className='single-item rounded-4 py-4 my-5 m-lg-0 py-lg-4 py-lg-2 px-lg-3'>
        <Carousel
            itemsToShow={1}
            disableArrowsOnEnd={false}
            enableAutoPlay
            autoPlaySpeed={3000}
            showArrows={false}
            >
            <CarouselItem
                title="What is global warming?"
                link="https://www.livescience.com/37003-global-warming.html"
                littleP="Facts about global warming: Causes and effects"
            />
            <CarouselItem
                title="What are the effects of global warming?"
                link="https://www.livescience.com/37057-global-warming-effects.html"
                littleP="The effects of global warming are expected to be far-reaching and, in many cases, devastating."
            />
            <CarouselItem
                title="Global Warming Is Killing the Great Barrier Reef"
                link="https://www.livescience.com/58310-great-barrier-reef-bleaching-continues.html"
                littleP="Large sections of the Great Barrier Reef are already dead, and scientists warn that the rest of the coral organisms will die if global warming continues unabated"
            />
            <CarouselItem
                title="Causes of Global Warming"
                link="https://www.livescience.com/37152-global-warming-causes.html"
                littleP="Since the late 1700s, the world's climate has been changing rapidly, mostly due to human causes"
            />
            <CarouselItem
                title="Jeff Bezos gives $10 billion to fight climate change"
                link="https://www.livescience.com/jeff-bezos-funds-climate-change-fight.html"
                littleP="The Bezos Earth Fund will start issuing grants this summer."
            />
        </Carousel>
    </li>
  )
}

export default CarouselComp