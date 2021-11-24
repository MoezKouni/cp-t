import StarRatingComponent from "react-star-rating-component";
import Button from "../Button/Button";
import "./Card.css";

export default function Card({ theme }: ThemeI) {
  return (
    <div className="card px-3">
      <div className="card_header">
        <a href={theme.link} target="_blank" rel="noreferrer">
          <img src={theme.imgURL} alt="theme" />
        </a>
        <Button type="primary" className="preview-btn">
          Live Preview
        </Button>
      </div>
      <div className="card_footer d-flex justify-content-between flex-wrap">
        <div>
          <a href={theme.link} target="_blank" rel="noreferrer">
            {theme.title}
          </a>
          <p className="mb-0 text-muted">{theme.category}</p>
        </div>
        <div>
          <p className="mb-0 price">${theme.price}</p>
          <p className="mb-0">
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={theme.rate}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
