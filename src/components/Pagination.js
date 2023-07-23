import React,{useState,useEffect} from 'react'
import { Pagination } from 'react-bootstrap'
import ReactPaginate from 'react-paginate';
import { useDispatch,useSelector } from 'react-redux';
import { getMoviPage } from '../redux/action/moviesAction';

const PaginationComponent = () => {

    const [pageCount, setpageCount] = useState(0)
    const dispatch =useDispatch()
    
    useEffect(() => {
        setpageCount(pages)
    }, [])
    const pages =useSelector((state=> state.pageCount))
    useEffect(()=>{
        setpageCount(pages)
    },[pages])

    const handlePageClick = (data) => {
        dispatch(getMoviPage(data.selected + 1))
    }

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="التالى"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="السابق"
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active "}
        />
    )
}

export default PaginationComponent
