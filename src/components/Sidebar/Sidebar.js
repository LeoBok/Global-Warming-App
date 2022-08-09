import logo from '../../images/logo-app.png'
import { BiHome } from 'react-icons/bi'
import SidebarLinks from './SidebarLinks';
import { Link } from 'react-router-dom'


const Sidebar = () => {
    return(
        <>
            <div>
                <img
                    src={logo}
                    alt='logo app'
                />

                <h3>Global Warming App</h3>

                <Link to='/'>
                    <BiHome />
                </Link>
            </div>

            <SidebarLinks />
        </>
    )
}

export default Sidebar