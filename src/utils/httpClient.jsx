const API="https://api.themoviedb.org/3";
export function get(path){
    return(
    fetch(API+path, {
        headers:{
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjFiMDYzNTU0MzZhMDI2YWFjMjRkYmQ4M2VmZmExOCIsInN1YiI6IjYzOTIyMWZjMWRiYzg4MDBjZWJkOTE5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IQtAYioftpp4kwE5Ca8U5zlYguVBzQFx1f5wmVoo_UE",
            "Content-Type": "application/json;charset=utf-"
        }
    }).then((result) => result.json())
    )}