import {Link} from "react-router-dom"

function Header() {
  return (
  <header className="header">
    <Link className="header__logo" to="/" target="_self" rel="noopener"></Link>
  </header>
  )
}

export default Header
