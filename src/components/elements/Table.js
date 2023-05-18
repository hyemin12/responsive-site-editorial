import styled from "styled-components";

const Table = ({ type, thead, children }) => {
  return (
    <TableTag>
      <thead>
        {thead &&
          thead.map((text, idx) => (
            <HeadTh className={idx === 1 && "wide"}>{text}</HeadTh>
          ))}
      </thead>
      <Tbody type={type}>{children}</Tbody>
      <tfoot>
        <tr>
          <td colspan={2}></td>
          <td>100.00</td>
        </tr>
      </tfoot>
    </TableTag>
  );
};
const TableTag = styled.table`
  width: 100%;
`;

const HeadTh = styled.th`
  text-transform: capitalize;
  &.wide {
    width: 100%;
  }
`;
const Tbody = styled.tbody`
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  // 홀수 줄에만 적용
  tr:nth-child(odd) {
    background-color: rgba(230, 235, 237, 0.25);
  }
  ${({ type }) =>
    type === "alternate" &&
    `border-top: none;
    border-bottom: none;
    td {
    border: 1px solid rgba(210, 215, 217) !important;
    }
  `}
`;
export default Table;
