import React from 'react'
import ActivityBlock from './ActivityBlock'

function InputBox(props) {

    function handleChange(event) {
        const value = event.target.value;
        props.setInputText(value);
    }

    // function handleClick() {
      
    // }
    // function onAdd() {
    //     setActivity((prevActivity) => {
    //         return [...prevActivity, input]
    //     })
    // }
  return (
    <div>
        <p>{props.inputText}</p>
        <input type="text" onChange={handleChange} value={props.inputText} />
        <button onClick={props.createActivity} >Add Activity</button>
    </div>
  )
}

export default InputBox