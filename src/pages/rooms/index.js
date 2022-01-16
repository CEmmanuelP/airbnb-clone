import styled from "styled-components";
import RoomHeader from "../../components/rooms/Header";

const RoomPage = () => {
  return (
    <>
      <RoomPageStyle>
        <RoomHeader />
      </RoomPageStyle>
    </>
  );
};

const RoomPageStyle = styled.div`
  border: 1px solid orange;
`;

export default RoomPage;
