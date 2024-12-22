import { useShippingPolycyQuery } from "../../RTK/Fearures/getBook/getBookApi";
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";

const ShippingPolicy = () => {
    const { data: aboutUs, isLoading, isError, error } = useShippingPolycyQuery()
    console.log(aboutUs?.data?.content);
    
    let content;
    
        if (isLoading && !isError) content = <div className="text-lg font-semibold text-gray-700">Loading...</div>
    
        if (!isLoading && isError) content = <p className="text-red-600">Error: {error}</p>;
    
        if (!isLoading && isError && !aboutUs?.data?.length === 0) content = <div className="text-red-600">No Data Found...</div>;
    
        if (!isLoading && !isError) {
            content = <div>
                <div className="flex items-center justify-between border border-gray-200 shadow p-5">
                <h1 className="text-lg font-semibold text-primary">{aboutUs?.data?.title} </h1>
            </div>
                <Markdown className='text-sm mt-5' rehypePlugins={[rehypeRaw]}>{aboutUs?.data?.content}</Markdown>
            </div>
    
        }
    return (
        <div className="container mx-auto px-4 p-5 space-y-5 md:mt-10">
            {content}
        </div>
    );
};

export default ShippingPolicy;