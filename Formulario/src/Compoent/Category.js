import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';

const Category = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <section className="hero">
      <h1>Select what type of equipment you are going to enter</h1>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        ></Box>
        <Box sx={{ minWidth: 120 }}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Enter Team</InputLabel>
              <Select
                required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Enter Team"
                onChange={handleChange}
              >
                <MenuItem value={10}>Computer</MenuItem>
                <MenuItem value={20}>Printer</MenuItem>
                <MenuItem value={30}>UPS</MenuItem>
                <MenuItem value={30}>Air-conditioning</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Button
              type="submit"
              href="/Formularios"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send
            </Button>
        </Box>
      </Container>
    </section>
  );
};
export default Category;