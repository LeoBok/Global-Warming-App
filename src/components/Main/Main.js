import { Link } from "react-router-dom";

const Main = () => {
    return(
        <div>
            <p>I'm in Main component</p>
            <ul>
                <li>
                    <Link to='/temperature'>temperature</Link>
                </li>
                <li>
                    <Link to='/methan'>Methan</Link>
                </li>
            </ul>
        </div>
    )
}

export default Main