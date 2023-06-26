import React, { useState } from 'react';

//Definiendo estilos enconstantes

// ? Estilo para usuario logueado
const loggedStyle = {
    color:'blue'
}
// ? Estilo para usuario no logueado
const unloggedStyle = {
    color:'red',
    fontWeigth:'bold'
}

const GreetingStyled = (props) => {

    const [logged, setLogged] = useState(false);

   

    return (
        <div style={ logged ? loggedStyle : unloggedStyle}>
        {logged ? 
            (<p>Hola {props.name}</p>)
            :
            (<p>Please login</p>)
            }
        
            <button onClick={()=>{
                console.log('Boton pulsado');
                setLogged(!logged);
            }}>
                {logged ? 'Logout' : 'Login'}
            </button>
            
        </div>
    );
}

export default GreetingStyled;
