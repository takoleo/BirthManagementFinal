import {Link} from "react-router-dom";
import {NAV_LINK} from "../../Utils/data.ts";


function Nav() {
    return (
        <nav className="z-10 bg-white shadow-md w-56 fixed flex flex-col justify-between top-0 left-0 bottom-0 ">
            <Link to={"/private/declaration"}
            className="bg-blue-700 text-white uppercase text-center py-3 font-extrabold">new life</Link>
            <ul>
                {NAV_LINK.map(({to,label}, index)=>(
                    <li key={`navlink-${index}`}
                    className={`border-b border-gray-300 ${index === 0 ? "border-t" :null}`}
                    >

                        <Link to={to} className="py-3 pl-3 hover:bg-cyan-500 block">
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
            <button type="button" onClick={()=>null}
                    className="bg-red-700 text-white hover:text-red-700 rounded-sm py-3 font-normal hover:
                    border hover:border-red-700 hover:bg-white">
                Disconnection
            </button>
        </nav>

    )
}

export default Nav
