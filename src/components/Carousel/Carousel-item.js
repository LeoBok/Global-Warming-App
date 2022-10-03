import { Link } from "react-router-dom"
import Button from "../Button/Button"

const CarouselItem = ({ carouselItem, onClickEvent }) => {
  return (
    <>
      <div className="px-3 py-lg-1">
        <h6 className='fw-bolder'>{carouselItem.title}</h6>
        <p className="">{carouselItem.littleParagraph}</p>
        <span className="carousel-span">Link to:</span> <Link to={`global-warming-news/${carouselItem.id}`}>{carouselItem.title}</Link>
      </div>
      <Button
        onClickEvent={onClickEvent}
        buttonStyle='singleNews-btn mx-auto w-50 my-3 my-lg-1 rounded-1'
        children='Next news'
      />
    </>
  )
}

export default CarouselItem