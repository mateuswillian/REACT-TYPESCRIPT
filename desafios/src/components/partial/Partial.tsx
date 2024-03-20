import React, {useState} from "react"
import { PartialProps } from "../../models/interfaces/PartialProps"
import "./Partial.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faForward } from "@fortawesome/free-solid-svg-icons"

const Partial = ({emitMovement, currencePartial}: PartialProps) => {
  return (
    <div className="partial-container">
        <div className="partial-card">
            <header className="partial-header">
                <FontAwesomeIcon icon={faForward} color="#00b38a" size="2x" />
                <h2>Atividades</h2>
            </header>
            
        </div>      
    </div>
  )
}

export default Partial
