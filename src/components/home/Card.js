import styled from "styled-components";

const Card = ({ img, location, distance, color }) => {
  return (
    <>
      <CardStyle color={color}>
        <div className="img-wrapper">
          <img src={img} alt="img" width="100%" height="100%" className="img" />
        </div>
        <div className="info">
          <div className="location">{location}</div>
          <div className="distance">{distance}</div>
        </div>
      </CardStyle>
    </>
  );
};

const CardStyle = styled.div`
  border-radius: 10px;
  width: 382px;

  .img-wrapper {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    width: 382px;
    height: 254px;

    .img {
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
    }
  }

  .info {
    padding: 15px;
    padding-top: 30px;
    color: #ffffff;
    background-color: ${(props) => props.color};
    height: 200px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;

    .location {
      font-weight: 500;
      font-size: 37px;
      margin-bottom: 12px;
    }

    .distance {
      font-size: 18px;
      font-weight: 300;
    }
  }
`;

export default Card;
