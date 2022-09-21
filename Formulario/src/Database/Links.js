import React, {useEffect, useState} from 'react';
import './Links.css'
import Formularios from '../Compoent/Formularios';
import {db} from './Firebase'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import CssBaseline from '@mui/material/CssBaseline';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { toast } from 'react-toastify';


const Links = () => {
    
    const [links, setLinks] = useState([]);
    const [currentId, setCurrentId] = useState('')

    const addOrEditsLink = async (linkObject) => {
        try {
            if (currentId === '') {
                await db.collection('links').doc().set(linkObject);
                toast('New Register Add',{
                    type: 'success',
                    autoClose: 2000,
                    theme: 'dark',
                });
            }else {
                await db.collection('links').doc(currentId).update(linkObject)
                toast('Registre Update Successfully',{
                    type: 'info',
                    autoClose: 2000,
                    theme: 'dark',
                });
                setCurrentId('');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const onDeleteLink = async (id) => {
       if (window.confirm('are you sure you want to delete this registrer')) {
        await db.collection('links').doc(id).delete();
        toast('Register Removed Successfully',{
            type: 'error',
            autoClose: 2000,
            theme: 'dark',
        })
       };
    };

    const getLinks = async() => {
       db.collection('links').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach(doc => {
                docs.push({...doc.data(), id:doc.id});
            });
            setLinks(docs);
        });    
    };
    useEffect(() => {
        getLinks();
    }, []);

    return (
        <section>
            <div>
                <Formularios {...{addOrEditsLink, currentId, links}} />
            </div>
            
            <CssBaseline />
                <div >
                    <Box
                    sx={{
                        marginTop: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        maxWidth: "100%",
                        minWidth: "10%",
                        
                        
                      }}
                    >
                        <Box component="form" sx={{ mt: 3 }}>
                            <Grid item xs={12} >
                                <Grid container spacing={2}  >
                                {links.map((link) => (
                                
                                    <Card variant="outlined"  key={link.id}>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'between',
                                            }}
                                        >
                                            <div style={{marginRight: '50px'}} >{link.id}</div>
                                            <CloseIcon 
                                                color='error' 
                                                onClick={() => onDeleteLink(link.id)} 
                                            />
                                            <EditIcon onClick={() => setCurrentId(link.id)} />
                                        </div> 
                                        <div>{link.name}</div>
                                        <div>{link.serial}</div>
                                    </Card>
                                    ))}
                                </Grid>
                            </Grid>
                        </Box>
                    </Box> 
                </div>
        </section>
    )
}

export default Links;



//la base de datos se exporta a index.js y se inicializa en App.js