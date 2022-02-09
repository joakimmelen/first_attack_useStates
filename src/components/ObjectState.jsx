import React, {useState} from 'react'
import styles from "./ObjectState.module.css"

const names = ["Kerstin", "Karen", "Albert", "Bob", "Macke", "Joakim", "Tali", "Commander Shepard"];

function ObjectState() {

   const [guest, setGuest] = useState({
      food: "Nuggets",
      drink: "Moet",
      table: 7,
      server: getRandomServer()
   })

   function getRandomServer() {
     return names[Math.floor(Math.random() * names.length)];
     
   }
  //  const [drink, setDrink] = 
  //  const [table, setTable] = 
  //  const [server, setServer] = 
  function handleClick() {
    setGuest ((prevGuest) => {
      return { 
        ...prevGuest,
        server: getRandomServer() 
      }

    })
  }

    return (
      <div>
        <p>Server: {guest.server}, food: {guest.food}</p>
        <h2>Servers removed: </h2>
        <button className={styles.switchServer}onClick={handleClick}>Remove {guest.server}</button>
      </div>
    
  )
}

export default ObjectState