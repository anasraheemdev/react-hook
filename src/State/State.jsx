import React, { useState } from "react";

const State = () => {
    console.log(useState());
  const chnageTitle = () => {
    title = "New Title";
    console.log(title);
  };
  return (
    <div>
      <h1>{}</h1>
      <button onClick={chnageTitle} className="btn btn-dark">
        Change Title
      </button>
    </div>
  );
};

export default State;
