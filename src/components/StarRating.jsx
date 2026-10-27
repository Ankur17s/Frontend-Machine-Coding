import { useState } from "react";

const STAR_COUNT = 5;

const StarRating = () => {
  const [ratings, setRatings] = useState(0);
  const stars = Array.from({ length: STAR_COUNT }, (_, idx) => idx + 1);

  return (
    <div>
      <h2>Star Rating</h2>
      <div style={{ marginTop: 20 }}>
        {stars.map((star) => (
          <span
            style={{
              fontSize: 42,
              margin: 4,
              cursor: "pointer",
              color: star <= ratings ? "gold" : "",
            }}
            onClick={() => setRatings(star)}
          >
            *
          </span>
        ))}
      </div>
      <button onClick={() => setRatings(0)} style={{padding: '5px 10px'}}>Reset</button>
    </div>
  );
};

export default StarRating;
