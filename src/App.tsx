import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Gradient from './components/Gradient';
import Rotation from './components/Rotation';


export interface GradientInterface {
  color1: string,
  color2: string,
  color3: string,
  break1: number,
  break2: number,
  break3: number,
  rotation: number
};


const App: React.FC = () => {

const [gradientSettings, setGradientSettings] = useState<GradientInterface>({
  color1: "#f99999",
  color2: '#f55555',
  color3: '#f11111',
  break1: 0,
  break2: 50,
  break3: 100,
  rotation: 180
});


  return (
    <div className="App">
      <Cards  gradientSettings={gradientSettings} setGradientSettings={setGradientSettings} />
      <Rotation setGradientSettings={setGradientSettings}   />
      <Gradient gradientSettings={gradientSettings} />
    </div> 
  );
}

export default App;
