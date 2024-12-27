import { useRouteError } from "react-router-dom";

type errorType = {
    statusText?: string;
    message?:string;
}
function ErrorPage() {
    const error = useRouteError() as errorType;
    console.error(error)
    return (
        <div>
        <h1> the page you are looking for is not found </h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage
