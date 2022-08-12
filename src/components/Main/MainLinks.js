import { Link } from "react-router-dom"
import { pageLinks } from "../pageLinks"
import stats from '../../images/stats.png'

const MainLinks = () => {
    return(
        <ul className="items-container">
            {
                pageLinks.map(item => (
                    <li key={item.id} className='single-item'>
                        <h3>{item.title}</h3>
                        <img
                            className="graph-img"
                            src={stats}
                            alt='stats img'
                        />
                        <Link to={item.path}>
                            <button className="item-button">See graph</button>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default MainLinks