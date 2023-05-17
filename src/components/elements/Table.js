import styled from "styled-components";

const Table = ({ type, thead, children }) => {
  console.log(thead);
  return (
    <TableTag type={type}>
      <Thead>
        {thead &&
          thead.map((text, idx) => (
            <HeadTh className={idx === 1 && "wide"}>{text}</HeadTh>
          ))}
      </Thead>
      <Tbody>{children}</Tbody>
      <tfoot>
        <tr>
          <td></td>
        </tr>
      </tfoot>
    </TableTag>
  );
};
const TableTag = styled.table`
  width: 100%;
`;
const Thead = styled.thead`
  border-bottom: 2px solid #ccc;
`;

const HeadTh = styled.th`
  text-transform: capitalize;
  &.wide {
    width: 100%;
  }
`;
const Tbody = styled.tbody`
  border-bottom: 2px solid #ccc;
  // 홀수 줄에만 적용
  tr:nth-child(odd) {
    background-color: rgba(230, 235, 237, 0.25);
  }
`;
export default Table;
