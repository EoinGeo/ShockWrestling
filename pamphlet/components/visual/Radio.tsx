import React from "react";
import styled from "styled-components";
import { Text } from "react-native-web";

interface StarRatingProps {
  rating: number; // can be decimal, e.g., 3.5
  maxStars?: number; // default 5
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5 }) => {
  if (rating === -1) {
    return (
      <StyledWrapper>
        <div className="stars">
          <Text>Not applicable</Text>
        </div>
      </StyledWrapper>
    );
  }
  const totalStars = Math.max(Math.ceil(rating), maxStars);
  const stars = Array.from({ length: totalStars }, (_, i) => i + 1);

  return (
    <StyledWrapper>
      <div className="stars">
        {stars.map((star) => {
          let starType: "full" | "half" | "empty" = "empty";

          if (star <= Math.floor(rating)) {
            starType = "full";
          } else if (star === Math.ceil(rating) && rating % 1 !== 0) {
            starType = "half";
          }

          return (
            <svg
              key={star}
              viewBox="0 0 576 512"
              height="1.5em"
              xmlns="http://www.w3.org/2000/svg"
              className={starType}
            >
              <defs>
                <linearGradient id={`halfGrad-${star}`}>
                  <stop offset="50%" stopColor="#ff9e0b" />
                  <stop offset="50%" stopColor="#666" />
                </linearGradient>
              </defs>
              <path
                fill={
                  starType === "full"
                    ? "#ff9e0b"
                    : starType === "half"
                    ? `url(#halfGrad-${star})`
                    : "#666"
                }
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              />
            </svg>
          );
        })}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .stars {
    display: flex;
    justify-content: center;
    gap: 8px;
  }

  svg {
    transition: fill 0.3s ease;
  }

  svg.full path {
    fill: #ff9e0b;
    filter: drop-shadow(0 0 10px rgba(255, 158, 11, 0.7));
  }

  svg.half path {
    filter: drop-shadow(0 0 10px rgba(255, 158, 11, 0.7));
  }

  svg.empty path {
    fill: #666;
  }
`;

export default StarRating;
