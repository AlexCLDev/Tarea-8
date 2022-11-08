import './Menu.css'
import React, {useEffect, useState} from 'react'
import { Editar } from './Editar';
import { Link } from 'react-router-dom';
import { Crear } from './Crear';

export const Home = ({listadoState, setListadoState}) => {
    const [editar, setEditar] = useState(0);
    
    useEffect(() => {
        conseguirPeliculas();
    }, [])

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));

        setListadoState(peliculas);

        return peliculas;

    }  

    const borrarPeli = (id) =>{
        // Conseguir peliculas almacenadas
        let pelis_almacenadas = conseguirPeliculas();

        // Filtrar esas peliculas para que elimine la que no quiero
        let nuevo_listado_peliculas = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));

        // Actualizar estado del listado
        setListadoState(nuevo_listado_peliculas)
        // Actualizar los datos en el localStorage
        localStorage.setItem("pelis", JSON.stringify(nuevo_listado_peliculas));
        

    }


    return (
        <>
        <Link to="/page/agregar" className='button'>Agregar</Link>
       
        <div className='content'>
            {listadoState != null ?
                listadoState.map (peli =>{
                    return(
                    <article key={peli.id} className="peli-item">
                    <h3 className="title">{peli.titulo}</h3>
                    <p className="description">{peli.descripcion}</p>

                    <button className="button edit" onClick={()=> setEditar(peli.id)}>Editar</button>
                    <button  className="button delete" onClick={() =>borrarPeli(peli.id)}>Eliminar</button>

                    {/*Aparece formulario de Editar */}
                    {editar == peli.id && (
                        <Editar peli ={peli}
                        conseguirPeliculas={conseguirPeliculas}
                        setEditar={setEditar}
                        setListadoState={setListadoState}/>
                    )}
                </article>
                    );
                })

            :<h2>No hay vivencias para mostrar</h2>
        }

    </div>
    </>
    )
}
