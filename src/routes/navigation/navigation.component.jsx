import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'

const NavItem = ({ title, route }) => {
  return (
    <Link className="nav-link" to={route}>
      {title}
    </Link>
  );
};

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo/>
        </Link>
        <div className="nav-links-container">
          <NavItem title="SHOP" route="/shop" />
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
