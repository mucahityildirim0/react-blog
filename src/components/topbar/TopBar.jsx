import "./topbar.css";
import { Link } from "react-router-dom";

const TopBar = () => {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItems">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItems">
            <Link to="/" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItems">
            <Link to="/" className="link">
              CONTACT
            </Link>
          </li>
          <li className="topListItems">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItems">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
            alt="profileimg"
          />
        ) : (
          <ul className="topList">
            <li className="topListItems">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItems">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default TopBar;
