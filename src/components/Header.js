function Header() {
  return (
  <header className="header">
    <a className="header__logo" href="/" target="_self" rel="noopener"></a>
{/* Использовать Link не получилось, т.к. при отправке на ревью выдает ошибку Cannot find module 'react-router-dom'.
Но локально всё было подключено и работало. */}
  </header>
  )
}

export default Header
