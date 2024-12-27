import {Outlet} from "react-router-dom";

function PrivateLayout() {
    return (
        <section className="border border-red-500">
             PrivateLayout
            <Outlet/>
        </section>
    )
}

export default PrivateLayout
