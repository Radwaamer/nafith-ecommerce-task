import { createBrowserRouter, RouterProvider} from "react-router-dom";
// layouts
import MainLayout from "@layouts/mainLayout/MainLayout";
// pages
import Products from "@pages/Products";
import Error from "@pages/Error";
import ProductDetails from "@pages/ProductDetails";
import Carts from "@pages/Carts";

const router = createBrowserRouter([
    {
        path: "/", element: <MainLayout />, errorElement: <Error />, children: [
            {
                index: true,
                path: "products/:page",
                element: <Products />,
                loader: ({ params }) => {
                    if (
                        typeof params.page !== "string" ||
                        !/^[1-9]+$/i.test((params.page))
                    ) {
                    throw new Response("Bad Request", {
                        statusText: "Page Number Not Found",
                        status: 400,
                    });
                    }
                    return true;
                },
            },
            {
                path: "products/:page/:productID",
                element: <ProductDetails />,
                loader: ({ params }) => {
                    if (
                        typeof params.page !== "string" ||
                        !/^[1-9]+$/i.test((params.page))
                    ) {
                    throw new Response("Bad Request", {
                        statusText: "Product Not Found",
                        status: 400,
                    });
                    }
                    return true;
                },
            },
            {
                path: "shopping-cart",
                element: <Carts />
            }
        ],
    },
]);

const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;