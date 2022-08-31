import { pageLinks } from "../pageLinks"
import { Link } from 'react-router-dom'

const SidebarLinks = ({ items }) => {
    return(
        <ul className="sidebar-links">
        {
            items.map(item => (
                <li key={item.id}>
                    <Link to={item.path}>
                        {item.title}
                    </Link>
                </li>
            ))
        }
        </ul>
    )
}

export default SidebarLinks