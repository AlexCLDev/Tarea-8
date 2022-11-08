export const GuardarEnStorage = (clave, elemento) =>{

    //Conseguir los elementos que ya tenemos en el Local
    let elementos = JSON.parse(localStorage.getItem(clave));

    //Comprobrar si es un array
    if(Array.isArray(elementos)){
        //Anadir dentro del array un elemento nuevo
        elementos.push(elemento);
    }else{
        //Crear un array
        elementos = [elemento];
    }

    // Guardar en el localstorage
    localStorage.setItem(clave, JSON.stringify(elementos))

    // Devolver Objeto
    return elemento;


}