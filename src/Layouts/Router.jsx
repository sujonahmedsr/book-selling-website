import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import ErrorEvent from "../Pages/ErrorEvent";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import AllCards from "../Pages/CheckOut/AllCards";
import HeroPage from "../Components/HeroPage";
import OrderDetails from "../Pages/OrderPage/OrderDetails";
import Electronics from "../Components/Electronics/Electronics";
import BooksDetails from "../Components/Books/BooksDetails";
import Writers from "../Components/writter/Writers";
import Publications from "../Components/publication/Publications";
import AllBooks from "../Components/Books/AllBooks";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorEvent></ErrorEvent>,
        children: [
            {
                path: '/',
                element: <HeroPage></HeroPage>
            },
            {
                path: '/AllBooks',
                element: <AllBooks></AllBooks>
            },
            {
                path: '/booksDetails/:slug',
                element: <BooksDetails></BooksDetails>
            },
            {
                path: '/Electronics',
                element: <Electronics></Electronics>
            },
            {
                path: '/writers',
                element: <Writers></Writers>
            },
            {
                path: '/publications',
                element: <Publications></Publications>
            },
            {
                path: '/AllCards',
                element: <AllCards></AllCards>
            },
            {
                path: '/Order_Place',
                element: <OrderDetails></OrderDetails>
            },
        ]
    },
    {
        path: 'signIn',
        element: <SignIn></SignIn>
    },
    {
        path: 'signUp',
        element: <SignUp></SignUp>
    }

])
export default router