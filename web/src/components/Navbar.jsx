import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <div className="p-8 bg-gray-800 text-white flex align-center justify-between pl-32 pr-128">
            <h1>Melte</h1>
            <nav className="flex align-center gap-4">
                <Link to='/' className="text-white line-none" melte-hover="text-blue-300">Home</Link>
                <Link to='/docs' className="text-white line-none" melte-hover="text-blue-300">Docs</Link>
                <Link to='/ui' className="text-white line-none" melte-hover="text-blue-300">Melte UI</Link>
                {/* <Link to='/' className="text-white line-none" melte-hover="text-blue-300"></Link> */}
            </nav>
        </div>
    )
}

export default Navbar;