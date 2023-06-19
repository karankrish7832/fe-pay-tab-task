import {useState} from 'react';
import {Link} from 'react-router-dom';

export const DefaultNavbar = (props) => {
    const {navList} = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const show = (isMenuOpen) ? "show" : "" ;
    return (
        <nav className="default-nav-bar navbar navbar-expand-lg navbar-light">
            <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
                onClick={()=>setIsMenuOpen(data=>!data)}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show}`} id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {
                        navList.map((item, index) => {
                            return (
                                <li key={index} className="nav-item pt-2">
                                    <Link className="nav-link" to={item.link}>
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

DefaultNavbar.defaultProps = {
    navList: []
}