import styled from "styled-components";

import theme from "../styles/theme";

const Feature = (props) => {
  const { title, text, icon } = props;
  return (
    <FeatureItem theme={theme}>
      <FeatureIcon>
        <I>{icon}</I>
      </FeatureIcon>
      <div>
        <H4>{title}</H4>
        <p>{text}</p>
      </div>
    </FeatureItem>
  );
};

const FeatureItem = styled.li`
  ${({ theme }) => theme.flexBox.flex()};
  gap: 3em;
  width: calc((100% - 2em) / 2);
  margin-bottom: 2em;
  @media ${({ theme }) => theme.device.tabletPortrait} {
    width: 100%;
    margin-bottom: 5em;
    &:last-child {
      margin-bottom: 2em;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    display: block;
    width: 100%;
    margin-bottom: 4em;
    &:last-child {
      margin-bottom: 2em;
    }
  }
`;

const FeatureIcon = styled.span`
  ${({ theme }) => theme.flexBox.flex("row", "center", "center")};
  flex-shrink: 0;
  width: 6em;
  height: 6em;
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border: 2px solid #ddd;
    border-radius: 6px;
    position: absolute;
    top: 50%;
    transform: translateY(-55%) rotate(45deg);
  }
  @media ${({ theme }) => theme.device.desktopWide} {
    width: 7em;
    height: 7em;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 4em;
    height: 4em;
    margin-bottom: 2em;
  }
`;
const I = styled.i`
  color: ${({ theme }) => theme.color.point};
  font-size: 3em;
  position: absolute;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1.6em;
  }
`;

const H4 = styled.h4`
  margin-bottom: 1em;
  font-size: 1.1em;
`;

export default Feature;
