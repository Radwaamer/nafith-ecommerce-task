import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    let errorStatus: number;
    let errorStatusText: string;

    if (isRouteErrorResponse(error)) {
        errorStatus = error.status;
        errorStatusText = error.statusText;
    } else {
        errorStatus = 404;
        errorStatusText = "Page Not Found";
    }

    return (
        <div className="notFound container h-screen flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-6xl">{errorStatus}</h1>
                <p className="text-3xl mb-3 mt-5">{errorStatusText}</p>
                <Link className="underline text-blue-600" to="products/1" replace={true}>
                    How about going back to safety?
                </Link>
            </div>
        </div>
    );
};

export default Error;