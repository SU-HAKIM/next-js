import classes from "../styles/Footer.module.css";

const Footer = () => {
    return (<footer className={classes.footer} style={{ background: "#005678", textAlign: "center", padding: "10px", color: "#fff" }}>
        <p>Copy right &copy; 2021</p>
    </footer>);
}

export default Footer;