import { Pagination } from 'antd'

import './moviePagination.css'

function MoviePagination({ currentPage, setCurrentPage, totalPages }) {
  const onChangePage = (page) => setCurrentPage(page)

  return (
    <div className="pagination-wrapper">
      <Pagination
        defaultCurrent={currentPage}
        total={totalPages}
        className="movie-pagination"
        onChange={onChangePage}
        hideOnSinglePage
      />
    </div>
  )
}

export default MoviePagination
