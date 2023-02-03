import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
import moment from "moment";

import Stack from "@mui/material/Stack";

const DatePicker = function (label, days, pickUpDate) {
  const [value, setValue] = React.useState(
    dayjs(moment(Date.now()).add(days, "d"))
  );
  // TODO : format date + change PM/AM
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <MobileDateTimePicker
          label={label}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          onSubmit={(newValue) => {
            console.log(newValue);
            console.log("date", moment(newValue, "MM-DD-YYYY"));
            console.log("time", moment(newValue, "HH-mm"));

            setValue(newValue);
          }}
          minDateTime={dayjs(moment(Date.now()))}
          // minTime={pickUpDate?}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
};
export { DatePicker };
