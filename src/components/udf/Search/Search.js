import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Playground } from "../Playground";
import { DatePicker } from "../DatePicker";
import Typography from "@mui/material/Typography";
import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom";
import "./Search.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ModeOfTravelIcon from "@mui/icons-material/ModeOfTravel";
import { useDispatch, useSelector } from "react-redux";
import { postSearch } from "./action";

// const Item = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
//   borderColor: "#000",
// }));
import moment from "moment";

const Search = () => {
  // const [value, setValue] = React.useState(null);
  const [locality, setlocality] = useState(null);
  // console.log("locality ==> ", locality);
  const [pickUpDate, setpickUpDate] = useState(null);
  console.log("pickUpDate ==>", pickUpDate);
  const [pickDownDate, setpickDownDate] = useState(null);
  console.log("pickDownDate ==>", pickDownDate);
  // const [password, setPassword] = useState();
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState();
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();
    const searchQuery = {
      apikey: "dd8a18ba-3464-49d9-bb10-b2bc5f448155",
      pickUpId: locality.id,
      dropOffId: locality.id,
      pickupDate: moment(new Date(pickUpDate)).format("YYYY-MM-DD"),
      dropoffDate: moment(new Date(pickDownDate)).format("YYYY-MM-DD"),
      pickupTime: moment(new Date(pickUpDate)).format("HH:mm"),
      dropoffTime: moment(new Date(pickDownDate)).format("HH:mm"),
    };
    console.log("🚀 ~ file: Search.js:54 ~ search ~ searchQuery", searchQuery);
    navigate("/steptwo", { state: searchQuery });
    // postSearch(newUser);
    // dispatch(postSearch(newUser));
    // console.log(newUser);
    //   // setFirst_Name("");
    //   // setLast_Name("");
    //   // setPassword("");
    //   // setEmail("");
    //   // setPhone("");
  };
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
      <Typography className="image2">
        <Img
          alt="complex"
          src={
            "https://d1pnlk307kfyn2.cloudfront.net/photos/content/gallery/gallery7532/offreslide-min.webp"
          }
        />
      </Typography>
      <div>
        <ul className="divTab">
          <li className="nav-item">
            <a
              className="nav-link active text-md-left text-center text-dark docs-creator"
              href="/"
            >
              {" "}
              Location
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-md-left text-center docs-creator"
              href="/transfert/"
            >
              {" "}
              Transferts{" "}
            </a>
          </li>

          <li>
            <a
              className="nav-link text-md-left text-center docs-creator"
              href="/location-voiture-avec-chauffeur/"
            >
              {" "}
              Location avec chauffeur{" "}
            </a>
          </li>
        </ul>
      </div>
      <div>
        <Paper className="division">
          <Grid container spacing={2}>
            <Grid xs={12} className="titre">
              <h2>Réservez votre location de voiture en Tunisie</h2>
            </Grid>

            <Grid xs={3}>{Playground(setlocality)}</Grid>
            {/* <Grid xs={3}>
              {" "}
              <div className="Lieu">
                <Autocomplete
                  {...defaultProps}
                  id="controlled-demo"
                  value={locality.name}
                  onChange={(event, newValue) => {
                    // console.log("event", event);
                    console.log("newValue ==>", newValue);
                    setlocality(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Lieu de prise en charge"
                      variant="standard"
                    />
                  )}
                />
              </div>
            </Grid> */}
            <Grid xs={4}>
              {/* <label><CalendarMonthIcon/>Date et heure de prise en charge</label>  */}
              {DatePicker("Date et heure de prise en charge", 1, setpickUpDate)}
            </Grid>
            <Grid xs={4}>
              {/* <label><CalendarMonthIcon/>Date et heure de restitution</label>  */}
              {DatePicker(
                "Date et heure de restitution",
                pickUpDate || 2,
                setpickDownDate
              )}
            </Grid>
            <Grid xs={1}>
              <IconButton
                aria-label="search"
                className="search"
                onClick={search}
              >
                <SearchIcon />
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
const pays = [
  { id: 416, name: "Tunis : Aéroport Tunis-Carthage" },
  { id: 418, name: "The Tunis : Port la Goulette" },
  { id: 419, name: "Tunis ville" },
  { id: 420, name: "Bizerte ville" },
  { id: 421, name: "Nabeul ville" },
  { id: 422, name: "Hammamet ville" },
  { id: 423, name: "Tabarka : Aéroport Tabarka" },
  { id: 425, name: "Enfidha: Aéroport Enfidha" },
  { id: 426, name: "Sousse ville" },
  { id: 427, name: "Monastir : Aéroport Habib Bourguiba" },
  { id: 429, name: "Mahdia ville" },
  { id: 430, name: "Sfax : Aéroport de Sfax-Thyna" },
  { id: 431, name: "Sfax ville" },
  { id: 432, name: "Gafsa ville" },
  { id: 433, name: "Djerba : Aéroport Djerba Mellita" },
  { id: 436, name: "Tozeur : Aéroport Tozeur Nefta" },
];
