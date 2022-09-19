import { Link } from "react-router-dom"

const CarouselItem = ({ carouselItem }) => {
  return (
    <>
        <h6 className='fw-bolder'>{carouselItem.title}</h6>
        <p>{carouselItem.littleParagraph}</p>
        <span className="carousel-span">Link to:</span> <Link to={`global-warming-news/${carouselItem.id}`}>{carouselItem.title}</Link>
    </>
  )
}

export default CarouselItem