
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Movement } from './models/interfaces/Movements'


function App() {
  const [currentPartial, setCurrentPartial] = useState (0)
  const [currentActivities, setCurrentActivities] = useState (0)
  const [movementsItems, setMovementsItems] = useState <Array<Movement>>([])

  const setNewMovement = (movement: Movement) => { 
    if (movement) {  
      setMovementsItems((prevMovements) => {
        const movements = [...prevMovements]
        movements.unshift({
          name: movement.name,
          value: movement.value,
          type: movement.type,
          id: Math.random().toString(),
        })
        return movements
      })

      movement.type === 'Input' && 
      setCurrentPartial((prevPartial) => prevPartial + Number(movement.value))

      if (movement.type === 'Output') {
        setCurrentExpenses((prevExpenses) => prevExpenses + Number(movement.value))

        currentPartial > 0 && setCurrentPartial ( (prevPartial) => prevPartial - Number(movement.value) )
      }
    }
  }

  return (
    <>
    <Header />
    </>
  )
}

export default App
