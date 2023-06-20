import {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../Assets/Images/logo.jpg';

const defaultNavList = [
    {
        name: 'Home',
        link: '/transac-dashboard',
        isActive: false
    },
    {
        name: 'Dashboard',
        link: '/home/transaction-dashboard',
        isActive: true
    }    
]

export const Navbar = (props) => {
    const {navList, isShowNavBrand=true} = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const show = (isMenuOpen) ? "show" : "" ;
    return (
        <nav className="main-nav-bar navbar navbar-expand-lg navbar-light bg-light-purple">
            {/* {
                isShowNavBrand ? 
                    <Link className="navbar-brand" to="/home/transaction-dashboard">
                        <img src={logo} alt="logo" className="logo"/>
                    </Link>
                : ''
            } */}
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
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    {
                        navList.map((item, index) => {
                            return (
                                <li key={index} className="nav-item">
                                    <Link className={`nav-link ${item.isActive ? '' : 'opacity-5'}`} to={item.link}>
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

Navbar.defaultProps = {
    navList: defaultNavList
}