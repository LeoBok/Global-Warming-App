import logo from '../../images/logo-app.png'
import { BiHome } from 'react-icons/bi'
import SidebarLinks from './SidebarLinks';
import { Link } from 'react-router-dom'
import './Sidebar.css'
import { pageLinks } from '../pageLinks';

const Sidebar = () => {
    return(
        <div className='Sidebar'>
            <div className='main-sidebar-content'>
                <img
                    src={logo}
                    alt='logo app'
                />

                <h3>Global Warming App</h3>

                <Link to='/'>
                    <BiHome className='sidebar-icon'/>
                </Link>
            </div>

            <SidebarLinks items={pageLinks} />
        </div>
    )
}

export default Sidebar