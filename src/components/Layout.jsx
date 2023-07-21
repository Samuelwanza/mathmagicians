import { Link, Outlet } from "react-router-dom";
import style from "../styles/Layout.module.css";
const Layout = () => (
  <div className={style.container}>
    <div className={style.layout}>
      <h1>Math Magicians</h1>
      <div className="navigation">
        <Link className={`${style.link} ${style.navdecoration}`} to="/">
          Home
        </Link>
        <Link
          className={`${style.link} ${style.navdecoration}`}
          to="/calculator"
        >
          Calculator
        </Link>
        <Link className={style.link} to="/quotes">
          Quotes
        </Link>
      </div>
    </div>
    <div>
      <Outlet />
    </div>
  </div>
);
export default Layout;
