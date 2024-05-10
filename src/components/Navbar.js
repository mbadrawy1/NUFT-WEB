import { Outlet, NavLink } from "react-router-dom";
import "./css/Navbar.css";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar">
          <ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return isActive ? { color: "plum" } : {};
                }}
              >
                {({ isActive }) => {
                  return isActive ? (
                    <img
                      src={require("../assets/logo.png")}
                      style={styles.image}
                      alt="NUFT"
                    />
                  ) : (
                    <img
                      src={require("../assets/logo.png")}
                      style={styles.image}
                      alt="NUFT"
                    />
                  );
                }}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return isActive
                    ? { color: "plum", fontWeight: "bold", marginLeft: 100 }
                    : {};
                }}
              >
                {({ isActive }) => {
                  return isActive ? "🏠 Home" : "Home";
                }}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="News"
                style={({ isActive }) => {
                  return isActive ? { color: "plum", fontWeight: "bold" } : {};
                }}
              >
                {({ isActive }) => {
                  return isActive ? "🛠️ News" : "News";
                }}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="universitiesguide"
                style={({ isActive }) => {
                  return isActive ? { color: "plum", fontWeight: "bold" } : {};
                }}
              >
                {({ isActive }) => {
                  return isActive
                    ? "Universities Guidebooks"
                    : "Universities Guidebooks";
                }}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="AdmissionStatus"
                style={({ isActive }) => {
                  return isActive ? { color: "plum", fontWeight: "bold" } : {};
                }}
              >
                {({ isActive }) => {
                  return isActive ? "Admissions Status" : "Admissions Status";
                }}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="EquivalentCertificatesCalculator"
                style={({ isActive }) => {
                  return isActive ? { color: "plum", fontWeight: "bold" } : {};
                }}
              >
                {({ isActive }) => {
                  return isActive
                    ? "Equivalent Certificates Calculator"
                    : "Equivalent Certificates Calculator";
                }}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="ContactUs"
                style={({ isActive }) => {
                  return isActive ? { color: "plum", fontWeight: "bold" } : {};
                }}
              >
                {({ isActive }) => {
                  return isActive ? "💁Contact Us" : "Contact Us";
                }}
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
const styles = {
  header: {
    backgroundColor: "#1C2E4A",
    color: "white",
    padding: "1rem 2rem",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
    marginRight: 100,
  },
  navList: {
    display: "flex",
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
  navLink: {
    color: "inherit",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    marginRight: 40,
    fontSize: "0.8rem",
  },
  image: {
    width: "100px",
  },
};
