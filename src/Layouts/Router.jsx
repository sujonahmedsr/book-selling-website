import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import ErrorEvent from "../Pages/ErrorEvent";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import AllCards from "../Pages/CheckOut/AllCards";
import HeroPage from "../Components/HeroPage";
import OrderDetails from "../Pages/OrderPage/OrderDetails";
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
import SuccessOrderMessage from "../Pages/OrderPage/SuccessOrderMessage";
import ModalBooks from "../Components/Books/ModalBooks";
import WishList from "../Components/WishList";
import GiftOrderDetails from "../Pages/OrderPage/GiftOrderDetails";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import MyProfile from "../Components/MyProfile";
import UpdateProfile from "../Components/UpdateProfile";
import AboutUs from "../Components/importantPages/AboutUs";
import ReturnPolicy from "../Components/importantPages/ReturnPolicy";
import RefundPolicy from "../Components/importantPages/RefundPolicy";
import ShippingPolicy from "../Components/importantPages/ShippingPolicy";
import TermsConditions from "../Components/importantPages/TermsConditions";
import PrivacyPolicy from "../Components/importantPages/PrivacyPolicy";
import ExchangePolicy from "../Components/importantPages/ExchangePolicy";
import ContactUs from "../Components/importantPages/ContactUs";

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
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/My_Profile',
                element: <PrivateRoute>
                    <MyProfile></MyProfile>
                </PrivateRoute>

            },
            {
                path: '/update_Profile',
                element: <PrivateRoute>
                    <UpdateProfile></UpdateProfile>
                </PrivateRoute>

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
                path: '/modal/:slug',
                element: <ModalBooks></ModalBooks>
            },
            {
                path: '/wishList',
                element: <WishList></WishList>
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
                element: <PrivateRoute>
                    <OrderDetails></OrderDetails>
                </PrivateRoute>

            },
            {
                path: '/Gitf_Order',
                element: <PrivateRoute>
                    <GiftOrderDetails></GiftOrderDetails>
                </PrivateRoute>
            },
            {
                path: '/OrderSuccessMessage',
                element: <SuccessOrderMessage></SuccessOrderMessage>
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/ReturnPolicy',
                element: <ReturnPolicy></ReturnPolicy>
            },
            {
                path: '/RefundPolicy',
                element: <RefundPolicy></RefundPolicy>
            },
            {
                path: '/ShippingPolicy',
                element: <ShippingPolicy></ShippingPolicy>
            },
            {
                path: '/TermsConditions',
                element: <TermsConditions></TermsConditions>
            },
            {
                path: '/PrivacyPolicy',
                element: <PrivacyPolicy></PrivacyPolicy>
            },
            {
                path: '/ExchangePolicy',
                element: <ExchangePolicy></ExchangePolicy>
            },
            {
                path: '/ContactUs',
                element: <ContactUs></ContactUs>
            },
        ]
    },

])
export default router