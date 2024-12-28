import {Outlet} from "react-router-dom";
import Nav from "../component/nav/nav.tsx";

function PrivateLayout() {
    return (
        <section className="min-h-screen">
            <Nav/>
          <main className="wrapper pl-64 pr-10">
              <header className="flex justify-between  my-3 text-xl font-bold">
                  <h3>Declaration</h3>
                  <h3>Leonel</h3>
              </header>
              <Outlet />
          </main>

        </section>
    )
}

export default PrivateLayout
