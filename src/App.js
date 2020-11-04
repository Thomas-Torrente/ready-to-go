import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Button from "./components/Button";

function App() {
  const [switch1, setSwitch1] = useState(false);
  // Set changela valeur
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  const displayGo = (switch1, switch2, switch3) => {
    if (switch1 === true && switch2 === true && switch3 === true) {
      return "GO !";
    } else {
      return "No Way !";
    }
  };

  return (
    <>
      <Header />
      <div className="main">
        <div className="btn">
          <Button state={switch1} setState={setSwitch1} />
          <Button state={switch2} setState={setSwitch2} />
          <Button state={switch3} setState={setSwitch3} />
        </div>

        <div>{displayGo(switch1, switch2, switch3)}</div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
