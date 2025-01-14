// src/Table.jsx
function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
}
console.log("table line 12")
function TableBody(props) {

  console.log("table line 15")

  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
      <td>{row.name}</td>
      <td>{row.job}</td>
      <td>
        <button onClick={() => props.removeCharacter(index)}>
          Delete
        </button>
      </td>
    </tr>
    );
   }
  );
  return (
      <tbody>
        {rows}
       </tbody>
   );
}
console.log("table line 40")

function Table(props) {
  console.log("table line 43")

  return (
    <table>
      <TableHeader />
      <TableBody
        characterData={props.characterData}
        removeCharacter={props.removeCharacter}
        
      />
    </table>
  );
}
export default Table;