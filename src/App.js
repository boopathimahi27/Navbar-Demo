import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import profile  from "./images/smrft-logo.png"

function App() {
  return (

    <div className="App">
      <div class=""> 
  </div> 
    <div className="main">
      <img src={profile} className="smrft_logo" alt="logo" /> 
  </div>

  

      <NavbarComp/>

    </div>
    
  );
}

export default App;
