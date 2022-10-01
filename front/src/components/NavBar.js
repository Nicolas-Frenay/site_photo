import '../styles/NavBar.css'

function NavBar () {
    return (
        <nav className="nav">
            <div className="bar">
                <img className="logo" src={require('../assets/galaxy.png')} alt="galaxy" />
                <p className="title">Milhouse Astro</p>
            </div>
        </nav>
    )
}

export default NavBar