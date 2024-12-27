import {Link} from "react-router-dom";

function Home() {
    return (
        <section className="container flex flex-col justify-center items-center min-h-screen">
           <article className="bg-white px-10 py-10 text-center rounded-sm shadow-md">
               <h1 className="text-2xl mb-6">Birth management</h1>
               <Link
                   to={`/private/declaration`}
                   className="border border-blue-600 text-blue-600 px-6 py-4 rounded-md hover:bg-blue-600 hover:text-white"> Declaration
               </Link>
           </article>

        </section>
    )
}

export default Home
