import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <div>
    <nav className="nav">
  <ul>
      <Link to="/" className="site-title">
        <img alt="#" src={"https://www.citygo.tn/assets/img/logo.webp"}  />
      </Link>
      
        <CustomLink to="/ManageBk" > Acceuil </CustomLink>
        <CustomLink to="/Accounts"> <select>
          <option value="">Nos Services</option>
          <option value="">Transfer</option>
          <option value="">Location Avec Chauffeur</option>
        </select></CustomLink>
        <CustomLink to="/FlightSc">Location Business</CustomLink>
        <CustomLink to="/HolidayPack">Nos voitures</CustomLink>  
</ul>
         
            <CustomLink to="/HolidayPack">Register</CustomLink>
       
         <div  className="button1"><button ><CustomLink to="/SignIn">SignIn</CustomLink></button>
         <select >
          <option value="">EN</option>
          <option value="">Fr</option>
         </select>         
         </div>


    </nav>
        
    </div>

       

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
