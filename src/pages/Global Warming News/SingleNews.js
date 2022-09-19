import './GbNews.css'
import { useParams } from "react-router-dom"
import {carouselData} from "../../components/CarouselComp/carouselData";

const SingleNews = () => {
  const { singleNewsId } = useParams();
  const singleNotice = carouselData.find(data => data.id == singleNewsId)
  console.log(singleNotice);

  return (
    <div className="p-4">
      <article className="card mx-auto">
        <img
          src={singleNotice.imgSource}
          className='card-img-top'
        />
        <h4 className="p-3">{singleNotice.title}</h4>
        <p className="p-3">{singleNotice.extendedParagraph}</p>
      </article>
  </div>
  )
}

export default SingleNews