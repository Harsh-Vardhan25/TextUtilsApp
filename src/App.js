import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextBox from './Components/TextBox';
import Alert from './Components/Alert';

import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';



function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar var1="TextUtils" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar /> */}
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>

            <Route exact path="/about" element={ }>
             
            </Route>
            <Route exact path="/" element={}>
              
            </Route>

          </Routes> */}
          
          <TextBox showAlert={showAlert} heading="Enter the text here" mode={mode} />
        </div>
      {/* </Router> */}

    </>
  );
}

export default App;
