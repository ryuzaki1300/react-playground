import Logo from  '../../assets/img/Logo.png';
import HeaderNav from './HeaderNav';

const Header = () => {
    return ( 
        <header className="container">
            <div className="d-flex justify-content-between">
                <div className="left-side">
                    <img src={ Logo } alt="react-logo" />
                </div>
                <div className="right-side d-flex justify-content-start">
                    <HeaderNav />
                    <button>Sign in</button>
                </div>
            </div>
        </header>
     );
}
 
export default Header;