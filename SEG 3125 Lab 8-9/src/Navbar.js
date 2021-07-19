const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div classNAme="links">
                <a href="/">Home</a>
                <a href="/create"
                
                /*style={{
                    color:"white",
                    backgroundColor: "#f1356d",
                    boarderRadius:"8px"
                }}*/
                
                >New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;