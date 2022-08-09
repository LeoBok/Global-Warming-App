import { Link } from "react-router-dom"
import { pageLinks } from "../pageLinks"
import stats from '../../images/stats.png'

const MainLinks = () => {
    return(
        <ul>
            {
                pageLinks.map(item => (
                    <li key={item.id}>
                        <h3>{item.title}</h3>
                        <img
                            src={stats}
                            alt='stats img'
                        />
                        <Link to={item.path}>
                            <button>See graph</button>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default MainLinks