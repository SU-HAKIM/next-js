import styles from "../styles/NotFound.module.css";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";


const NotFound = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 10000)
    }, [])
    return (<div className={styles.notFound}>
        Ooooops This page is Not Found.(404)
        <Link href="/"><a className={styles.backToHome}>Back To Home</a></Link>
    </div>);
}

export default NotFound;