import "./header.css";
export default function Header() {
  return (
    <header className="header">
      <span>
        <img
          src="/src/assets/icons/logo.svg"
          alt="logo"
          className="header-logo"
        />
      </span>
      <nav>
        <ul className="header__nav__list">
          <li className="header__nav__item">
            <span style={{ color: "orange" }}>About us</span>
          </li>
          <li className="header__nav__item">Our Product</li>
          <li className="header__nav__item">Delivery</li>
        </ul>
      </nav>
      <div style={{ display: "flex", gap: 24 }}>
        <input
          placeholder="Cappuccino"
          className="header__search_bar"
          type="text"
        ></input>
        <span className="header__card-img__container">
          <img
            className="header__card-img"
            src="/src/assets/icons/cart-black.png"
            alt="cart"
          />
        </span>
      </div>
    </header>
  );
}
