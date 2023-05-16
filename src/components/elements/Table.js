import styled from "styled-components";

const Table = ({ type, thead, children }) => {
  console.log(thead);
  return (
    <TableTag type={type}>
      <Thead>
        <tr>
          {thead &&
            thead.map((text, idx) => (
              <HeadTD className={idx === 2 && "wide"}>{text}</HeadTD>
            ))}
        </tr>
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
  font-family: "Open Sans", sans-serif;
  font-size: 0.9em;
`;
const Thead = styled.thead`
  display: block;
  border-bottom: 2px solid #ccc;
`;
const HeadTD = styled.td`
  padding-right: 1em;
  font-weight: bold;
  text-transform: capitalize;
  &.wide {
    width: 100%;
  }
`;
const Tbody = styled.tbody`
  &:nth-child(odd) {
  }
  &:nth-child(even) {
  }
`;
export default Table;
