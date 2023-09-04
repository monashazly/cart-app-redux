import { createBrowserRouter } from "react-router-dom"
import App from "./App";
import Products from "./components/Products"

const router = createBrowserRouter([
    {
        path : '/',
        element : <App></App>
    },
    {
        path : '/products',
        element : <Products></Products>
    },
])

 export default router;