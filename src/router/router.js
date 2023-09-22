import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue"
import Shop from "../components/Shop.vue"
// import Products from "../components/Products.vue"
import Product from "../components/Product.vue"
import Sidebar from "../components/Sidebar.vue"

const routes = [
    {
        path:"/", components:
        {
            default:Home,
            LeftSideBar: Sidebar

        }
    },
    {
        path:"/products", components:
        {
            default:Shop,
            LeftSideBar: Sidebar

        }
    },
    {
        path:"/products/:id", components:
        {
            default:Product,
            LeftSideBar: Sidebar

        },name: 'product'
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router