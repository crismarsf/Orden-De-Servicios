import  React from "react";
import { useEffect } from "react";
import { collection, getDoc } from ""
import { db } from "../Database/Firebase";



export default Ordenes = () => {
    useEffect(() => {

        const obtenerDatos = async() => {
            const datos = await getDoc(collection(db, 'Links' ));
            console.log(datos)
        } 

        obtenerDatos();
    }, []);
     
    return (
        <div>
            <h1>hola</h1>
        </div>
    );
};