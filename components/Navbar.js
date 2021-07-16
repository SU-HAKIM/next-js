import Link from "next/link";
import Image from "next/image"

const Navbar = () => {
    return (<nav style={{ display: "flex", justifyContent: "space-between", background: "#004567", padding: "20px" }}>
        <Image src='/vercel.svg' width="100px" height="20px" alt="logo" />
        <div style={{ display: "flex" }}>
            <Link href="/"><a style={{ margin: "0px 10px", textDecoration: "none", color: "white" }}>Home</a></Link>
            <Link href="/about"><a style={{ margin: "0px 10px", textDecoration: "none", color: "white" }}>About</a></Link>
            <Link href="/nested"><a style={{ margin: "0px 10px", textDecoration: "none", color: "white" }}>Nested</a></Link>
            <Link href="/nested/test"><a style={{ margin: "0px 10px", textDecoration: "none", color: "white" }}>Test</a></Link>
        </div>
    </nav>);
}
export default Navbar;