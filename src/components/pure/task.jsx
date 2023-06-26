import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { Levels } from '../../models/levels.enum';




const TaskComponent = ({task,complete, remove }) => {

    useEffect(() => {
        console.log('Created Task');
        return () => {
            console.log(`Task:${task.name} is going to unmount`);
        };
    }, [task]);

    /**
     * Function that returns a Bagde
     * depending on the level of the task
     */
    
    /**function taskLevelBagde(){
        switch (task.level) {
            case Levels.NORMAL:
               return(
               <h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
               </h6>)
               case Levels.URGENT:
                return(
                <h6 className='mb-0'>
                     <span className='badge bg-warning'>
                         {task.level}
                     </span>
                </h6>)
                case Levels.BLOCKING: 
                    return(
                    <h6 className='mb-0'>
                         <span className='badge bg-danger'>
                             {task.level}
                         </span>
                    </h6>)
        
            default:
                break;
        }
    }*/



    return (

        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>

            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            
                {/*taskLevelBagde()*/}
            
            <td className='align-middle'>
            {/**TODO: Sustituir por Iconos */}
            {task.completed ?
                (<i onClick={()=>complete(task)} className='bi-toggle-on task-action' style={{color:'green',fontWeight:'bold'}}></i>)
                : 
                (<i onClick={()=>complete(task)} className='bi-toggle-off task-action'style={{color:'red'}}></i>)
            }

            <i className='bi-trash task-action' onClick={()=>remove(task)} style={{color:'grey', fontSize:'20px'}}></i>
                
            </td>

        </tr>


       // <div>
        //<h2>
           //  Nombre: {task.name}
         //</h2>
         //<h3>
          //   Descripcion: {task.description}
         //</h3>
         //<h3>
         //    Level : {task.level}
         //</h3>
         //<h4>
         //    This task is : {task.completed ? 'COMPLETED': 'PENDING'} 
        // </h4>
            
        // </div>
    );
};


TaskComponent.propTypes = {
    task:PropTypes.instanceOf(Task).isRequired,
    complete:PropTypes.func.isRequired,
    remove:PropTypes.func.isRequired
};


export default TaskComponent;
