import styled from "styled-components";
import Footer from "../components/common/footer";
import Header from "../components/common/header";
import { IndexStyle } from "../components/common/styled";

const IndexPage = () => {
  return (
    <IndexStyle>
      <Header />
      <Main></Main>
      <Footer />
    </IndexStyle>
  );
};

const Main = styled.main`
  border: 1px solid red;
  background-color: #000000;
  height: 100vh;
`;

export default IndexPage;
