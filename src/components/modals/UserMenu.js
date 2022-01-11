import { Link } from "react-router-dom";
import styled from "styled-components";

const UserMenu = () => {
  return (
    <UserMenuStyle>
      <div>
        <Link to="#">회원 가입</Link>
      </div>
    </UserMenuStyle>
  );
};

const UserMenuStyle = styled.div`
  display: flex;
  border: 1px solid aqua;
  height: 40px;
  padding-left: 12px;
  align-items: center;
  font-size: 14px;
  /* & > div {
    height: 100%;
    vertical-align: center;
  } */

  &:hover {
    background-color: #efefef;
  }
`;

export default UserMenu;
