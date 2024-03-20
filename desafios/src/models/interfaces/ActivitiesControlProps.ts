import { Movement } from "./Movements";

export interface ActivitiesControlProps {
    handleSetMovement: (movement: Movement) => void
    balance: number
    
} 