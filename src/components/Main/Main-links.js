import { Link } from "react-router-dom"
import stats from '../../assets/images/stats.png'
import Button from "../Button/Button"
import Carousel from "../Carousel/Carousel-component"
import { carouselData } from '../Carousel/carousel-data'

const MainLinks = ({ items }) => {
    return(
        <ul className="items-container px-lg-1">
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
                            <Button
                                buttonStyle='item-button rounded-2 px-3'
                                children={item.buttonTxt}
                            />
                        </Link>
                    </li>
                ))
            }
            <Carousel carouselData={carouselData}  />
        </ul>
    )
}

export default MainLinks