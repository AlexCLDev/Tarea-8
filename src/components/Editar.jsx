import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {

    const tituloComponente = "Editar Peliculas";
    const guardarEdicion = (e, id) =>{
        e.preventDefault();
        

        // Conseguir el target del evento

        let target = e.target;
        

        //Buscar el indice del objeto de la pelicula a actualizar
        const peliculas_almacenadas = conseguirPeliculas();
        const indice = peliculas_almacenadas.findIndex(peli => peli.id == id);

        // Crear objeto con ese indice
        let peli_actualizada ={
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }

        // Actualizar el elemento con ese indice
        peliculas_almacenadas[indice] = peli_actualizada;

        // Guardar el nuevo array de objetos en el localStorage
        localStorage.setItem("pelis", JSON.stringify(peliculas_almacenadas));

        // Actualizar estado
        setListadoState(peliculas_almacenadas)
        setEditar(0);
    }


  return (
    <div className="edit_form">
        <hr/>
        <h3 className="title">{tituloComponente}</h3>
        <form onSubmit={ e=> guardarEdicion(e, peli.id)}>
            <input type="text"
                   name="titulo"
                   className="titulo_editado"
                   defaultValue={peli.titulo}/>
            
            <textarea
                   name="descripcion"
                   defaultValue={peli.descripcion}
                   className="descripcion_editada"/>
            
            <input type="submit" className="editar" value="actualizar"/>
        </form>
    </div>
  )
}
