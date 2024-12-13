
import { Link } from 'react-router-dom';

const RelatedProducts = ({relatedProducts}) => {
    return (
        <div className='lg:col-span-3 col-span-1'>
                <div className='border border-gray-300 border-t border-t-primary'>
                    <h1 className='p-4'>আরো দেখুন…</h1>
                    <div className='flex flex-col'>
                        {
                            relatedProducts.length > 0 ?
                            relatedProducts.map(item =>
                                <Link key={item.id} to={`/booksDetails/${item.slug}`}>
                                    <div className='flex gap-4 border-t border-gray-300 p-2' >
                                        <img className='w-20 h-28' src={item.img} alt={item.title} />

                                        <div className='space-y-2'>
                                            <h1 className='text-lg'>{item.title}</h1>
                                            <h1 className='text-gray-500'>{'Unknown'}</h1>
                                            <h1 className="text-lg text-primary space-x-3">  {item.sell_price} tk. <del className='text-sm font-thin text-gray-400'>{item.price}</del></h1>
                                        </div>

                                    </div>
                                </Link>)
                                :
                                <div className='text-gray-600 border-t border-gray-300 p-2'>এই রিলেটেড কোনো বই খুঁজে পাওয়া যায়নি </div>
                        }
                    </div>
                </div>
            </div>
    );
};

export default RelatedProducts;