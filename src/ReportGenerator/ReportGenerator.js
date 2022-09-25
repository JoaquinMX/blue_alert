import { TextField, Container, Box, Stack, Item } from "@mui/material";
import * as React from "react";
import dayjs from "dayjs";
import { DateTimePicker } from "@mui/x-date-pickers";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";

const ReportGenerator = (props) => {
  const [date, setDate] = React.useState(dayjs());
  const [time, setTime] = React.useState(dayjs("2018-01-01T00:00:00.000Z"));
  return (
    <div>
      <Stack spacing={2}>
        <TextField
          id="outlined-basic"
          label="Nombre completo"
          variant="outlined"
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Fecha de incidencia"
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <DesktopTimePicker
            label="Hora de incidencia"
            value={time}
            onChange={(newValue) => {
              setTime(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Stack>
    </div>
  );
};
export default ReportGenerator;
