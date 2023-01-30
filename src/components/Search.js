import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import moment from "moment";

// import TextField from "@mui/material/TextField";
// import Stack from "@mui/material/Stack";
// import Autocomplete from "@mui/material/Autocomplete";
// import { FaMapMarkedAlt } from "react-icons/fa";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { TimePicker } from "@mui/x-date-pickers/TimePicker";
// import { FaCalendarAlt } from "react-icons/fa";
// import { Button } from "@mui/material";
import { Playground } from "./udf/Playground";
import { DatePicker } from "./udf/DatePicker";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderColor: "#fff",
}));
const Search = () => {
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
    <Paper sx={{ flexGrow: 1, width: 900 }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Item>Réservez votre location de voiture en Tunisie</Item>
        </Grid>
        <Grid xs={3}>
          <Item>{Playground()}</Item>
        </Grid>
        <Grid xs={4}>
          <Item>{DatePicker("Date et heure de prise en charge", 1)}</Item>
        </Grid>
        <Grid xs={4}>
          <Item>{DatePicker("Date et heure de restitution", 2)}</Item>
        </Grid>
        <Grid xs={1}>
          <Item>
            <IconButton aria-label="search">
              <SearchIcon />
            </IconButton>
          </Item>
        </Grid>

        {/* <Grid xs={8}>
          <Item>Lieu de restitution identique</Item>
        </Grid> */}
      </Grid>
    </Paper>
  );
};

export default Search;
