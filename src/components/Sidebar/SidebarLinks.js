import { pageLinks } from "../pageLinks"
import { Link } from 'react-router-dom'

const SidebarLinks = () => {
    return(
        <ul className="sidebar-links">
        {
            pageLinks.map(item => (
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