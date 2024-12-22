import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useGetSingleAutorQuery } from '../../RTK/Fearures/getBook/getBookApi';
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";

const BooksSpecification = ({ bookDetails }) => {

    const { title, number_of_page, author, publication, subject, edition, category, ISBN } = bookDetails
    

    const { data: authorDeta } = useGetSingleAutorQuery(author?.slug)

    return (
        <div className='mt-10'>
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">Product Specification & Summary</h2>
            <Tabs>
                <TabList>
                    <Tab>Summary</Tab>
                    <Tab>Specification</Tab>
                    <Tab>Author</Tab>
                </TabList>

                <TabPanel>
                    <h2><p className='text-gray-500 font-thin text-sm pt-2 select-none'>পৃথিবীটা কী সুন্দর দ্যাখো! পাহাড়ঘেরা মাঠ। সাগরভরা ঢেউ। ফুল-ফসলে ভরা জমি। এসব দেখে বুঝি প্রশ্ন জাগে, কে বানালো এই পৃথিবী? কে সাজালো এমন পরিপাটি? <br /> <br /> সব বানিয়েছেন আল্লাহ। সবকিছু চালানও আল্লাহ। তাই তো তিনি বানিয়েছেন ফেরেশতা। আমাদের বানিয়েছেন। কেন বানিয়েছেন? তাঁর ইবাদত করবো বলে। তিনিই পাঠিয়েছেন নবি-রাসুল। দিয়েছেন আসমানি কিতাব। <br /> <br /> আমরা যখন থাকবো না পৃথিবীতে, যেতে হবে আরেক জগতে। তার নাম আখিরাত। সেখানে আমাদের বিচার হবে। ভালো কাজে মিলবে জান্নাত। আর মন্দ কাজে জাহান্নাম।</p></h2>
                    {/* <Markdown className='text-sm' rehypePlugins={[rehypeRaw]}>{description}</Markdown> */}
                </TabPanel>
                <TabPanel>
                    <h2><div className=" bg-white rounded-lg p-6">
                        <table className="table-auto border border-gray-300">
                            <tbody>
                                <tr className="border-b">
                                    <td className="px-4 py-2 font-medium text-gray-700 bg-gray-100 w-1/4">Title</td>
                                    <td className="px-4 py-2 w-full">{title}</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="px-4 py-2 font-medium text-gray-700 bg-gray-100">Author</td>
                                    <td className="px-4 py-2 text-blue-600 cursor-pointer">{author?.name}</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="px-4 py-2 font-medium text-gray-700 bg-gray-100">Publisher</td>
                                    <td className="px-4 py-2">{publication?.name}</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="px-4 py-2 font-medium text-gray-700 bg-gray-100">ISBN</td>
                                    <td className="px-4 py-2">{ISBN}</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="px-4 py-2 font-medium text-gray-700 bg-gray-100">Edition</td>
                                    <td className="px-4 py-2">{edition?.name}</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="px-4 py-2 font-medium text-gray-700 bg-gray-100">Number of Pages</td>
                                    <td className="px-4 py-2">{number_of_page}</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="px-4 py-2 font-medium text-gray-700 bg-gray-100">Subject</td>
                                    <td className="px-4 py-2">{subject?.name}</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 font-medium text-gray-700 bg-gray-100">Category</td>
                                    <td className="px-4 py-2">{category?.name}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div></h2>
                </TabPanel>
                <TabPanel>
                    <div className='flex gap-5 text-2xl'>
                        <img className='w-28 h-28 rounded-full border-2 border-gray-300' src={authorDeta?.data[0]?.img} alt="img Book" />
                        <div>
                            <h2>{authorDeta?.data[0]?.name}</h2>
                            <Markdown className='text-sm' rehypePlugins={[rehypeRaw]}>{authorDeta?.data[0]?.content}</Markdown>
                            {/* <h2 className='text-sm'>{authorDeta?.data[0]?.content}</h2> */}
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default BooksSpecification;