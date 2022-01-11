import styled from "styled-components";
import UserMenu from "./UserMenu";

const UserMenuModal = () => {
  return (
    <UserMenuModalStyle>
      <UserMenu />
    </UserMenuModalStyle>
  );
};

const UserMenuModalStyle = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: -160px;
  top: 50px;
  width: 240px;
  height: 200px;
  color: #000000;
  background-color: #ffffff;
  box-shadow: rgb(0 0 0 / 8%) 0 2px 4px;
  border-radius: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export default UserMenuModal;
