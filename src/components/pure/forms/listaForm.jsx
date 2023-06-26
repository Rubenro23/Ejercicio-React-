import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../../models/task.class';

const ListaForm = ({crear}) => {

    const nombreRef = useRef ('');
    const ageRef = useRef();
    const descripcionRef = useRef('');

    function newContact (e){
        e.preventDefault();
        const newTask = new Task(
            nombreRef.current.value,
            ageRef.current.value,
            descripcionRef.current.value,
            false,
        );
        crear(newTask);
    }
    
    return (
        <form onSubmit={newContact} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
        <input ref={nombreRef}  id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task Name'/>
        <input ref={descripcionRef}  id='inputDescription' type='text' className='form-control form-control-lg' required  placeholder='Task Description'/>
        <input ref={ageRef}  id='inputAge' type='number' className='form-control form-control-lg' required  placeholder='Task Age'/>
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>Crear</button>
        </form>
    );
}

ListaForm.protoTypes = {
    crear: PropTypes.func.isRequired
}
export default ListaForm;
