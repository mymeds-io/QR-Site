import myMedsLogo from './images/myMedsLogo.png'
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="row no-gutters justify-content-between">
            <div className="col-3">
              <img className="img-fluid" src={myMedsLogo} alt="myMedsLogo"/>
            </div>
            <div className="col-5">
              <div className="siteLinks">
                <a href="#">Home</a>
                <a href="#">Explore</a>
                <a href="#">About Us</a>
              </div>
            </div>
            <div className="col-3">
              <button type="button" className="btn btn-outline-primary">Large button</button>
            </div>
        </div>
    </div>
  );
}

export default App;
