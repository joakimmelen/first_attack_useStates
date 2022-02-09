import React, {useState} from 'react'
import ArrayState from './components/ArrayState';
import BasicState from './components/BasicState';
import Counter from './components/Counter';
import ObjectState from './components/ObjectState';
import Parent from './components/Parent';
import MonthlyActTrack from "./components/MonthlyActTrack"

const components = ["basic", "object", "array", "parent", "counter", "MonthlyActTrack"];


function App() {
  const [selected, setSelected] = useState("MonthlyActTrack");

  function nextComponent() {
    const currentIndex = components.indexOf(selected);
    const nextIndex = currentIndex === components.length - 1 ? 0 : currentIndex + 1;

    const nextComponent = components[nextIndex];
    setSelected(nextComponent);

  }


  return (
  <>
    <button onClick={nextComponent}>Nästa</button>

    {selected === "MonthlyActTrack" ? <MonthlyActTrack /> : null}
    {selected === "basic" ? <BasicState /> : null}
    {selected === "object" ? <ObjectState /> : null}
    {selected === "array" ? <ArrayState /> : null}
    {selected === "parent" ? <Parent /> : null}
    {selected === "counter" ? <Counter /> : null}
  
   {/* <Parent />
   <Counter />
   <ArrayState />
   <BasicState />
   <ObjectState /> */}


    </>
  );
}

export default App;
