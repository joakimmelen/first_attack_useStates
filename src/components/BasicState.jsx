import React, {useState} from 'react'
import styles from "./BasicState.module.css"

function BasicState() {

    const [count, setCount] = useState(0);

    function handleClick () {
        setCount(count + 1)
    }

    return (
    
      <div>
        <p>You clicked {count} times</p>
        <button className={styles.button} onClick={handleClick}>
          Click me
        </button>
      </div>
  )
}

export default BasicState