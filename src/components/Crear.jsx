import React, { useState } from 'react'
import { GuardarEnStorage } from '../custom/GuardarEnStorage';

export const Crear = ({setListadoState}) => {

    const tituloMovies = "Add Movie"

    const [peliState, setPeliState] = useState({
        titulo: '',
        descripcion: ''
    });

    const {titulo, descripcion} = peliState;

    const addMovie = e =>{
        e.preventDefault();

        //Conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //Crear objeto de la pelicula a guardar
            let peli = {
                id: new Date().getTime(),
                titulo,
                descripcion
            }
            
            //Guardar estado
            setPeliState(peli)

            GuardarEnStorage("pelis", peli)

            alert("Pelicula añadida correctamente!")

            //Actualizar estado
            setListadoState(elementos => {
                return [...elementos, peli];
            });
    }



    return (
        <>
            <div className="add">
                <h3 className="title">{tituloMovies}</h3>
                <form onSubmit={addMovie}>
                    <input type="text" 
                    id='titulo' 
                    name='titulo'
                    autocomplete="off"
                    placeholder="Title" />

                    <textarea 
                    id='descripcion' 
                    name='descripcion'
                    autocomplete="off"
                    placeholder="Description"></textarea>

                    <input 
                    id='save'
                    type="submit" 
                    value="Guardar" />
                </form>
            </div>
        </>
    )
}
