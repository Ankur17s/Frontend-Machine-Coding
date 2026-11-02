import { useState } from "react";

const sampleData = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 22 },
  { id: 4, name: "David", age: 28 },
  { id: 5, name: "Eve", age: 27 },
  { id: 6, name: "Frank", age: 33 },
  { id: 7, name: "Grace", age: 24 },
  { id: 8, name: "Hank", age: 26 },
  { id: 9, name: "Ivy", age: 21 },
  { id: 10, name: "Jack", age: 29 },
  { id: 11, name: "Emma", age: 24 },
  { id: 12, name: "Oliver", age: 32 },
  { id: 13, name: "Sophia", age: 27 },
  { id: 14, name: "Liam", age: 30 },
  { id: 15, name: "Ava", age: 22 },
  { id: 16, name: "Noah", age: 35 },
  { id: 17, name: "Mia", age: 26 },
  { id: 18, name: "Lucas", age: 28 },
  { id: 19, name: "Isabella", age: 31 },
  { id: 20, name: "Ethan", age: 25 },
];
const PAGE_SIZE = 5;
const headers = Object.keys(sampleData[0]);

const DataTable = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(PAGE_SIZE);

  const totalPage = Math.ceil(sampleData.length / rowPerPage);

  const handleRowPerPage = (e) => {
    setRowPerPage(+e.target.value);
    setCurrentPage(0);
  };

  const startIdx = rowPerPage * currentPage;
  const endIdx = startIdx + rowPerPage;
  const visibleData = sampleData.slice(startIdx, endIdx);

  return (
    <div style={{ width: "70%" }}>
      <h2>Data Table</h2>

      <table border={1}>
        <thead>
          <tr>
            {headers.map((head) => (
              <th key={head}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visibleData.map((row) => (
            <tr key={row.id}>
              {headers.map((col) => (
                <td key={col}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <button
            disabled={currentPage === 0}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>
          <span>
            {currentPage + 1} of {totalPage}
          </span>
          <button
            disabled={currentPage + 1 === totalPage}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
        <select value={rowPerPage} onChange={handleRowPerPage}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>
    </div>
  );
};

export default DataTable;
