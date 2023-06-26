import React, { useState, useEffect } from "react";
import { Task } from "../../../models/task.class";
import { Levels } from "../../../models/levels.enum";
import TaskComponent from "../task";
import TaskForm from "../forms/taskForm";


const TaskListComponent = () => {
  const defaultTask1 = new Task("Rubén", "Rodriguez Ortiz", true);
  {/*const defaultTask2 = new Task("Rubén", "Description2", false, Levels.URGENT);
const defaultTask3 = new Task("Rubén", "Description3", true, Levels.BLOCKING);*/}

  //Estado del componente
  const [tasks, setTasks] = useState([
    defaultTask1,
    {/*defaultTask2,
    defaultTask3,*/}
  ]);
  const [loading, setLoading] = useState(true);

  //Control del ciclo de vida del componente
  useEffect(() => {
    console.log("Task State has been modified");
    setLoading(false);
    return () => {
      console.log("TaskList component is going to unmount...");
    };
  }, [tasks]);

  function completeTask (task){
    console.log('Complete this Task:',task);
    const index =tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed =!tempTasks[index].completed;
    //We update the state of the component and it will update the
    //Iteration of the tasks in order to show the task updated
    setTasks(tempTasks);
  }

  function removeTask(task){
    console.log('Delete this Task:',task);
    const index =tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index,1);
    setTasks(tempTasks);
  }
  function addTask (task){
    console.log('Push this Task:',task);
    const index =tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  }
  

  return (
    <div>
      <div className="col-12">
        <div className="card">
          <div className="card-header p-3">
            <h5>Tus Contactos:</h5>
          </div>
          {/**CARD Body (content) */}

          <div
            className="card-body"
            data-mbd-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellidos</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => {
                  return (
                    <TaskComponent 
                    key={index} 
                    task={task}
                    complete={completeTask}
                    remove={removeTask}
                    
                    >
                    </TaskComponent>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          <TaskForm add={addTask}></TaskForm>
        </div>
      </div>
      {/*TODO: Aplicar un For/Map para renderizar un a lista */}

      {/*<TaskComponent task={defaultTask}></TaskComponent>*/}
    </div>
  );
};

export default TaskListComponent;
