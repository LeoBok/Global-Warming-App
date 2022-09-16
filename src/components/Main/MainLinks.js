import { Link } from "react-router-dom"
import stats from '../../assets/images/stats.png'
import CarouselComp from "../CarouselComp/CarouselComp"
import { carouselData } from '../CarouselComp/carouselData'

const MainLinks = ({ items }) => {
    return(
        <ul className="items-container pb-lg-3 px-lg-4">
            {
                items.map(item => (
                    <li key={item.id} className='single-item rounded-4 mx-auto d-flex flex-column align-items-center justify-content-center py-4 my-5 m-lg-0 py-lg-4 px-lg-3'>
                        <h3 className='text-center fw-bolder fs-6'>{item.title}</h3>
                        <img
                            className="graph-img"
                            src={stats}
                            alt='stats img'
                        />
                        <Link to={item.path}>
                            <button className="item-button rounded-2 px-3">{item.buttonTxt}</button>
                        </Link>
                    </li>
                ))
            }
            <CarouselComp carouselData={carouselData}  />
        </ul>
    )
}

export default MainLinks