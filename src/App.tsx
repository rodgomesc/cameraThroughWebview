import React from 'react';
import Webcam from "react-webcam";

function App() {
  return (
    <>
    <h1 style={{color:'red'}}>webcam test</h1>
   
      <Webcam style={{width: '230px', height: '230px', borderRadius: '50%', border: '1px solid blue;'}}/>
     
    </>
  );
}

export default App;
