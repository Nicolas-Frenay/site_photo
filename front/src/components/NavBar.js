import '../styles/NavBar.css'
import {Link} from "react-router-dom";

function NavBar () {
    return (
        <nav className="nav">
            <div className="bar">
                <img className="logo" src={require('../assets/galaxy.png')} alt="galaxy" />
                <Link to="/">Home</Link>
                <Link to="/upload">Upload</Link>
                <Link to="/login">Connexion</Link>
                <p className="title">Milhouse Astro</p>
            </div>
        </nav>
    )
}

export default NavBar