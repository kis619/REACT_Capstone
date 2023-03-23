import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'

const NavLink = ({ title, route }) => {
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
          <NavLink title="SHOP" route="/shop" />
          <NavLink title="SIGN-IN" route="/sign-in" />
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
