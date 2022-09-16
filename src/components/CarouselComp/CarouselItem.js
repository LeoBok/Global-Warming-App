const CarouselItem = ({ carouselItem }) => {
  return (
    <>
        <h6 className='fw-bolder'>{carouselItem.title}</h6>
        <p>{carouselItem.littleParagraph}</p>
        <span className="carousel-span">Link to:</span> <a href={carouselItem.link}>{carouselItem.title}</a>
    </>
  )
}

export default CarouselItem