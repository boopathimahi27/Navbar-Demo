import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';

function App() {
  return (

    <div className="App">
      <div class="row h-25 d-inline-block"> 
  </div>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#"></a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="App.js">Profile</a></li>
      <li><a href="App.js">Patients</a></li>
    </ul>
  </div>
</nav>
  

      <NavbarComp/>

    </div>
    
  );
}

export default App;
