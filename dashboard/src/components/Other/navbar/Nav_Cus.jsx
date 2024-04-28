import "./Nav_Cus.css";

export const Nav_Cus = () => {
    return (
        <>
            <nav className="navbar">   
                <div className="navbar-brand">
                    <img src="./logo.png" alt="Logo" className="logo" />
                    <span className="brand">Medico</span>
                </div>
                
                <div className="navbar-links">
                    <a href="http://localhost:5173/customer" className="nav-link">Home</a>
                    <a href="http://localhost:5173/view" className="nav-link">View Medicines</a>
                    <a href="http://localhost:5173/contact" className="nav-link">Contacts</a>
                    <a href="http://localhost:5173/" className="nav-link">Logout</a>
                </div>
            </nav>
        </>
    )
}
