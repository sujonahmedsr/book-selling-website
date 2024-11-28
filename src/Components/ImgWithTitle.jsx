import img1 from '../assets/Img/popular-books-min.webp'
import img2 from '../assets/Img/popular-publication-min-2.webp'
import img3 from '../assets/Img/favourite-writers-books-min.webp'
import img4 from '../assets/Img/popukar-brand-min.webp'
import { Link } from 'react-router-dom';
const ImgWithTitle = () => {
    return (
        <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 mt-16">
            <Link to={'/writers'}>
                <img src={img3} alt="popular writers" />
            </Link>
            <Link to={'/publications'}>
                <img src={img2} alt="popular publication" />
            </Link>
            <Link to={'/AllBooks'}>
                <img src={img1} alt="popular books" />
            </Link>
            <Link to={'/AllBooks'}>
                <img src={img4} alt="popular brand" />
            </Link>
        </div>
    );
};

export default ImgWithTitle;