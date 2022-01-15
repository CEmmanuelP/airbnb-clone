import styled from "styled-components";

const UserMenu = ({ menu }) => {
  return (
    <UserMenuStyle>
      <div>{menu}</div>
    </UserMenuStyle>
  );
};

const UserMenuStyle = styled.div`
  display: flex;
  height: 50px;
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
