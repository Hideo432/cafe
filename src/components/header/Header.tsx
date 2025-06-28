import "./header.css";
export default function Header() {
  return (
    <header className="header">
      <span>
        <img src="" alt="logo" className="header-logo" />
      </span>
      <nav>
        <ul className="header__nav__list">
          <li className="header__nav__item">
            <span>About us</span>
          </li>
          <li className="header__nav__item">Our Product</li>
          <li className="header__nav__item">Delivery</li>
        </ul>
      </nav>
      <input
        placeholder="Cappuccino"
        className="header__search_bar"
        type="text"
      ></input>
      <span>
        <img src="" alt="cart" />
      </span>
    </header>
  );
}
