import './Navbar.css';

function Navbar() {
    return (
        <nav className="Navbar">
            <h1>Navbar text</h1>
            <div className="links">
                <a href="/">Home</a> |
                <a href="/blog">Blog</a> |
            </div>
        </nav>
    );
}

export default Navbar;