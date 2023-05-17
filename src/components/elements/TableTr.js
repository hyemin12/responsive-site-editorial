const TableTr = ({ data }) => {
  if (!data) return;
  return (
    <tr>
      {data && data.map((text, idx) => <td key={`${idx}-${text}`}>{text}</td>)}
    </tr>
  );
};

export default TableTr;
