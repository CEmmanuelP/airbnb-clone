import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/common/footer";
import Header from "../components/common/header";
import { IndexStyle } from "../components/common/styled";
import Card from "../components/home/Card";

const IndexPage = () => {
  return (
    <IndexStyle>
      <Header />
      <Main>
        <div className="intro-wrapper">
          <div className="intro">
            <div className="intro-title">
              <h1>
                에어비앤비가
                <br />
                여행지를 찾아드릴게요!
              </h1>
            </div>
            <div className="intro-button">
              <Link to="#">
                <span className="intro-button-font">유연한 검색</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="tripidea">
          <div className="tripidea-wrapper">
            <h1 className="title">설레는 다음 여행을 위한 아이디어</h1>
            <div className="cards">
              <Card
                img="https://a0.muscache.com/im/pictures/cc5716eb-7454-4ae4-890a-fdcaf6b724be.jpg?im_w=720"
                location="제주도(Jeju)"
                distance="455km 거리"
                color="#d93b30"
              />
              <Card
                img="https://a0.muscache.com/im/pictures/241d2e75-21ed-4b13-bf46-673baf1abc69.jpg?im_w=720"
                location="부산"
                distance="324km 거리"
                color="#cc2d4a"
              />
              <Card
                img="https://a0.muscache.com/im/pictures/99eb5993-4277-4c1e-8db1-b639a96758a0.jpg?im_w=720"
                location="강릉시"
                distance="166km 거리"
                color="#bc1a6e"
              />
              <Card
                img="https://a0.muscache.com/im/pictures/db8167f7-5c57-4684-80ae-4350c73e45ef.jpg?im_w=720"
                location="속초시"
                distance="157km 거리"
                color="#de3151"
              />
            </div>
          </div>
        </div>
        <div className="experience">
          <div className="experience-wrapper">
            <h1 className="title">에어비앤비 체험 둘러보기</h1>
          </div>
        </div>
      </Main>
      <Footer />
    </IndexStyle>
  );
};

const Main = styled.main`
  padding-top: 250px;

  .title {
    font-size: 46px;
    font-weight: 500;
  }

  .intro-wrapper {
    background-color: #000000;
    width: 100%;

    .intro {
      width: 100%;
      max-width: 1600px;
      height: 800px;
      border-radius: 8px;
      margin: 0 auto;
      background-image: url(https://a0.muscache.com/im/pictures/f1502649-e034-40ab-9fed-7992b7d550c6.jpg?im_w=2560);
      background-size: cover;
      margin-bottom: 100px;
      position: relative;

      .intro-title {
        position: absolute;
        text-align: center;
        left: 35%;
        top: 65%;
        color: #ffffff;
        font-size: 52px;
        font-weight: 600;
      }

      .intro-button {
        font-size: 18px;
        font-weight: 600;
        background-color: #ffffff;
        padding: 18px;
        width: 120px;
        border-radius: 100px;
        text-align: center;
        position: absolute;
        left: 45%;
        top: 82%;

        .intro-button-font {
          background: linear-gradient(90deg, #6f019c 0%, #c6017e 135.12%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }

  .tripidea {
    background: #ffffff;

    .tripidea-wrapper {
      width: 100%;
      max-width: 1600px;
      height: 800px;
      margin: 0 auto;
      padding-top: 100px;

      .title {
        padding-bottom: 40px;
      }

      .cards {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
      }
    }
  }
`;

export default IndexPage;
