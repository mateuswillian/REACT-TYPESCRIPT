import { Movement } from "./Movements";

export interface PartialProps {
    emitMovement: (movement: Movement ) =>  void 
    currencePartial: number
}