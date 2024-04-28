import "./Nav_Cus.css";

export const Nav_Adm = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-brand">
                    <img src="./logo.png" alt="Logo" className="logo" />
                    <span className="brand-name">Medico</span>
                </div>
                <div className="navbar-links">
                    <a href="http://localhost:5173/admin" className="nav-link">Home</a>
                    <a href="http://localhost:5173/manage" className="nav-link">Manage Medicines</a>
                    <a href="http://localhost:5173/" className="nav-link">Logout</a>
                </div>
            </nav>
        </>
    )
}
