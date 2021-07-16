export const getStaticPaths = async () => {
    let res = await fetch('http://jsonplaceholder.typicode.com/users')
    let data = await res.json()

    const paths = data.map(sin => {
        return {
            params: { id: sin.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }

}

export const getStaticProps = async (context) => {
    const id = context.params.id

    let res = await fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
    let data = await res.json()

    return {
        props: {
            user: data
        }
    }
}


const Details = ({ user }) => {
    console.log(user)
    return (<div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
    </div>);
}

export default Details;