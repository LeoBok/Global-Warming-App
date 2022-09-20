import './GbNews.css'
import { useParams } from "react-router-dom"
import {carouselData} from "../../components/CarouselComp/carouselData";

const SingleNews = () => {
  const { singleNewsId } = useParams();
  const singleNotice = carouselData.find(data => data.id == singleNewsId)

  return (
    <div className='p-4 py-md-4 mx-auto'>
      <article className="singleNews p-4 py-md-3 mx-auto">
          <img
            src={singleNotice.imgSource}
            className='card-img-top news-img'
            alt={singleNotice.title}
          />
          <h4 className="p-3">{singleNotice.title}</h4>
          <p>{singleNotice.extendedParagraph}</p>
      </article>
  </div>
  )
}

export default SingleNews