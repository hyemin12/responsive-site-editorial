import styled from "styled-components";

const BoxText = ({ text }) => {
  return (
    <Wrapper>
      <p>{text}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1.5em;
  border: 1px solid rgba(210, 215, 217);
  border-radius: 6px;
`;

export default BoxText;
