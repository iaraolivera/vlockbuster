import placeholderImg from "../assets/placeholderImg.png"

export function getMovieImg(path, width) {
  return path
 ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholderImg;
  
  
}
