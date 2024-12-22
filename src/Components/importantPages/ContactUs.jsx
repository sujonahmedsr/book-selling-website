
const ContactUs = () => {
    return (
        <div className="container mx-auto px-4 p-5 space-y-5 md:mt-10">
            <div>
                <div className="flex items-center justify-between border border-gray-200 shadow p-5">
                    <h1 className="text-lg font-semibold text-primary">Contact us </h1>
                </div>
                <div className="grid grid-cols-12 gap-5 mt-5">
                    <form className=" col-span-7">
                        <div className="flex-1">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                            <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div className="flex-1 mt-6">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                            <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div className="flex-1 mt-6">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone</label>
                            <input type="number" placeholder="Phone Number" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div className="w-full mt-6">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                            <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Message"></textarea>
                        </div>

                        <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-md">
                            get in touch
                        </button>
                    </form>
                    <div className="col-span-5 w-full">
                        <iframe className="w-full h-[40vh]" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27956.49723730801!2d89.7058914!3d24.461311999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1734850527421!5m2!1sen!2sbd" ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;