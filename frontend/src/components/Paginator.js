import Pagination from 'react-bootstrap/Pagination';

const paginatorStyle = {
  backgroundColor: "#ebebeb",
  height: 70,
};

const Paginator = ({paging}) => {
  const currentPage = paging.page;
  const maxPageLimit = 10;
  const minPageLimit = 0;
  let totalPages = paging?.paging?.total - 1;

  // build page numbers list based on total number of pages
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePrevClick = () => {
    paging.setPage(currentPage - 1);
  }

  const handleNextClick = () => {
    paging.setPage(currentPage + 1);
  }

  const handlePageClick = (e) => {
    paging.setPage(Number(e.target.id));
  }

  const pageNumbers = pages.map(page => {
    if (page <= maxPageLimit && page > minPageLimit) {
      return <Pagination.Item
                key={page} id={page}
                onClick={handlePageClick}
                className={currentPage === page ? 'active' : null}>
                  {page}
             </Pagination.Item>
    } else {
      return null;
    }
  }
  );

  // page ellipses
  let pageIncrementEllipses = null;
  if (pages.length > maxPageLimit) {
    pageIncrementEllipses = <Pagination.Ellipsis onClick={handleNextClick} />
  }
  let pageDecremenEllipses = null;
  if (minPageLimit >= 1) {
    pageDecremenEllipses = <Pagination.Ellipsis onClick={handlePrevClick} />
  }

  return (
    <Pagination className="d.flex justify-content-center p-3" style={paginatorStyle}>
      <Pagination.Prev onClick={handlePrevClick} disabled={currentPage === pages[0]} />
      {pageDecremenEllipses}
      {pageNumbers}
      {pageIncrementEllipses}
      <Pagination.Next onClick={handleNextClick} disabled={currentPage === pages[pages.length - 1]} />
    </Pagination>
  )
}

export default Paginator;
