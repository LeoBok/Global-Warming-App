import { NavLink } from 'react-router-dom'

const SidebarLinks = ({ items }) => {
    return(
        <ul className="sidebar-links rounded-4 py-4">
        {
            items.map(item => (
                <li key={item.id} className='py-2 py-lg-3'>
                    <NavLink
                        to={item.path}
                        className={({ isActive }) => (isActive ? "active-class rounded-1 p-1" : "not-active-class")}
                    >
                        {item.title}
                    </NavLink>
                </li>
            ))
        }
        </ul>
    )
}

export default SidebarLinks