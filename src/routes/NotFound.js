import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import theme from "../styles/theme";

import PrimaryBtn from "../components/elements/Buttons/PrimaryBtn";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Contanier theme={theme}>
      <div>
        <Logo theme={theme}>
          <span>Editorial</span> by HTML5 UP
        </Logo>
        <H2>원하시는 페이지를 찾을 수 없습니다.😢</H2>
        <H4>
          잘못된 경로이거나 알 수 없는 오류가 발생하였습니다. <br />
          홈화면으로 이동하시겠습니까?
        </H4>
        <PrimaryBtn
          text={"이동하기"}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </Contanier>
  );
};
const OpenSans = css`
  font-family: "Open Sans", sans-serif;
`;
const Contanier = styled.div`
  padding: 3em 5em;
  height: 100vh;
  ${({ theme }) => theme.flexBox.flex("column", "center", "center")};
  text-align: center;
`;
const Logo = styled.div`
  display: inline-block;
  padding: 0.25em 0.5em;
  margin-bottom: 1em;
  border-bottom: 3px solid ${({ theme }) => theme.color.point};

  font-size: 1.2em;
  font-weight: 400;
  text-decoration: none;
  color: ${({ theme }) => theme.color.grey};

  span {
    color: ${({ theme }) => theme.color.default};
    font-weight: 700;
    transition: 0.4s;
  }

  @media ${({ theme }) => theme.device.desktopWide} {
    font-size: 1.6em;
  }
`;
const H2 = styled.h2`
  ${OpenSans}
`;
const H4 = styled.h4`
  ${OpenSans}
`;

export default NotFound;
