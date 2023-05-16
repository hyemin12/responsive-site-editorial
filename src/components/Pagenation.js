import styled from "styled-components";

import DefaultBtn from "./elements/Buttons/DefaultBtn";

import theme from "../styles/theme";

const Pagenation = ({ pageLength, setPage, page }) => {
  // 이전 페이지로 이동(prev button)
  const handlePrev = () => {
    if (page <= 1) {
      return;
    }
    setPage(page - 1);
  };

  // 다음 페이지로 이동(next button)
  const handleNext = () => {
    if (page >= pageLength) {
      return;
    }
    setPage(page + 1);
  };

  // 해당 페이지로 이동(number button)
  const handlePage = (idx) => {
    setPage(idx);
  };

  return (
    <Row theme={theme}>
      <DefaultBtn
        type="button"
        text={"prev"}
        disabled={page === 1 ? true : false}
        onClick={handlePrev}
      />
      <Row theme={theme}>
        {page &&
          Array(pageLength)
            .fill()
            .map((pageN, idx) => (
              <PageNumber
                theme={theme}
                active={page === idx + 1}
                onClick={() => {
                  handlePage(idx + 1);
                }}
              >
                {idx + 1}
              </PageNumber>
            ))}
      </Row>
      <DefaultBtn
        type="button"
        text={"next"}
        disabled={page === pageLength ? true : false}
        onClick={handleNext}
      />
    </Row>
  );
};
const Row = styled.div`
  ${({ theme }) => theme.flexBox.flex()}
  gap: 1em;
`;

const PageNumber = styled.p`
  padding: 0 0.5em;
  border-radius: 4px;
  color: ${({ theme }) => theme.color.point};
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 0.8em;
  cursor: pointer;
  ${({ active, theme }) =>
    active && `background-color:${theme.color.point}; color:#fff; `}
`;

export default Pagenation;
