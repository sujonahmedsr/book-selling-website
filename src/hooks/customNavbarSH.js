import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

const useCustomNavbarSH = () => {
    const location = useLocation()
    const [show, setShow] = useState(false)
    const [hide, setHide] = useState(true)

    const controlNavbar = () => {
        if (window.scrollY > 40) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        location.pathname === '/AllCards' || location.pathname === '/Order_Place' || location.pathname === '/Gitf_Order' ? setHide(false) : setHide(true)
    
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    
    }, [location])
    return [show, hide, location];
};

export default useCustomNavbarSH;