import { Link } from "react-router-dom";

const NavbarBottom = () => {
    const listOfNavigation = [
        {
            title: 'বই',
            link: '/books'
        },
        {
            title: 'ইলেক্ট্রনিক্স',
            link: '/electronics'
        },
        {
            title: 'সুপার স্টোর',
            link: '/superStore'
        },
        {
            title: 'অফার সমূহ',
            link: '/offers'
        },
        {
            title: 'প্রাতিষ্ঠানিক অর্ডার',
            link: '/organization'
        },
        {
            title: 'ঘরে বসে আয় করুন',
            link: '/giftFinder'
        },
        {
            title: 'রকমারি কুইজ',
            link: '/quiz'
        }
    ]
    return (
        <div className="flex items-center justify-center gap-10 font-thin text-gray-700 py-2 text-lg border-b border-gray-300">
            {
                listOfNavigation.map((item, id) => <div key={id + 1}>
                    <Link className="hover:text-red-500 duration-300" to={item.link}>{item.title}</Link>
                </div>)
            }
        </div>
    );
};

export default NavbarBottom;