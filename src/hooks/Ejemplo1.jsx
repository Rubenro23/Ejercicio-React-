/**
 *Ejemplo de uso del Hook useState
 *
 * Crear un componente de tipo funcion y acceder a su estado
 * privado a traves de un hook y , ademas, poder modificarlo
 */

 import React,{useState} from 'react';
 
 const Ejemplo1 = () => {
    //Valor inicial para una contador
    const valorInicial = 0;

    //Valor inicial para una persona

    const personaInicial = {
        nombre:'Ruben',
        email:'ruben@gmail.com'
    }

    /**
     * Queremos que el VALORINICIAL y PERSONAINICIAL sean
     * parte del estado del componente para asi poder gestionar su cambio
     * y que este se vea reflejado en la vista del componente
     */

    const [contador, setContador] = useState(valorInicial);

    const [persona, setPersona] = useState(personaInicial);

    /**
     * Funcion para actualizar el estado privado que contiene
     * el contador
     */

    function incrementarContador (){
        // ? funcionParaCambiar (nuevoValor)
        setContador(contador+1);
    }

    function actualizarPersona (){
        setPersona(
           { 
            nombre:'Jose',
            email:'jose@gmail.com'
            }
        )
    }




    return (
        <div>
            <h1>***Ejemplo de useState ()*** </h1>
            <h2>
                Contador : {contador}
            </h2>

            <h2> Datos de la Persona:  </h2>
            <h3>Nombre:{persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>
            <div>
                <button onClick={incrementarContador}>Incrementar Contador</button>
                <button onClick={actualizarPersona}>Actualizar persona</button>
            </div>
        </div>
    );
 }
 
 export default Ejemplo1;
 