import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/pure/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import GreetingStyled from './components/greetingStyled';
import Father from './components/pure/container/father';
import ListaForm from './components/pure/forms/listaForm';
 

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />*/}
        
        {/*<Greeting name="Rubén"></Greeting>*/}
        {/*<GreetingF name="Rubén"></GreetingF>*/}
       
        {/* <Ejemplo1></Ejemplo1>*/}
        {/*<Ejemplo2></Ejemplo2>*/}
       {/*<MiComponenteConContexto></MiComponenteConContexto>*/}
       {/*<GreetingStyled name="Ruben"></GreetingStyled>*/}
       {/**Gestion de eventos  */}
       {/*<Father></Father>*/}
       <TaskListComponent></TaskListComponent>
      {/* <ListaForm></ListaForm>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
