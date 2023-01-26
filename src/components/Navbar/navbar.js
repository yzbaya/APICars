import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
  <ul>
      <Link to="/" className="site-title">
        <img alt="#" src={"https://www.citygo.tn/assets/img/logo.webp"}  />
      </Link>
        <CustomLink to="/ManageBk"> Acceuil </CustomLink>
        <CustomLink to="/Accounts"> <select className="Re" >
          <option value="">Nos Services</option>
          <option value="">Transfer</option>
          <option value="">Location Avec Chauffeur</option>
        </select></CustomLink>
        <CustomLink to="/FlightSc">Location Business</CustomLink>
        <CustomLink to="/HolidayPack">Nos voitures</CustomLink>  
</ul>
         <div className="Re">
            <CustomLink to="/HolidayPack">Register</CustomLink>
          </div>
         <div className="Re" ><button className="button1"><CustomLink to="/SignIn">SignIn</CustomLink></button></div>
         <select className="Re">
          <option value="">EN</option>
          <option value="">Fr</option>
         </select>
     
    </nav>

  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
