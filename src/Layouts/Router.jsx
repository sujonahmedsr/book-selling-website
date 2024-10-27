import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import ErrorEvent from "../Pages/ErrorEvent";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import AllCards from "../Pages/CheckOut/AllCards";
import HeroPage from "../Components/HeroPage";

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
                path: '/AllCards',
                element: <AllCards></AllCards>
            }
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