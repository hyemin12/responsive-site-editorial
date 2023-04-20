import styled from "styled-components";
import Icon from "./elements/Icon";
import theme from "../styles/theme";

const Feature = (props) => {
  console.log(props);
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
  ${({ theme }) => theme.flexBox.flex("row", "start", "start")};
  gap: 3em;
  width: calc((100% - 2em) / 2);
  margin-bottom: 2em;
`;

const FeatureIcon = styled.span`
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
    transform: translateY(-25%) rotate(45deg);
  }
`;
const I = styled.i`
  color: ${({ theme }) => theme.color.point};
  font-size: 3em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0);
`;

const H4 = styled.h4`
  margin-bottom: 1em;
  font-size: 1.1em;
`;

export default Feature;
