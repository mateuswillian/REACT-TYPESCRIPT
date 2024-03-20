import { faListCheck } from "@fortawesome/free-solid-svg-icons/faListCheck"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './Header.css'

const Header = () => {
  return (
    <header className="container-header">
        <FontAwesomeIcon icon={faListCheck} color="#00B38A" size="2x" />
        <h2>My task manager</h2>

    </header>
  )
}

export default Header

