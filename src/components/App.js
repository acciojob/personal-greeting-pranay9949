
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName] = useState("");
  function paraChange(e){
    setName("Hello " + e.target.value+"!")
    if(e.target.value==""){
      setName("");
    }
  }
  return (
    <div>
        {/* Do not remove the main div */}
       <h1>Enter Your Name</h1>
       <input type="text" onChange={paraChange}></input>
       <p>{name}</p>
    </div>
  )
}

export default App
