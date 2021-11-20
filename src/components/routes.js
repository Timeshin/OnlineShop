import { lazy } from "react"

const CartPage = lazy(() => import("./pages/CartPage/Cart"))
const ProductPage = lazy(() => import("./pages/ProductPage/ProductPage"))
const ProductsList = lazy(() => import("./pages/ProductsList/ProductsList"))

export const routes = [
    {
        path: "/cart",
        component: CartPage
    },
    {
        path: "/:name/:id",
        component: ProductPage
    },
    {
        path: "/:name",
        component: ProductsList
    }
]