import { Link } from "react-router-dom"
import stats from '../../images/stats.png'

const MainLinks = ({ items }) => {
    return(
        <ul className="items-container">
            {
                items.map(item => (
                    <li key={item.id} className='single-item'>
                        <h3>{item.title}</h3>
                        <img
                            className="graph-img"
                            src={stats}
                            alt='stats img'
                        />
                        <Link to={item.path}>
                            <button className="item-button">{item.buttonTxt}</button>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default MainLinks