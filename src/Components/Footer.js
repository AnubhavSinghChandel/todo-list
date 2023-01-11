function Footer() {
    let footerStyle = { // Stack overflowed this heck, made me cry lol : https://stackoverflow.com/a/63894796
        marginTop: "auto"
    }
    return (
        <footer className="bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center">
                Copyright &copy; 2021
            </p>
        </footer>
    );
}

export default Footer;