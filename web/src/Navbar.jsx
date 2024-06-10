import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <div className="p-8 bg-gray-900 text-white flex align-center justify-between pl-32 pr-128">
            <span style={{ fontSize: 28 }}>Melte</span>
            <nav className="flex align-center gap-4">
                <Link to='/' className="text-white line-none" melte-hover="text-blue-300">Home</Link>
                <Link to='/docs' className="text-white line-none" melte-hover="text-blue-300">Docs</Link>
                {/* <Link to='/' className="text-white line-none" melte-hover="text-blue-300"></Link> */}
            </nav>
        </div>
    )
}

export default Navbar;