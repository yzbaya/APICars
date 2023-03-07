import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./navbar.css";
export default function Navbar() {
  return (
    <nav className="nav" id="mainNav">
      <div className="container-fluid">
        <ul>
          <div>
            <Link to="/">
              <img alt="#" src={"https://www.citygo.tn/assets/img/logo.webp"} />
            </Link>
          </div>
          <div className="nav1">
            <CustomLink to="/Acceuil"> Acceuil </CustomLink>
            <CustomLink to="/">
              {" "}
              <select className="select ">
                <option value="">Nos Services</option>
                <option value="">Transfer</option>
                <option value="">Location Avec Chauffeur</option>
              </select>
            </CustomLink>
            <CustomLink to="/">Location Business</CustomLink>
            <CustomLink to="/">Contact</CustomLink>
            <CustomLink to="/">Nos voitures</CustomLink>
          </div>

          <div className="nav1">
            <li>
              <img
                src="https://www.citygo.tn/assets/img/currencies24.png"
                alt=""
              />
              <select className="select1 ">
                <option value="">TND </option>
                <option value="">EUR</option>
                <option value="">TND</option>
                <option value="">USD</option>
              </select>
            </li>
            <div className="nav1">
              <li className="col border-right ">
                <img
                  src="https://www.citygo.tn/assets/img/customer-service24.png"
                  alt=""
                />
                Num. Tunisien <br />
                <a
                  href="tel:0021653168168"
                  rel="external"
                  className="text-dark"
                >
                  {" "}
                  (+216) 53 168 168
                </a>
              </li>

              <li>
                <img
                  src="https://www.citygo.tn/assets/img/whatsapp24ico.png"
                  alt=""
                />
                Num. Français:
                <br />
                <a
                  className="text-dark"
                  rel="external"
                  href="https://api.whatsapp.com/send?phone=+33628962689&text=Salut,%20je%20souhaite%20vous%20contacter%20!"
                >
                  {" "}
                  (+33) 628 962 689{" "}
                </a>
              </li>
            </div>

            <button className="button-18">
              <CustomLink to="/">
                <img
                  alt=""
                  src={"https://www.citygo.tn/assets/img/user24.png"}
                />
                Espace Client
              </CustomLink>
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
