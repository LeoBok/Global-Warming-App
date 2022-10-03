import './Global-warming-news.css'
import { Link, useParams } from "react-router-dom"
import {carouselData} from "../../components/Carousel/carousel-data";

const SingleNews = () => {
  const { singleNewsId } = useParams();
  const singleNotice = carouselData.find(data => data.id == singleNewsId)

  return (
    <div className='p-4 p-lg-0 mx-auto'>
      <article className="singleNews p-4 py-md-3 p-lg-3 mt-lg-3 mx-auto">
          <img
            src={singleNotice.imgSource}
            className='card-img-top news-img'
            alt={singleNotice.title}
          />
          <h4 className="py-3">{singleNotice.title}</h4>
          <p>{singleNotice.extendedParagraph}</p>
          
          <Link to='/'>Back to Home</Link>
      </article>

      
  </div>
  )
}

export default SingleNews