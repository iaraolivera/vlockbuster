import React from 'react'
import styles from './Pagination.module.css'

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
    <li className={styles.previous}>
      <a onClick={previusPage} className={`${styles.pagina} ${currentPage ===1 ? styles.inactivo : ""} `}aria-label="Previous">
        Previous
      </a>
    </li>
    {pageNumbers.map(noPage => (
        <li key={noPage} className={styles.itemPagina}><a className={`${styles.pagina} ${noPage === currentPage ? styles.activa : ''}`} 
        onClick={()=> specificPage(noPage)}
        >{noPage}</a></li>
    ))}
     <li className={styles.next}>
      <a onClick={nextPage} className={`${styles.pagina} ${currentPage >=pageNumbers.length ? styles.inactivo  : ""} `}  aria-label="Next">
        Next
      </a>
    </li>

     
    </ul>
  </nav>
  )
}
