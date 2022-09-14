import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom';

const HeaderNav = () => {
    return ( 
      <nav className="header-nav">
        <Dropdown>
          <Dropdown.Toggle  id="dropdown-basic">
            <i className="fal fa-bars"></i>
          </Dropdown.Toggle>

          <Dropdown.Menu className="header-menu">
            <Dropdown.Item><Link to="/">Home</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/products">Products</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/blogs">Blogs</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/contact-us">Contact us</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/about-us">About us</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
     );
}
 
export default HeaderNav;