import "./footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p
          style={{
            color: "#ffffff",
            fontSize: 32,
            letterSpacing: 0.4,
            fontWeight: 600,
            marginBottom: 26,
          }}
        >
          Subscribe to get 50% discount price
        </p>
        <div style={{ position: "relative" }}>
          <input
            style={{
              width: 486,
              height: 54,
              borderRadius: 25,
              border: "none",
              fontSize: 16,
              paddingLeft: 24,
              outline: "none",
            }}
            placeholder="Email address"
            type="text"
          />
          <button className="footer__btn">Order now</button>
        </div>
      </div>
    </footer>
  );
}
