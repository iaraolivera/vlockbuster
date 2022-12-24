import { FaSpinner } from 'react-icons/fa';
import styles from "./Loading.module.css"

export default function Loading() {
  return (
    <div className={styles.loadingto}>
       <FaSpinner className={styles.animar} size={40}/>
    </div>
  )
}
