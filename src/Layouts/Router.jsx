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
import WriterBooks from "../Components/writter/WriterBooks";
import PublicationBooks from "../Components/publication/PublicationBooks";
import Subjects from "../Components/subjects/Subjects";
import SubjectBooks from "../Components/subjects/SubjectBooks";
import Category from "../Components/category/Category";
import CategoryBooks from "../Components/category/CategoryBooks";

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
                path: '/writerBooks/:slug',
                element: <WriterBooks></WriterBooks>
            },
            {
                path: '/publications',
                element: <Publications></Publications>
            },
            {
                path: '/publications/:slug',
                element: <PublicationBooks></PublicationBooks>
            },
            {
                path: '/subjects',
                element: <Subjects></Subjects>
            },
            {
                path: '/subjectBooks/:slug',
                element: <SubjectBooks></SubjectBooks>
            },
            {
                path: '/category',
                element: <Category></Category>
            },
            {
                path: '/categoryBooks/:slug',
                element: <CategoryBooks></CategoryBooks>
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