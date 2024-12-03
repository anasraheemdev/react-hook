import React, { useState } from "react";

const State = () => {    
    const [name,setName] = useState("First Title");

  const chnageTitle = () => {
    if(name == "First Title"){
        setName("Second Title");
    }
    else{
        setName("First Title");
    }
  };
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={chnageTitle} className="btn btn-dark">
        Change Title
      </button>
    </div>
  );
};

export default State;
