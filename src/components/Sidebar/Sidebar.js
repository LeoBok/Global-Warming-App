import logo from '../../images/logo-app.png'
import { BiHome } from 'react-icons/bi'
import SidebarLinks from './SidebarLinks';
import { Link } from 'react-router-dom'


const Sidebar = () => {

    const sidebarArr = [];
    const appLogo = <img
        src={logo}
        alt='logo app'
    />;
    const appTitle = <h3>Global Warming App</h3>;
    const sidebarIcon = <Link to='/'>
        <BiHome />
    </Link>;
    sidebarArr.push(appLogo, appTitle, sidebarIcon)

    return(
        <>
            <div>
                {sidebarArr}
            </div>

            <SidebarLinks />
        </>
    )
}

export default Sidebar