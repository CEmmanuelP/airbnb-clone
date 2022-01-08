import styled from "styled-components";
import { TextMiddle } from "./styled";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderStyle>
      <div className="div-header">
        <div className="div-header-logo">
          <Link to="/" className="div-header-logo-link"></Link>
        </div>
        <div className="div-header-search-input"></div>
        <div className="div-header-menus"></div>
      </div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  border: 1px solid red;
  height: 5rem;
  left: 0;
  width: 100%;
  z-index: 100;
  position: absolute;
  color: #ffffff;

  .div-header {
      border: 1px solid blue;
      padding-left: 5rem;
      padding-right: 5rem;
      display: flex;
      height: 100%;
      width: 100%
      position: relative;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto
  }
`;

export default Header;
