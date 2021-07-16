import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
    let res = await fetch('http://jsonplaceholder.typicode.com/users')
    let data = await res.json()

    return {
        props: {
            users: data
        }
    }
}


const Nested = ({ users }) => {
    return (
        <>
            <Head>
                <title>
                    Nested
                </title>
            </Head>
            <div>
                I am nested page.
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {
                    users.map(user => (
                        <Link href={`/nested/${user.id}`} key={user.id}>
                            {user.name}
                        </Link>
                    ))
                }
            </div>
        </>
    );
}

export default Nested;