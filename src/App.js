import './App.css';
import NavBarComponent from './components/NavBar/NavBarComponent';

function App() {
  return (
    <div className="App">
        <NavBarComponent />
        <div className="signInContent">
          <div className="row no-gutters align-items-center justify-content-center" style={{transform: "translateY(25%)"}}>
            <div className="col-7 col-md-4 col-lg-3">
              <div className="signInContainer">
                
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
