import { Outlet, Link, useLocation } from "react-router-dom";
import "./layout.css";

const Layout = () => {
  const location = useLocation();

  const isActiveLink = (pathname) => {
    return location.pathname === pathname ? "active-link" : "";
  };

  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/" className={isActiveLink("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/blogs" className={isActiveLink("/blogs")}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className={isActiveLink("/projects")}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/skills" className={isActiveLink("/skills")}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact" className={isActiveLink("/contact")}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
