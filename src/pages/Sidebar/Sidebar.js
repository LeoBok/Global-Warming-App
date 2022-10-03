import logo from '../../assets/images/logo-app.png'
import { BiHome } from 'react-icons/bi'
import SidebarLinks from '../../components/Sidebar/Sidebar-links';
import { Link } from 'react-router-dom'
import '../../components/Sidebar/Sidebar.css'
import { pageLinks } from '../../components/pageLinks';

const Sidebar = () => {
    return(
        <div className='Sidebar rounded-4 d-lg-flex flex-column justify-content-lg-between'>
            <div className='main-sidebar-content py-3 px-lg-2'>
                <img
                    src={logo}
                    alt='logo app'
                    className='py-3'
                />

                <h3 className='py-3 fs-4'>Global Warming App</h3>
                <Link to='/'>
                    <BiHome className='sidebar-icon'/>
                </Link>
            </div>

            <SidebarLinks items={pageLinks} />
        </div>
    )
}

export default Sidebar