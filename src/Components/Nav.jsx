import Netflix1 from "../Netflix1.svg"

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md shadow navbar-dark bg-dark" id="nav">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={Netflix1} alt="" id="img1" className="d-inline-block align-text-top mx-5 " />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">TV Shows</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Movies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">New & Popular</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">My List</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </>
    )
}
export default Nav
