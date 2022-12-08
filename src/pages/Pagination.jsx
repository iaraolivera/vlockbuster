import React from 'react'

export const Pagination = ({moviePerPage, totalMovies, currentPage, setCurrentPage}) => {

    const pageNumbers=[];
        for (let i =1; i<=Math.ceil(totalMovies/moviePerPage); i++){
            pageNumbers.push(i)
        }

        const previusPage=()=>{
          
            setCurrentPage(currentPage - 1)
           
        }
        const nextPage=()=>{
          
            setCurrentPage(currentPage + 1)
           
        }
         
        
        const specificPage=(n)=>{
            setCurrentPage(n)
        }
        

   
  return (
    <nav aria-label="Page navigation example mb-5" >
    <ul className="pagination justify-content-center">
    <li className="page-item">
      <a onClick={previusPage} className={`page-link ${currentPage ===1 ? "disabled" : ""} `}aria-label="Previous">
        Previous
      </a>
    </li>
    {pageNumbers.map(noPage => (
        <li key={noPage} className="page-item"><a className={`page-link ${noPage === currentPage ? "active" : ''}`} 
        onClick={()=> specificPage(noPage)}
        >{noPage}</a></li>
    ))}
     <li className="page-item">
      <a onClick={nextPage} className={`page-link ${currentPage >=pageNumbers.length ? "disabled" : ""} `}  aria-label="Next">
        Next
      </a>
    </li>

     
    </ul>
  </nav>
  )
}
