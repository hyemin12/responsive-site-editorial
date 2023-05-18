import styled from "styled-components";
import theme from "../../styles/theme";

const Checkbox = ({ check, id }) => {
  return (
    <>
      <Label>
        <Input
          type="checkbox"
          id={`checkbox-${id}`}
          name={id}
          theme={theme}
          defaultChecked={check && "checked"}
        />
        <Span htmlFor={`checkbox-${id}`}>{id}</Span>
      </Label>
    </>
  );
};
const Label = styled.label`
  ${({ theme }) => theme.flexBox.flex()}
  gap:10px;
  color: ${({ theme }) => theme.color.grey};
  cursor: pointer;
`;
const Input = styled.input`
  background-color: #fff;
  border: 1px solid rgba(210, 215, 217, 0.75);
  border-radius: 6px;
  vertical-align: middle;
  appearance: none;
  &:checked {
    background-color: ${({ theme }) => theme.color.default};
    border-color: ${({ theme }) => theme.color.default};
    position: relative;
    &::before {
      content: "";
      width: 29px;
      height: 29px;
      background-image: url("data:image/svg+xml,%3Csvg stroke='%23fff' fill='%23fff' stroke-width='0' viewBox='0 0 512 512' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
      background-repeat: no-repeat;
      color: #fff;
      position: absolute;
      top: 77%;
      left: 77%;
      transform: translate(-50%, -50%);&:focus {
        border: 1px solid ${({ theme }) => theme.color.point};
      }
    }
`;
const Span = styled.span``;
export default Checkbox;
