import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const NavLink = ({ title, route }) => {
  return (
    <Link className="nav-link" to={route}>
      {title}
    </Link>
  );
};


const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo />
        </Link>
        <div className="nav-links-container">
          <NavLink title="SHOP" route="/shop" />
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
          ) : (
            <NavLink title="SIGN IN" route="/auth" />
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
