import "./navbar.scss"
import {useNavigate} from "react-router-dom";

export const Navbar = () => {

    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('home')
    }
    return (
    <nav className="navbar">
        <div className="container-fluid d-flex justify-content-between">
            <div>
            <a className="navbar-brand mb-0 h1" href='dashboard'>Dashboard</a>
            </div>
            <div className="d-flex align-items-center">
                    <i onClick={navigateHome} className="bi bi-house-door-fill fs-4 mx-2"></i>
            </div>
        </div>
    </nav>
    )
}