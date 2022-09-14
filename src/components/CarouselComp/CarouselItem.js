const CarouselItem = ({ title, link, littleParagraph }) => {
  return (
    <span className="d-flex flex-column align-items-center justify-content-center">
        <h5 className='fw-bolder fs-6'>{title}</h5>
        <a href={link}>{title}</a>
        <p>{littleParagraph}</p>
    </span>
  )
}

export default CarouselItem