import React from "react";
import "./App.css";
import Main from "./Home/Main";
import Header from './Header/Header'

/*API Key (v3 auth):     
   2751c7f58d7dfad4c8c6ab90054ef0ed */
/*Example API Request:
   https://api.themoviedb.org/3/movie/550?api_key=2751c7f58d7dfad4c8c6ab90054ef0ed */
/*API Read Access Token (v4 auth):      
   eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzUxYzdmNThkN2RmYWQ0YzhjNmFiOTAwNTRlZjBlZCIsInN1YiI6IjVmNTQ1ZDQ4ZWY5ZDcyMDAzNGE1YjdkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QsxRsJBCeEJ684P8wlgvfbYtSCGe6Wy45uSVR4YIXD0 */

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
