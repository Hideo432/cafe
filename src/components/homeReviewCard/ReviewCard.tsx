import "./reviewCard.css";
interface Review {
  img: string;
  name: string;
  review: string;
}
export default function ReviewCard({ img, name, review }: Review) {
  return (
    <div className="review_card__container">
      <div className="review_card__img__container">
        <img src={img} alt="" className="review_card__img" />
      </div>
      <span className="review_card__text">
        <p style={{ fontSize: 18, fontWeight: 600 }}>{name}</p>
        <p style={{ fontSize: 14 }}>{review}</p>
      </span>
    </div>
  );
}
