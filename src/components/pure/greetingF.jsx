import React,{useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    //Breve introduccion a useState
    // const [variable , metodo para actualizarlo]= useState(valro inicial)

    const [age, setAge] = useState(26);

    const birthday = () =>{
        //Actualizar

        setAge(age+1);
    }


        { /* //Restar años
    const años =()=>{
        setAge (age-1);

    }*/}

    
    return (
        <div>
             <h1>
                ¡HOLA {props.name} desde el componente funcional!
                </h1>
               <h2>
                    Tu edad es de :{age}
                </h2>
                <div>
                    <button onClick={birthday}>
                        Cumplir años
                    </button>

                    {/*<button onClick={años}>
                        Restar años
                    </button>*/}
                    
                </div>
        </div>
    );
};


GreetingF.propTypes = {
    name:PropTypes.string,
};


export default GreetingF;
