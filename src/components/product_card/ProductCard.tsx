import type { Product } from "../../types";
import "./productCard.css";

export default function ProductCard({
  img,
  title,
  orderCount,
  category,
  description,
  rating,
}: Product) {
  return (
    <div className="coffee_card__container">
      <div className="coffee_card__img__container">
        <img src={img} alt="" className="coffee_card__img" />
        <span
          className="coffee_card__rating"
          style={{ position: "absolute", left: 0 }}
        >
          {rating}
          <img src="/src/assets/icons/star.png"></img>
        </span>
      </div>
      <div style={{ padding: "0px 24px 0  18px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            fontWeight: 700,

            fontFamily: "Segoe UI",
            marginTop: 18,
          }}
        >
          <p style={{ letterSpacing: "1px" }}>{title}</p>
          <p>{orderCount} K</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <div style={{ display: "flex", gap: 24 }}>
            {category ? (
              <>
                <span className="coffee_card__category">{category?.first}</span>
                <span className="coffee_card__category">
                  {category?.second}
                </span>
              </>
            ) : (
              <h2
                style={{
                  width: 161,
                  fontSize: 14,
                  color: "gray",
                  fontWeight: 600,
                }}
              >
                {description}
              </h2>
            )}
          </div>
          <div
            style={{
              backgroundColor: "orange",
              padding: 12,
              borderRadius: "50%",
            }}
          >
            <img
              style={{ width: "18px", height: "17px" }}
              src="/src/assets/icons/cart-white.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
