import { Link } from "react-router-dom";
import "./navbarDesktop.css";
import { useContext } from "react";
import { AdminContext } from "../../Context/LoginContext";

// Header and navigation
export default function NavbarDesktop() {
  // Make context data accessible
  // Check admins if is logged in
  const { admin, dispatch } = useContext(AdminContext);

  // Send action to reducer to logout/proccess false
  const logout = () => {
    dispatch({ type: "logout" });
  };
  return (
    <nav>
      {/* Logotype */}
      <div className="navLeft">
        <strong>Boplats</strong>
        <i className="fas hotel"></i>
      </div>
      {/* Navbar list */}
      <div className="navCenter">
        <ul className="navList">
          <li>
            <Link className="active" to="/">
              HEM
            </Link>
          </li>
          <li>
            <Link className=" navItem" to="/">
              KONTAKT
            </Link>
          </li>
          {/* IF ADMIN IS LOGIN  */}
          <li>
            <Link className=" navItem" to="/create">
              {admin && " SKAPA"}
            </Link>
          </li>
          <li>
            <Link className=" navItem" to="/">
              OM OSS
            </Link>
          </li>
          <li>
            <Link onClick={logout} className=" navItem" to="/">
              {admin && "LOGOUT"}
            </Link>
          </li>
        </ul>
      </div>

      {/* Admin imgage and name */}
      <div className="navRight">
        {admin ? (
          <>
            <img className="navImg" src={admin.images} alt="" />
            <i className="navUser">{admin.name} </i>
          </>
        ) : (
          <>
            <ul className="navList">
              <li>
                {" "}
                <Link className=" navItem" to="/register">
                  Registrera
                </Link>
              </li>
            </ul>
            <i className="line">|</i>
            <ul className="navList">
              <li>
                {" "}
                <Link className=" navItem" to="/login">
                  Loggin
                </Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </nav>
  );
}
