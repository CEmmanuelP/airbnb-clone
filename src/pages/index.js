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
            <div className="items">
              <div className="item1">
                <span className="item1-desc">
                  여행 중 만나는
                  <br /> 이색적인 즐길거리
                </span>
                <div className="item1-link-div">
                  <Link to="#" className="item1-link">
                    체험
                  </Link>
                </div>
              </div>
              <div className="item2">
                <span className="item1-desc">
                  집에서 만나는
                  <br /> 다양한 즐길거리
                </span>
                <div className="item2-link-div">
                  <Link to="3" className="item2-link">
                    온라인 체험
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="superhost">
          <div className="superhost-wrapper">
            <div className="superhost-img-div">
              <span>
                호스팅에 관해
                <br /> 궁금하신 점이 <br />
                있나요?
              </span>
              <div className="superhost-link-div">
                <Link to="#" className="superhost-link link">
                  슈퍼호스트에게 물어보세요
                </Link>
              </div>
            </div>
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
    padding-bottom: 30px;
  }

  .link {
    padding: 0.7rem 1.2rem 0.7rem 1.2rem;
    background-color: #ffffff;
    color: #000000;
    font-size: 0.9rem;
    border-radius: 8px;
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
        width: 140px;
        border-radius: 100px;
        text-align: center;
        position: absolute;
        left: 45%;
        top: 90%;

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

  .experience {
    background: #ffffff;

    .experience-wrapper {
      width: 100%;
      max-width: 1600px;
      margin: 0 auto;
      padding-bottom: 30px;

      .items {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        color: white;

        .item1 {
          height: 700px;
          padding: 80px;
          background-image: url(https://a0.muscache.com/im/pictures/c2adcb16-6c3f-4041-86a1-afa9c303c500.jpg?im_w=720);
          background-size: cover;
          font-weight: 700;
          font-size: 2.8rem;
          line-height: 3rem;
          border-radius: 16px;

          .item1-link-div {
            .item1-link {
              padding: 0.7rem 1.2rem 0.7rem 1.2rem;
              background-color: #ffffff;
              color: #000000;
              font-size: 0.9rem;
              border-radius: 8px;
            }
          }
        }

        .item2 {
          height: 700px;
          padding: 80px;
          background-image: url(https://a0.muscache.com/im/pictures/c1bdf53f-2a19-4529-aa9b-1b0e6bd8d0ee.jpg?im_w=720);
          background-size: cover;
          font-weight: 700;
          font-size: 2.8rem;
          line-height: 3rem;
          border-radius: 16px;

          .item2-link-div {
            .item2-link {
              padding: 0.7rem 1.2rem 0.7rem 1.2rem;
              background-color: #ffffff;
              color: #000000;
              font-size: 0.9rem;
              border-radius: 8px;
            }
          }
        }
      }
    }
  }

  .superhost {
    background: #ffffff;
    padding-top: 2rem;
    padding-bottom: 2rem;

    .superhost-wrapper {
      width: 100%;
      max-width: 1600px;
      margin: 0 auto;
      padding-bottom: 30px;
      color: #ffffff;

      .superhost-img-div {
        height: 700px;
        padding: 80px;
        background-image: url(https://a0.muscache.com/im/pictures/0528b0f7-4c0c-47bc-9786-d91454f531ba.jpg?im_w=1200);
        background-size: cover;
        font-weight: 900;
        font-size: 4.8rem;
        line-height: 5rem;
        border-radius: 16px;

        .superhost-link-div {
          margin-top: 20rem;
        }
      }
    }
  }
`;

export default IndexPage;
