import { Link } from "react-router-dom";
import useAuth from "../Pages/providers/useAuth";
import { useGetProfileQuery } from "../RTK/Fearures/getBook/getBookApi";

const MyProfile = () => {
    const { user: UserId } = useAuth()
    const { data: userProfile, isLoading, isError, error } = useGetProfileQuery(UserId?.id)
    const user = userProfile?.user

    let content = null;

    if (isLoading && !isError) content = <div role="status" className="container mx-auto border-gray-100 rounded shadow animate-pulse grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 h-[80vh]">
        <div className=" w-20 mx-auto h-20 rounded-full  bg-gray-100">
        </div>

    </div>;

    if (!isLoading && isError) content = <p className="text-red-600 h-[80vh]">Error: {error}</p>;

    if (!isLoading && isError && !user) content = <div className="text-red-600 h-[80vh]">No Data Found...</div>;

    if (!isLoading && !isError && user) {
        content = <div className="p-5">
            <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg border border-gray-200">
                <div className="text-center">
                    <div className="mb-4">
                        {/* Avatar */}
                        {
                            user?.img ? <img src={user?.img} alt="profile" />
                            :
                            <div className="w-24 h-24 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                            <span className="text-3xl font-bold">
                                {user.name?.charAt(0).toUpperCase()}
                            </span>
                        </div>
                        }
                        
                    </div>
                    {/* User Information */}
                    <h2 className="text-2xl font-semibold text-gray-800">{user.name || "N/A"}</h2>
                </div>

                <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-500">Phone:</span>
                        <span className="text-gray-800">{user.phone || "N/A"}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-500">Email:</span>
                        <span className="text-gray-800">{user.email || "N/A"}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-500">District:</span>
                        <span className="text-gray-800">{user?.district?.name || "N/A"}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-500">Upazila:</span>
                        <span className="text-gray-800">{user?.upazila?.name || "N/A"}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-500">Address:</span>
                        <span className="text-gray-800">{user?.address || "N/A"}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-500">Account Created:</span>
                        <span className="text-gray-800">
                            {new Date(user.created_at).toLocaleDateString() || "N/A"}
                        </span>
                    </div>
                    {/* <div className="flex items-center justify-between">
                        <span className="text-gray-500">Email Verified:</span>
                        <span className={`text-gray-800`}>
                            {user.email_verified_at ? "Verified" : "Not Verified"}
                        </span>
                    </div> */}
                </div>
                <Link to={'/update_Profile'}>
                    <button className="text-center px-4 py-2 text-base bg-primary mt-5 rounded text-white">Update Your Profile</button>
                </Link>
            </div>
        </div>
    }


    return (
        <div className="container mx-auto px-4 p-5 space-y-5 md:mt-10">
            {content}
        </div>
    );
};

export default MyProfile;