import * as React from 'react';
import { useState, useEffect } from 'react';
import './Formularios.css'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { db } from '../Database/Firebase';
import { toast } from 'react-toastify';





const Form = (props) => {

  const initialStateValues = {
      name: "",
      nit: "",
      phone: "",
      city: "",
      email: "",
      brand: "",
      model: "",
      serial: "",
      estadoExterior: "",
      problemaReportado: "",
      informeTecnico: "",
      details: "",
      spareModel: "",
      spareSerial: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const manejaValoresIngresados = event =>{
    const {name, value} = event.target;
    setValues({...values, [name]: value})
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(!validateEmail(values.email)){
      return toast('Invalid Email',{
              type: 'warning',
              autoClose: 2000,
              theme: 'dark',
          })
    };
    props.addOrEditsLink(values);
    setValues({...initialStateValues});
  };
  
  const getLinksById = async (id) => {
    const doc = await db.collection('links').doc(id).get();
    setValues({...doc.data()});
  }

  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    }else{
      getLinksById(props.currentId);
    }
  }, [props.currentId]);

  return (
    <section>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} >
            <Grid item xs={12}>
              
                <h2>Customer information</h2>
                <br/>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={manejaValoresIngresados}
                  autoComplete="given-name"
                  name="name"
                  required
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={values.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                onChange={manejaValoresIngresados}
                  required
                  fullWidth
                  id="nit"
                  label="NIT"
                  name="nit"
                  autoComplete="family-name"
                  value={values.nit}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                onChange={manejaValoresIngresados}
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  autoComplete="family-name"
                  value={values.phone}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                onChange={manejaValoresIngresados}
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="family-name"
                  value={values.city}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                onChange={manejaValoresIngresados}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={values.email}
                />
              </Grid>
              <Grid item xs={12}>
                <br />
                <h2>Technical Report</h2>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                onChange={manejaValoresIngresados}
                  required
                  fullWidth
                  id="brand"
                  label="Brand"
                  name="brand"
                  autoComplete="family-name"
                  value={values.brand}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                onChange={manejaValoresIngresados}
                  required
                  fullWidth
                  id="model"
                  label="Model"
                  name="model"
                  autoComplete="family-name"
                  value={values.model}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                onChange={manejaValoresIngresados}
                  required
                  fullWidth
                  id="serial"
                  label="Serial"
                  name="serial"
                  autoComplete="family-name"
                  value={values.serial}
                />
              </Grid>
              <Grid
              item xs={12}
              width= "25ch"
              >
                <TextField
                onChange={manejaValoresIngresados}
                fullWidth
                id="outlined-multiline-static"
                label="Equipment Exterior Status"
                name="estadoExterior"
                multiline
                rows={4}
                value={values.estadoExterior}
                />
              </Grid>
              <Grid
              item xs={12}
              width= "25ch"
              >
                <TextField
                onChange={manejaValoresIngresados}
                fullWidth
                id="outlined-multiline-static"
                label="Customer Reported Problem"
                name="problemaReportado"
                multiline
                rows={4}
                value={values.problemaReportado}
                />
              </Grid>
              <Grid
              item xs={12}
              width= "25ch"
              >
                <TextField
                onChange={manejaValoresIngresados}
                fullWidth
                id="outlined-multiline-static"
                label="Technical report"
                name="informeTecnico"
                multiline
                rows={4}
                value={values.informeTecnico}
                />
              </Grid>

              <Grid item xs={12}>
                <br />
                <h2>spare parts</h2>
              </Grid>

              <Grid item xs={12}>
                <TextField
                onChange={manejaValoresIngresados}
                  required
                  fullWidth
                  id="details"
                  label="Details"
                  name="details"
                  autoComplete="family-name"
                  value={values.details}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                onChange={manejaValoresIngresados}
                  required
                  fullWidth
                  id="modelspare"
                  label="Model"
                  name="spareModel"
                  autoComplete="family-name"
                  value={values.spareModel}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                onChange={manejaValoresIngresados}
                  required
                  fullWidth
                  id="serialspare"
                  label="Serial"
                  name="spareSerial"
                  autoComplete="family-name"
                  value={values.spareSerial}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {props.currentId === ''? 'Send': 'Update'}
            </Button>
            
          </Box>
        </Box>
        
      </Container>
    </section>
  );
}

export default Form;