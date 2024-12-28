import {Link} from "react-router-dom";

function Home() {
    return (
        <section className="container flex flex-col justify-center items-center min-h-screen">
           <article className="bg-white px-16 py-16 text-center rounded-sm shadow">
               <h1 className="text-2xl mb-12 uppercase">Birth management</h1>
               <Link
                   to={`/private/declaration`}
                   className="border border-blue-600 text-black-600 px-6 py-4 mr-5 rounded-md hover:bg-blue-600 hover:text-white ">
                   Declaration
               </Link>

               <Link to={`/request`}
                     className="border border-red-400 text-black-600 px-6 py-4 rounded-md hover:bg-red-400 hover:text-white">
                   Request
               </Link>
           </article>

        </section>
    )
}

export default Home
