import { TextField, Container, Box, Stack, Item } from "@mui/material";
import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import { FormGroup } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import Autocomplete from "@mui/material/Autocomplete";
import ReCAPTCHA from "react-google-recaptcha";

const ReportGenerator = (props) => {
  const [date, setDate] = React.useState(dayjs());
  const [time, setTime] = React.useState(dayjs("2018-01-01T00:00:00.000Z"));
  const [victim, setVictim] = React.useState(true);
  const [report, setReport] = React.useState(true);
  const [folio, setFolio] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [isVerified, setIsVerified] = React.useState(false);

  const crimes = [
    { label: "Asesinato", id: 1 },
    { label: "Violacion", id: 2 },
    { label: "Asalto y agresión", id: 3 },
    { label: "Robo de vehiculo", id: 4 },
    { label: "Homicidio", id: 5 },
    { label: "Asalto sexual", id: 6 },
    { label: "Violencia domestica", id: 7 },
    { label: "Robo", id: 8 },
  ];

  const handleChangeVictim = (event) => {
    setVictim(event.target.checked);
  };
  const handleChangeReport = (event) => {
    setReport(event.target.checked);
  };
  const handleChangeFolio = (event) => {
    setFolio(event.target.value);
  };
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleOnChangeCap = (value) => {
    setIsVerified(true);
  };
  const handleOnChangePhone = (event) => {
    setPhone(event.target.value);
  };

  return (
    <div>
      <Stack spacing={2}>
        <TextField
          id="outlined-basic"
          label="Nombre completo"
          variant="outlined"
          value={name}
          onChange={handleChangeName}
        />
        <TextField
          id="With normal TextField"
          label="Numero de telefono"
          variant="outlined"
          value={phone}
          onChange={handleChangePhone}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+52</InputAdornment>
            ),
          }}
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
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={crimes}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Tipo de crimen" />
          )}
        />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="¿Tu fuiste la victima?"
            checked={victim}
            onChange={handleChangeVictim}
            inputProps={{ "aria-label": "controlled" }}
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="¿Ya fue reportado?"
            checked={report}
            onChange={handleChangeReport}
            inputProps={{ "aria-label": "controlled" }}
          />
        </FormGroup>
        {report && (
          <div>
            <TextField
              id="outlined-basic"
              label="No. Folio"
              variant="outlined"
              value={folio}
              onChange={handleChangeFolio}
            />
          </div>
        )}
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Genero:</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="hombre"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="hombre"
              control={<Radio />}
              label="Hombre"
            />
            <FormControlLabel value="mujer" control={<Radio />} label="Mujer" />
            <FormControlLabel value="otro" control={<Radio />} label="Otro" />
          </RadioGroup>
        </FormControl>
        <ReCAPTCHA
          sitekey="6LeaWSkiAAAAAIoGI0-R3bRuMxr5u6O3PwIOVxwk"
          onChange={(e) => handleOnChangeCap(e)}
        />
      </Stack>
      <Button variant="contained">Enviar</Button>
    </div>
  );
};
export default ReportGenerator;
