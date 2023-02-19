import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Playground } from "../Playground";
import { DatePicker } from "../DatePicker";
import Typography from "@mui/material/Typography";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './Search.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';


const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderColor: "#000",
}));
const Search = () => {
    const Img = styled("img")({
  marginTop: 90,
  maxWidth: "100%",
  maxHeight: "100%",
});
  // const [filteredList, setFilteredList] = new useState(pays);
  // const filterBySearch = (event) => {
  //   // Access input value
  //   const query = event.target.value;
  //   // Create copy of item list
  //   var updatedList = [...itemList];
  //   // Include all elements which includes the search query
  //   updatedList = updatedList.filter((item) => {
  //     return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  //   });
  //   // Trigger render with updated values
  //   setFilteredList(updatedList);
  // };
  return (
    <div className="divi">
    <Typography className='image2'>
      <Img
        alt="complex"
        src={"https://d1pnlk307kfyn2.cloudfront.net/photos/content/gallery/gallery7532/offreslide-min.webp" }
      /> 
    </Typography>
    <div>
        <ul className="divTab">
          <li className="nav-item"><a class="nav-link active text-md-left text-center text-dark docs-creator" href="/"> Location</a></li>
          <li class="nav-item">
          <a class="nav-link text-md-left text-center docs-creator" href="/transfert/"> Transferts </a>
          </li>
          
          <li><a class="nav-link text-md-left text-center docs-creator" href="/location-voiture-avec-chauffeur/"> Location avec chauffeur </a></li>
        </ul>       
    </div>
    <div>
       <Paper  className='division'>
       <Grid container spacing={2} >
      
        <Grid xs={12} className="titre">
          <h2>Réservez votre location de voiture en Tunisie</h2>
        </Grid>
        
        <Grid xs={3}>

        {Playground()}
        </Grid>
        <Grid xs={4}>
          {/* <label><CalendarMonthIcon/>Date et heure de prise en charge</label>  */}
          {DatePicker("Date et heure de prise en charge", 1)}
        </Grid>
        <Grid xs={4}>
          {/* <label><CalendarMonthIcon/>Date et heure de restitution</label>  */}
          {DatePicker ("Date et heure de restitution", 2)}
        </Grid>
         <Grid xs={1}>
          
            <IconButton aria-label="search" className="search">
              <SearchIcon/>
            </IconButton>
          
        </Grid>         


        {/* <Grid xs={8}>
          <Item>Lieu de restitution identique</Item>
        </Grid> */}
      </Grid>
    </Paper>        
    </div>
         


    </div>
   
  );
};

export default Search;

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