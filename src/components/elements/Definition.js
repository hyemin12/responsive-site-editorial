import styled from "styled-components";
import theme from "../../styles/theme";

const Definition = ({ title, text }) => {
  return (
    <Wrapper>
      <H4 theme={theme}>{title}</H4>
      <P theme={theme}>{text}</P>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-bottom: 1em;
`;
const H4 = styled.h4`
  font-family: "Open Sans", sans-serif;
  color: ${({ theme }) => theme.color.grey};
`;
const P = styled.p`
  margin-left: 1.5em;
`;
export default Definition;
