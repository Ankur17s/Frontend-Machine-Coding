import { useState } from "react";

const data = Array.from({ length: 43 }, (_, idx) => `Item no. ${idx + 1}`);
const rowperpage = 5;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPage = Math.ceil(data.length / rowperpage);
  const startIdx = rowperpage * currentPage;
  const endIdx = startIdx + rowperpage;
  const visibleList = data.slice(startIdx, endIdx);

  return (
    <div>
      <h2>Pagination</h2>
      {visibleList.map((item) => (
        <div key={item} style={{ margin: 5 }}>{item}</div>
      ))}
      <div >
        <button
          disabled={currentPage === 0}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>
        <span>
          Page {currentPage + 1} of {totalPage}
        </span>
        <button
          disabled={totalPage === currentPage + 1}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
