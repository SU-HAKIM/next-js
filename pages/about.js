import classes from "../styles/About.module.css";
import Head from "next/head";


const About = () => {
    return (
        <>
            <Head>
                <title>
                    About page
                </title>
            </Head>
            <div className={classes.about}>
                <h1>I am learning Next.js</h1>
            </div>
        </>
    );
}

export default About;