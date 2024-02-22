function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({totalPages,
  currentPage,
  handlePageChange}) {
  let pages = createArrayOfSize(totalPages).map((a,index) => {
    <button data-testid="page-btn" onChange={()=>handlePageChange(index+1)}>{currentPage}</button>;
  });
  return <div>
    {pages} 
  </div>;
}

export default Pagination;
